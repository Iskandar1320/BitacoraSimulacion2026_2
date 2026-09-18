import * as THREE from 'three/webgpu';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import WebGPU from 'three/addons/capabilities/WebGPU.js';
import './styles.css';

import { createParameters } from './simulation/parameters.js';
import { createSimulation } from './simulation/createSimulation.js';
import { createLabPanel } from './ui/labPanel.js';
import { createPerformanceHud } from './ui/performanceHud.js';

const PARTICLE_COUNT = 131072; // 2^17. Increase only after measuring performance.

function createContourReference(scene) {
  const group = new THREE.Group();
  const material = new THREE.LineBasicMaterial({
    color: '#367f9f',
    transparent: true,
    opacity: 0.22
  });

  for (let radius = 0.8; radius <= 4.8; radius += 0.5) {
    const points = [];
    const segments = 96;
    for (let i = 0; i < segments; i += 1) {
      const a = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, -0.45));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const ring = new THREE.LineLoop(geometry, material);
    group.add(ring);
  }

  scene.add(group);
  return group;
}

async function main() {
  const mount = document.querySelector('#app');

  if (!WebGPU.isAvailable()) {
    mount.appendChild(WebGPU.getErrorMessage());
    throw new Error('Este proyecto requiere WebGPU para ejecutar compute shaders.');
  }

  // THREE.JS MENTAL MODEL: scene + camera + renderer ---------------------
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#03090e');

  const camera = new THREE.PerspectiveCamera(48, innerWidth / innerHeight, 0.05, 100);
  camera.position.set(0, 0.8, 11.5);

  const renderer = new THREE.WebGPURenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);
  mount.appendChild(renderer.domElement);
  await renderer.init();

  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.enableDamping = true;
  orbit.target.set(0, 0, 0);

  const params = createParameters();
  const simulation = createSimulation({ renderer, scene, params, count: PARTICLE_COUNT });

  // LAB HELPERS -----------------------------------------------------------
  const attractorHelper = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 16, 12),
    new THREE.MeshBasicMaterial({ color: '#ffffff' })
  );
  scene.add(attractorHelper);

  const axes = new THREE.AxesHelper(1.5);
  scene.add(axes);

  // PERFORMANCE VISUAL REFERENCES ----------------------------------------
  const contourReference = createContourReference(scene);
  const summitMarker = new THREE.Mesh(
    new THREE.RingGeometry(0.09, 0.16, 40),
    new THREE.MeshBasicMaterial({
      color: '#b8f3ff',
      transparent: true,
      opacity: 0.88,
      side: THREE.DoubleSide
    })
  );
  summitMarker.position.z = 0.2;
  scene.add(summitMarker);

  // POINTER -> WORLD POSITION --------------------------------------------
  const pointerNdc = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const interactionPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const hit = new THREE.Vector3();

  addEventListener('pointermove', (event) => {
    pointerNdc.x = (event.clientX / innerWidth) * 2 - 1;
    pointerNdc.y = -(event.clientY / innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointerNdc, camera);
    if (raycaster.ray.intersectPlane(interactionPlane, hit)) {
      params.attractor.value.copy(hit);
      attractorHelper.position.copy(hit);
      summitMarker.position.set(hit.x, hit.y, 0.2);
    }
  });

  let paused = false;
  let mode = 'LAB';
  let panel;
  let currentStage = 1;
  let currentLabPreset = 'inertia';
  let avalancheActive = false;
  let savedRadialStrength = params.radialStrength.value;
  let savedRadialEnabled = params.radialEnabled.value;
  let savedContourStrength = params.contourStrength.value;

  const performanceHud = createPerformanceHud();

  const clearForces = () => {
    params.windEnabled.value = 0;
    params.radialEnabled.value = 0;
    params.vortexEnabled.value = 0;
    params.contourEnabled.value = 0;
    params.dragEnabled.value = 0;
    params.wind.value.set(0, 0, 0);
  };

  const applyLabPreset = (id) => {
    avalancheActive = false;
    currentLabPreset = id;
    clearForces();
    params.initialDepth.value = 3.5;
    params.initialSpeed.value = 0;
    params.maxSpeed.value = 5.0;
    params.particleSize.value = 0.035;

    if (id === 'inertia') {
      params.initialSpeed.value = 0.8;
    } else if (id === 'wind') {
      params.windEnabled.value = 1;
      params.wind.value.set(1.5, 0, 0);
    } else if (id === 'attract') {
      params.radialEnabled.value = 1;
      params.radialStrength.value = 3.0;
    } else if (id === 'repel') {
      params.radialEnabled.value = 1;
      params.radialStrength.value = -3.0;
    } else if (id === 'vortex') {
      params.radialEnabled.value = 1;
      params.radialStrength.value = 1.0;
      params.vortexEnabled.value = 1;
      params.vortexStrength.value = 3.0;
      params.dragEnabled.value = 1;
      params.dragCoefficient.value = 0.08;
    }

    simulation.reset();
    panel?.refresh();
  };

  // SCORE: four manually selected sections for live interpretation.
  const applyPerformanceStage = (stage, { reset = true } = {}) => {
    avalancheActive = false;
    currentStage = stage;
    clearForces();
    params.initialDepth.value = 0.7;
    params.maxSpeed.value = 5.5;
    params.particleSize.value = 0.032;

    // 1 · Bruma: slow movement and subtle contour bands.
    if (stage === 1) {
      params.initialSpeed.value = 0.18;
      params.contourEnabled.value = 1;
      params.contourStrength.value = 0.55;
      params.contourFrequency.value = 2.2;
      params.vortexEnabled.value = 1;
      params.vortexStrength.value = 0.35;
      params.dragEnabled.value = 1;
      params.dragCoefficient.value = 0.16;
    }

    // 2 · Ascenso: particles are pulled toward the moving summit.
    if (stage === 2) {
      params.initialSpeed.value = 0.24;
      params.radialEnabled.value = 1;
      params.radialStrength.value = 2.25;
      params.contourEnabled.value = 1;
      params.contourStrength.value = 0.85;
      params.contourFrequency.value = 2.6;
      params.vortexEnabled.value = 1;
      params.vortexStrength.value = 0.9;
      params.dragEnabled.value = 1;
      params.dragCoefficient.value = 0.12;
    }

    // 3 · Cresta: circulation becomes dominant and a lateral wind appears.
    if (stage === 3) {
      params.initialSpeed.value = 0.30;
      params.radialEnabled.value = 1;
      params.radialStrength.value = 0.8;
      params.contourEnabled.value = 1;
      params.contourStrength.value = 1.35;
      params.contourFrequency.value = 3.1;
      params.vortexEnabled.value = 1;
      params.vortexStrength.value = 3.5;
      params.windEnabled.value = 1;
      params.wind.value.set(0.42, 0.10, 0);
      params.dragEnabled.value = 1;
      params.dragCoefficient.value = 0.075;
    }

    // 4 · Ruptura: the field changes sign and the flow opens outward.
    if (stage === 4) {
      params.initialSpeed.value = 0.36;
      params.radialEnabled.value = 1;
      params.radialStrength.value = -1.45;
      params.contourEnabled.value = 1;
      params.contourStrength.value = 2.0;
      params.contourFrequency.value = 3.8;
      params.vortexEnabled.value = 1;
      params.vortexStrength.value = -2.4;
      params.windEnabled.value = 1;
      params.wind.value.set(-0.55, 0.32, 0);
      params.dragEnabled.value = 1;
      params.dragCoefficient.value = 0.055;
    }

    performanceHud.setStage(stage);
    panel?.refresh();
    if (reset) simulation.reset();
  };

  performanceHud.onStageChange((stage) => {
    if (mode === 'PERFORMANCE') applyPerformanceStage(stage);
  });

  const hud = document.createElement('div');
  hud.className = 'hud';
  document.body.append(hud);

  const setMode = (next) => {
    mode = next;
    const lab = mode === 'LAB';

    panel.setVisible(lab);
    performanceHud.setVisible(!lab);
    axes.visible = lab;
    attractorHelper.visible = lab;
    contourReference.visible = !lab;
    summitMarker.visible = !lab;
    orbit.enabled = lab;

    if (lab) {
      hud.innerHTML = '<strong>LAB</strong> · P: performance · R: reset · 1–5: pruebas';
      applyLabPreset(currentLabPreset);
    } else {
      hud.innerHTML = '';
      applyPerformanceStage(currentStage);
    }
  };

  panel = createLabPanel({
    params,
    onReset: () => simulation.reset(),
    onPreset: applyLabPreset,
    onModeChange: () => setMode(mode === 'LAB' ? 'PERFORMANCE' : 'LAB'),
    onPauseChange: () => paused = !paused
  });

  setMode('LAB');

  // LIVE INSTRUMENT MAPPING ----------------------------------------------
  addEventListener('keydown', (event) => {
    if (event.repeat) return;

    if (event.code === 'KeyP') {
      setMode(mode === 'LAB' ? 'PERFORMANCE' : 'LAB');
      return;
    }

    if (event.code === 'KeyR') {
      simulation.reset();
      return;
    }

    if (mode === 'LAB') {
      if (event.code === 'Digit1') applyLabPreset('inertia');
      if (event.code === 'Digit2') applyLabPreset('wind');
      if (event.code === 'Digit3') applyLabPreset('attract');
      if (event.code === 'Digit4') applyLabPreset('repel');
      if (event.code === 'Digit5') applyLabPreset('vortex');
      return;
    }

    if (event.code === 'Digit1') applyPerformanceStage(1);
    if (event.code === 'Digit2') applyPerformanceStage(2);
    if (event.code === 'Digit3') applyPerformanceStage(3);
    if (event.code === 'Digit4') applyPerformanceStage(4);

    // AVALANCHE: deliberately invert the radial field while the key is held.
    if (event.code === 'Space' && !avalancheActive) {
      event.preventDefault();
      avalancheActive = true;
      savedRadialStrength = params.radialStrength.value;
      savedRadialEnabled = params.radialEnabled.value;
      savedContourStrength = params.contourStrength.value;
      params.radialEnabled.value = 1;
      params.radialStrength.value = -6.0;
      params.contourEnabled.value = 1;
      params.contourStrength.value = Math.max(savedContourStrength, 2.6);
      panel?.refresh();
    }
  });

  addEventListener('keyup', (event) => {
    if (event.code === 'Space' && avalancheActive) {
      avalancheActive = false;
      params.radialEnabled.value = savedRadialEnabled;
      params.radialStrength.value = savedRadialStrength;
      params.contourStrength.value = savedContourStrength;
      panel?.refresh();
    }
  });

  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  // FRAME LOOP ------------------------------------------------------------
  renderer.setAnimationLoop(() => {
    if (!paused) simulation.stepSimulation();
    orbit.update();
    renderer.render(scene, camera);
  });
}

main().catch((error) => {
  console.error(error);
  const pre = document.createElement('pre');
  pre.style.cssText = 'position:fixed;inset:16px;white-space:pre-wrap;color:#fff;z-index:50';
  pre.textContent = String(error?.stack || error);
  document.body.append(pre);
});
