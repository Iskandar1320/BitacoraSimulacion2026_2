# Evidencias · Unidad 3

Este archivo separa lo que ya puede verificarse en código de lo que requiere una captura real en el navegador.

## Evidencia técnica disponible

- El estado de partículas vive en `positionBuffer` y `velocityBuffer`.
- Las fuerzas se acumulan en `createSimulation.js` antes de integrar.
- La integración usa Euler semiimplícito.
- Los cinco presets del LAB aíslan combinaciones de fuerzas.
- La fuerza `contourForce` puede activarse/desactivarse y tiene intensidad y frecuencia independientes.
- PERFORMANCE tiene cuatro momentos seleccionables manualmente.
- `Espacio` aplica una repulsión fuerte temporal y al soltarlo restaura el estado anterior.
- El workflow de Pages está ubicado en `.github/workflows/deploy-unidad3.yml`.

## Capturas / GIF por añadir

Cuando el proyecto se ejecute en Chrome o Edge con WebGPU, guardar las evidencias dentro de una carpeta como:

```text
Unidad3/evidencias/
├── 01_inercia.gif
├── 02_viento_x.gif
├── 03_atraccion.gif
├── 04_repulsion.gif
├── 05_vortice.gif
├── 06_performance_bruma.png
├── 07_performance_cresta.png
├── 08_avalancha.gif
└── 09_deploy.png
```

Después se pueden incrustar así:

```md
![Prueba de inercia](./evidencias/01_inercia.gif)
```

## Qué debe verse en cada prueba

| Evidencia | Propiedad observable |
|---|---|
| Inercia | movimiento continúa sin aceleración deliberada |
| Viento +X | el campo gana velocidad hacia la derecha |
| Atracción | partículas convergen hacia el puntero |
| Repulsión | las partículas se alejan del puntero |
| Vórtice | aparece movimiento tangencial/circular |
| Bruma | campo contenido con bandas suaves |
| Cresta | circulación dominante y desplazamiento lateral |
| Avalancha | expansión rápida mientras se mantiene Espacio |
| Deploy | URL pública carga sin errores críticos |

## Guion corto para presentar

1. Mostrar LAB y explicar que posición/velocidad son el estado.
2. Ejecutar atracción y repulsión para demostrar el cambio de signo.
3. Ejecutar vórtice y explicar que la fuerza es tangencial.
4. Activar los contornos y explicar `sin(distancia · frecuencia)`.
5. Cambiar a PERFORMANCE con `P`.
6. Recorrer Bruma → Ascenso → Cresta → Ruptura.
7. Mantener `Espacio` brevemente para mostrar la avalancha.
8. Explicar que la música guía las decisiones, pero no controla automáticamente el sistema.
