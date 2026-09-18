import * as THREE from 'three/webgpu';
import { uniform } from 'three/tsl';

// Uniforms are CPU-side values that TSL exposes to the GPU.
// Changing .value does not rebuild the compute shader.
export function createParameters() {
  return {
    dt: uniform(1 / 60),
    timeScale: uniform(1.0),
    initialSpeed: uniform(0.35),
    initialDepth: uniform(3.5),
    maxSpeed: uniform(5.0),
    boundsSize: uniform(10.0),
    particleSize: uniform(0.035),

    windEnabled: uniform(0.0),
    wind: uniform(new THREE.Vector3(0.0, 0.0, 0.0)),

    radialEnabled: uniform(1.0),
    attractor: uniform(new THREE.Vector3(0.0, 0.0, 0.0)),
    radialStrength: uniform(2.2),
    softening: uniform(0.35),

    vortexEnabled: uniform(1.0),
    vortexStrength: uniform(1.4),

    // Fuerza propia de la propuesta: alterna bandas de atracción y repulsión
    // alrededor del atractor para sugerir curvas de nivel / corrientes topográficas.
    contourEnabled: uniform(0.0),
    contourStrength: uniform(0.0),
    contourFrequency: uniform(2.6),

    dragEnabled: uniform(1.0),
    dragCoefficient: uniform(0.12)
  };
}
