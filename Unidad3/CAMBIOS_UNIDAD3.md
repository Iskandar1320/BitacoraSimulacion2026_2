# Cambios realizados en la Unidad 3

## Código

- Se conservaron las cinco pruebas originales del modo LAB.
- Se añadió `initialDepth` para permitir una nube tridimensional en LAB y un campo más plano en PERFORMANCE.
- Se añadió una fuerza de contornos topográficos basada en seno de la distancia.
- Se añadieron los parámetros `contourEnabled`, `contourStrength` y `contourFrequency`.
- Se creó un score de cuatro momentos: Bruma, Ascenso, Cresta y Ruptura.
- Se añadió la acción temporal Avalancha con `Espacio`.
- Se creó `src/ui/performanceHud.js`.
- Se añadieron referencias visuales de curvas de nivel y un marcador de cumbre.
- Se separó la interacción de LAB y PERFORMANCE.

## Documentación

- Se completó `Unidad3/RetoDiseño.md`.
- Se creó `Unidad3/Evidencias.md`.
- Se actualizó el README del proyecto.
- Se actualizó el README general de la bitácora.
- Se documentó la trazabilidad de las modificaciones hechas con IA.

## GitHub Actions

El workflow de despliegue se movió desde el subproyecto a:

```text
.github/workflows/deploy-unidad3.yml
```

Esto es necesario porque GitHub solo detecta workflows desde `.github/workflows/` en la raíz del repositorio.

## Antes de entregar

1. Extraer/copiar estos archivos sobre el repositorio local.
2. Ejecutar `npm install` en `Unidad3/forces-instrument-u3`.
3. Ejecutar `npm run dev` y probar LAB/PERFORMANCE.
4. Capturar las evidencias indicadas en `Evidencias.md`.
5. Hacer `git add`, `commit` y `push`.
6. Revisar el job de GitHub Actions.
7. Abrir la URL pública y comprobar consola/funcionamiento.
