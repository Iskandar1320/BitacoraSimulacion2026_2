# U3 · Corrientes topográficas — Forces Instrument

Instrumento de partículas desarrollado para la Unidad 3 de **Simulación de sistemas físicos interactivos** a partir del caso de estudio `forces-instrument-u3`.

La propuesta interpreta **LesAlpx** mediante un campo de partículas conducido manualmente. El puntero funciona como una cumbre móvil y el movimiento emerge de fuerzas de atracción/repulsión, vórtice, viento, drag y una fuerza propia de contornos topográficos.

## Requisitos

- Node.js 22 recomendado.
- Navegador actual con WebGPU, preferiblemente Chrome o Edge.
- Git para trabajar con el repositorio.

## Ejecutar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Modos

### LAB

Sirve para aislar fuerzas y verificar predicciones.

- `1` Inercia
- `2` Fuerza constante +X
- `3` Atracción
- `4` Repulsión
- `5` Vórtice
- `R` Reset
- `P` Cambiar a PERFORMANCE

### PERFORMANCE

Instrumento reducido para interpretación en vivo.

- `1` Bruma
- `2` Ascenso
- `3` Cresta
- `4` Ruptura
- `Espacio` Avalancha temporal
- `Puntero` Mover cumbre/atractor
- `R` Reset
- `P` Volver a LAB

## Fuerza propia: contornos

La propuesta añade una fuerza radial oscilante:

```text
F_contorno = r̂ · sin(d · f) · k
```

Esto crea bandas concéntricas que alternan el sentido de la fuerza según la distancia al atractor. Los parámetros están definidos en `src/simulation/parameters.js` y la ecuación vive en `src/simulation/createSimulation.js`.

## Arquitectura

```text
src/
├── main.js
├── simulation/
│   ├── createSimulation.js
│   └── parameters.js
└── ui/
    ├── labPanel.js
    └── performanceHud.js
```

- `main.js`: escena, cámara, interacción y score.
- `parameters.js`: uniforms modificables desde CPU.
- `createSimulation.js`: buffers, fuerzas, integración y render.
- `labPanel.js`: interfaz de laboratorio.
- `performanceHud.js`: interfaz mínima de interpretación.

## Despliegue

El workflow de GitHub Pages está en la raíz del repositorio general:

```text
.github/workflows/deploy-unidad3.yml
```

Al hacer push a `main`, GitHub Actions ejecuta `npm ci`, `npm run build` y publica `dist/`.

## Documentación de la unidad

- [Reto de diseño](../RetoDiseño.md)
- [Evidencias](../Evidencias.md)
- [Guía del estudiante](GUIA_ESTUDIANTE.md)
- [Pruebas y depuración](PRUEBAS_Y_DEPURACION.md)
