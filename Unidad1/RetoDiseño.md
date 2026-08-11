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

### Muestra Proyecto
<!-- Video/Gif (OJALA) -->
[Incetidumbre_V0.0.5](https://editor.p5js.org/Alex1320/full/56NZ6E_Ub)

