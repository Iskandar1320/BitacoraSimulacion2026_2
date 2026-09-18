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

