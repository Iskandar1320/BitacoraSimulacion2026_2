# Estado de la Unidad 3

## Implementado

- Cinco pruebas de LAB conservadas.
- Concepto propio: **Corrientes topográficas**.
- Fuerza adicional de contornos basada en `sin(distancia · frecuencia)`.
- PERFORMANCE con cuatro momentos del score.
- Acción temporal “Avalancha” con la barra espaciadora.
- Interfaz visual diferenciada entre LAB y PERFORMANCE.
- Documentación del reto y trazabilidad de cambios con IA.
- Workflow de GitHub Pages ubicado en la raíz del repositorio.

## Validación realizada en este entorno

- Los archivos JavaScript pasan verificación sintáctica con `node --check`.
- Se revisó la estructura del workflow y las rutas del proyecto.

## Validación que requiere el equipo/navegador del estudiante

Este entorno no pudo completar la instalación limpia de las dependencias nativas de Vite/Rolldown para Linux. El ZIP original contenía dependencias instaladas para Windows. Por eso quedan por comprobar en el equipo del estudiante o en GitHub Actions:

1. `npm ci` / `npm install`.
2. `npm run build`.
3. ejecución WebGPU en Chrome/Edge.
4. capturas/GIF del LAB y PERFORMANCE.
5. URL pública después del push.

Consultar `Evidencias.md` para la lista de capturas recomendadas.
