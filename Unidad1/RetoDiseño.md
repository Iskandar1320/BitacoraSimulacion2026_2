# Reto de diseño: Navegar la incertidumbre

## Campo de posibilidades

En esta primera versión se diseñó un sistema generativo compuesto por partículas que se desplazan en tiempo real. El objetivo fue representar la incertidumbre como un conjunto de reglas probabilísticas, no como ausencia de estructura.

El sistema combina caminata aleatoria, distribución normal, ruido Perlin y eventos excepcionales inspirados en Lévy flight. La interacción del visitante no controla directamente las partículas, sino que modifica sus tendencias y probabilidades de movimiento.


## Momentos interpretados

- **Posibilidad:** las partículas pueden tomar múltiples direcciones mediante caminata aleatoria.
- **Tendencia:** una dirección global se acumula lentamente hacia el punto de influencia.
- **Normalidad:** la mayoría de los movimientos son pequeños o moderados gracias al uso de distribución normal.
- **Excepción:** algunos eventos improbables generan saltos largos que permiten explorar zonas nuevas.
- **Influencia:** la presencia del visitante modifica el comportamiento del sistema sin controlarlo totalmente.

## Decisiones tomadas

Se decidió trabajar con partículas y rastros porque permiten visualizar trayectorias, acumulaciones y desviaciones. También se evitó representar literalmente los conceptos con texto, buscando traducirlos a comportamiento visual.

## Dificultades

Una dificultad inicial fue lograr que la interacción no se sintiera como control directo. Para resolverlo, el mouse no mueve las partículas, sino que altera sus probabilidades y tendencias internas.

## Uso de IA generativa

Se utilizó IA generativa como apoyo para estructurar el primer prototipo en p5.js, proponer una traducción visual de los conceptos del reto y organizar la explicación para la bitácora. Posteriormente, el código fue revisado y ajustado para mantener una sola pieza coherente.

## Muestra Proyecto
<!-- Video/Gif (OJALA) -->
[Incetidumbre_V0.0.5](https://editor.p5js.org/Alex1320/full/56NZ6E_Ub)

## Video Proyecto
<video src="Videos/Fuerzas_01.mp4" controls width="360"></video>

https://github.com/user-attachments/assets/c3480473-626e-4ca8-99fa-2e1b7ac32df0



## AutoEvaluación

|   Criterio	|   Cumplo	|   No cumplo	|   Evidencia
|---|---:|---:|---:|
|**Encargo completo: interpreto los cinco momentos dentro de un mismo sistema visual.**	   |    Si|	🔳	|   [Evidencias](Evidencias.md)
|**Simulación con intención: utilizo al menos tres conceptos de la unidad para comunicar las ideas del encargo.**	|Si	|🔳	| [Evidencias](Evidencias.md)
|**Interacción significativa: la interacción modifica el comportamiento o las probabilidades del sistema, que también funciona sin intervención.**	    |Si|🔳	|[Evidencias](Evidencias.md)
|**Prototipo funcional: la experiencia puede ejecutarse y recorrerse completa sin errores que impidan comprenderla.**	|Si	|🔳	|[Evidencias](Evidencias.md)
|**Proceso documentado: la bitácora evidencia avances, decisiones, dificultades, soluciones, uso de IA y enlace al prototipo.**	|Si	|🔳	| [Evidencias](Evidencias.md)
