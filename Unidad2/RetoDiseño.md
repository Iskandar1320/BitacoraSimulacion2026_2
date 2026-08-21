## Cuidado y control

En este reto se diseñó un sistema generativo inspirado en **Particle Life** para explorar la tensión entre **cuidado y control**.

La intención principal fue representar cómo una relación de acompañamiento puede transformarse en una relación de control cuando la necesidad de cercanía se vuelve demasiado intensa.

El sistema no utiliza trayectorias predefinidas. Cada partícula tiene posición, velocidad y aceleración, y su movimiento surge de las relaciones locales de atracción y repulsión que mantiene con otras poblaciones.

La pregunta que orientó el diseño fue:

**¿En qué momento la necesidad de permanecer cerca de alguien deja de sentirse como cuidado y comienza a convertirse en control?**

---

## Intención

 **Quiero explorar la tensión entre cuidado y control.**

Se buscó que esta contradicción fuera perceptible directamente en el comportamiento de las partículas y no solamente mediante sus colores o nombres.

Los cuidadores sienten una fuerte necesidad de permanecer cerca de los protegidos, mientras que los protegidos responden de manera distinta dependiendo de la configuración probada.

Esto permite que aparezcan comportamientos como:

- Acompañamiento.
- Seguimiento.
- Agrupaciones temporales.
- Órbitas.
- Concentraciones.
- Persecuciones.
- Separaciones.
- Escapes.
- Reorganizaciones.

El comportamiento exacto no está programado directamente, sino que emerge de las relaciones entre las partículas.

---

# Diseño del sistema

## Tipos de partículas

El sistema utiliza tres poblaciones diferentes:

### Cuidadores

Son las partículas con mayor interés en acercarse a los protegidos.

Su función principal es producir seguimiento y agrupaciones alrededor de estos.

Seleccioné una población de cuidadores porque quiero hacer perceptible la necesidad constante de cercanía. Espero que produzca seguimiento, acompañamiento y persecución.

### Protegidos

Son las partículas sobre las que se concentra principalmente la relación de los cuidadores.

Dependiendo de la configuración, pueden aceptar parcialmente la cercanía o rechazarla con mayor intensidad.

Seleccioné una población de protegidos porque quiero hacer perceptible una relación en la que la cercanía no sea necesariamente recíproca. Espero que produzca tensiones entre acompañamiento, autonomía y escape.

### Mediadores

Los mediadores introducen interrupciones dentro de las agrupaciones y modifican la relación entre cuidadores y protegidos.

Se acercan a los protegidos y presentan distintos niveles de repulsión hacia los cuidadores.

Seleccioné mediadores porque quiero hacer perceptible la posibilidad de romper agrupaciones demasiado estables. Espero que produzcan aperturas, desplazamientos y reorganizaciones.

---

# Posición, velocidad y aceleración

El sistema utiliza el principio de **Motion 101**.

Cada partícula tiene:

- Posición.
- Velocidad.
- Aceleración.

Las relaciones entre partículas generan fuerzas que modifican la aceleración.

La aceleración modifica la velocidad y la velocidad modifica la posición.

De esta manera:

**Relaciones → fuerzas → aceleración → velocidad → posición**

No existe una trayectoria predefinida para ninguna partícula.

---

# Relaciones dependientes de la distancia

Las partículas solamente reaccionan entre sí cuando se encuentran dentro de determinadas distancias.

El sistema utiliza:

- Una distancia mínima.
- Una distancia máxima de interacción.
- Repulsión fuerte cuando dos partículas están demasiado cerca.
- Atracción o repulsión según la matriz cuando están dentro de la zona de interacción.

Esto permite que las relaciones sean locales y que aparezcan múltiples agrupaciones simultáneamente en lugar de una única estructura global.

---

# Apariencia

Las partículas se representan mediante círculos simples.

Cada población utiliza un color diferente para facilitar su identificación:

- Azul: cuidadores.
- Naranja: protegidos.
- Verde: mediadores.

El significado del sistema no depende únicamente de estos colores.

Si los colores fueran intercambiados, las relaciones de atracción, repulsión, persecución y agrupación continuarían existiendo debido a las reglas del sistema.

---

# Interacción

El usuario puede influir en el sistema mediante el mouse.

Al mantener presionado el clic se genera una zona de repulsión alrededor del cursor.

La interacción no permite controlar directamente ninguna partícula. El usuario solamente introduce una perturbación temporal y el sistema continúa evolucionando según sus propias relaciones.

También se incorporaron sliders para modificar en tiempo real los nueve valores de la matriz.

Esto permite observar cómo pequeños cambios en una relación pueden transformar el comportamiento colectivo.

---

# Relación con Particle Life

El proyecto toma como referencia la estructura principal de **Particle Life**.

Al igual que Particle Life:

- Existen varias poblaciones.
- Cada población tiene reglas diferentes.
- Las relaciones dependen de la distancia.
- Se utiliza una matriz de atracción, repulsión o indiferencia.
- Las relaciones pueden ser asimétricas.
- El movimiento surge de interacciones locales.
- Existen múltiples fuerzas actuando simultáneamente.
- Se producen agrupamientos, persecuciones y reorganizaciones.
- Los comportamientos son emergentes.
- Cada ejecución puede producir configuraciones diferentes.

La principal diferencia es que en este proyecto la matriz fue diseñada a partir de una intención conceptual específica.

En lugar de utilizar únicamente especies abstractas, las relaciones buscan representar una tensión entre cuidado y control.

La relación asimétrica es especialmente importante porque una población puede reaccionar de manera muy distinta a la otra.

Por ejemplo:

- Un cuidador puede sentirse fuertemente atraído por un protegido.
- El protegido puede sentir una atracción débil o incluso repulsión hacia el cuidador.

Esto genera relaciones que no son recíprocas y permite producir persecuciones, agrupaciones y rupturas similares a las observadas en Particle Life.

---

# Exploraciones realizadas

Durante el proceso se desarrollaron tres configuraciones principales del mismo sistema.

Las tres utilizan el mismo algoritmo base y las mismas poblaciones, pero modifican cantidades, relaciones y parámetros.

Esto permitió comparar cómo diferentes matrices producen comportamientos diferentes sin necesidad de crear animaciones distintas.

---

## Prototipo 1: Cuidado equilibrado

### Intención

Explorar una relación en la que la cercanía todavía puede entenderse como acompañamiento, pero existe una diferencia entre la intensidad con la que ambas poblaciones se buscan.

### Cantidades

- 42 cuidadores.
- 30 protegidos.
- 10 mediadores.

### Matriz

| Reacciona ↓ / Observa → | Cuidadores | Protegidos | Mediadores |
|---|---:|---:|---:|
| **Cuidadores** | +0.10 | +0.72 | -0.10 |
| **Protegidos** | +0.18 | +0.06 | +0.28 |
| **Mediadores** | -0.18 | +0.32 | -0.08 |

### Parámetros principales

- Distancia mínima: 15 px.
- Distancia máxima: 150 px.
- Escala de fuerza: 0.052.
- Repulsión cercana: 1.15.
- Fricción: 0.985.
- Velocidad máxima: 2.2 / 2.45 / 2.7.

### Justificación

La relación principal es:

- Cuidador → Protegido: **+0.72**
- Protegido → Cuidador: **+0.18**

La relación es asimétrica, pero ambas poblaciones todavía mantienen cierto grado de atracción.

Seleccioné una atracción fuerte de los cuidadores hacia los protegidos porque quiero hacer perceptible una necesidad constante de acompañamiento. Espero que produzca seguimiento y agrupaciones.

Seleccioné una atracción menor de los protegidos hacia los cuidadores porque quiero hacer perceptible que la necesidad de cercanía no es equivalente. Espero que permita separaciones y reencuentros.

### Resultado observado

Esta configuración produce principalmente:

- Agrupaciones temporales.
- Seguimientos suaves.
- Órbitas.
- Separaciones.
- Reencuentros.

Fue una configuración útil porque mantiene la contradicción de manera equilibrada y permite observar una relación menos extrema entre las poblaciones.

---

## Prototipo 2: Sobreprotección

### Intención

Explorar qué ocurre cuando aumenta la presencia de cuidadores y la intensidad con la que buscan a los protegidos.

### Cantidades

- 56 cuidadores.
- 26 protegidos.
- 6 mediadores.

### Matriz

| Reacciona ↓ / Observa → | Cuidadores | Protegidos | Mediadores |
|---|---:|---:|---:|
| **Cuidadores** | +0.28 | +1.05 | -0.05 |
| **Protegidos** | -0.18 | +0.03 | +0.10 |
| **Mediadores** | -0.10 | +0.20 | -0.06 |

### Parámetros principales

- Distancia mínima: 15 px.
- Distancia máxima: 170 px.
- Escala de fuerza: 0.055.
- Repulsión cercana: 0.95.
- Fricción: 0.987.
- Velocidad máxima: 2.15 / 2.55 / 2.5.

### Justificación

Se aumentó la atracción de los cuidadores hacia los protegidos de **+0.72** a **+1.05**.

También se aumentó la atracción entre cuidadores y se redujo la cantidad de mediadores.

Seleccioné una mayor cantidad de cuidadores y una atracción más intensa hacia los protegidos porque quiero hacer perceptible cómo el acompañamiento puede convertirse en sobreprotección. Espero que produzca concentraciones más densas y menor libertad de movimiento.

### Resultado observado

Esta configuración produce principalmente:

- Grupos más densos.
- Cercos.
- Concentraciones.
- Seguimiento insistente.
- Menores posibilidades de separación.

Fue útil como exploración porque permitió observar cómo una modificación relativamente pequeña en las relaciones puede cambiar el sentido general del sistema.

---

## Prototipo 3: Resistencia

### Intención

Explorar una relación en la que los cuidadores continúan buscando a los protegidos mientras estos responden alejándose.

Esta configuración genera una tensión más fuerte y hace más visibles las relaciones asimétricas y los comportamientos emergentes.

### Cantidades

- 44 cuidadores.
- 34 protegidos.
- 14 mediadores.

### Matriz

| Reacciona ↓ / Observa → | Cuidadores | Protegidos | Mediadores |
|---|---:|---:|---:|
| **Cuidadores** | +0.08 | +0.92 | -0.22 |
| **Protegidos** | -0.72 | +0.10 | +0.45 |
| **Mediadores** | -0.48 | +0.40 | -0.12 |

### Parámetros principales

- Distancia mínima: 16 px.
- Distancia máxima: 155 px.
- Escala de fuerza: 0.06.
- Repulsión cercana: 1.2.
- Fricción: 0.982.
- Velocidad máxima: 2.25 / 3.0 / 3.1.

### Relación asimétrica principal

La relación central es:

- Cuidador → Protegido: **+0.92**
- Protegido → Cuidador: **-0.72**

Esto significa que una población busca activamente acercarse mientras la otra intenta alejarse.

Seleccioné una atracción fuerte de los cuidadores hacia los protegidos y una repulsión fuerte en sentido contrario porque quiero hacer perceptible una relación de control que genera resistencia. Espero que produzca persecuciones, rupturas, agrupaciones temporales y reorganizaciones constantes.

### Mediadores

Los mediadores tienen:

- Mediador → Cuidador: **-0.48**
- Mediador → Protegido: **+0.40**

Seleccioné una repulsión fuerte de los mediadores hacia los cuidadores y una atracción moderada hacia los protegidos porque quiero que interfieran en las persecuciones y modifiquen constantemente las agrupaciones. Espero que produzcan aperturas y cambios de dirección.

### Resultado observado

Esta configuración genera principalmente:

- Persecuciones.
- Escapes.
- Agrupaciones inestables.
- Rupturas.
- Reorganizaciones.
- Interacciones simultáneas entre varias poblaciones.
- Cambios constantes en las estructuras del sistema.

---

# Selección de la versión final

Después de comparar las tres configuraciones, se seleccionó el **Prototipo 3: Resistencia** como versión final.

Inicialmente, el primer prototipo parecía una opción más adecuada porque mantiene de manera muy clara la contradicción entre cuidado y control.

Sin embargo, al comparar las tres versiones se observó que el tercer prototipo permite hacer más evidente el funcionamiento generativo inspirado en Particle Life.

La selección no se realizó únicamente por su apariencia visual.

La razón principal fue que el Prototipo 3 hace más perceptible la interacción simultánea entre las diferentes reglas del sistema.

En esta configuración:

- Los cuidadores persiguen a los protegidos.
- Los protegidos rechazan a los cuidadores.
- Los mediadores se acercan a los protegidos.
- Los mediadores repelen a los cuidadores.
- Los protegidos mantienen una ligera atracción entre sí.
- Las diferentes velocidades permiten rupturas y reencuentros.

Estas relaciones producen una mayor cantidad de situaciones emergentes y hacen más evidente que el movimiento proviene de la combinación de reglas locales y no de trayectorias programadas.

La relación:

**Cuidador → Protegido = +0.92**

y:

**Protegido → Cuidador = -0.72**

es especialmente importante porque demuestra claramente una relación asimétrica.

El resultado no es únicamente una separación entre dos grupos. Como existen otras relaciones simultáneas, las partículas forman agrupaciones, se persiguen, se dispersan y vuelven a reorganizarse.

Por esta razón, la versión final permite establecer una relación más directa con la lógica observada en Particle Life.

---

# Parámetros de la versión final

## Cantidades

- 44 cuidadores.
- 34 protegidos.
- 14 mediadores.

La cantidad de cuidadores sigue siendo ligeramente superior a la de protegidos para conservar una presencia constante de seguimiento.

Los mediadores tienen una presencia mayor que en las otras configuraciones para aumentar las interferencias y reorganizaciones.

Seleccioné 44 cuidadores porque quiero mantener una presión constante sobre los protegidos. Espero que produzca persecuciones desde diferentes direcciones.

Seleccioné 34 protegidos porque quiero disponer de suficientes centros de interacción sin fragmentar excesivamente el sistema. Espero que se formen múltiples situaciones simultáneas.

Seleccioné 14 mediadores porque quiero aumentar la cantidad de interrupciones y reorganizaciones. Espero que las agrupaciones sean menos predecibles y más dinámicas.

---

## Distancias de interacción

La versión final utiliza:

- Distancia mínima: **16 px**.
- Distancia máxima: **155 px**.

Seleccioné una distancia mínima de 16 píxeles porque quiero evitar la superposición y conservar un espacio mínimo entre partículas. Espero que los grupos mantengan estructuras reconocibles.

Seleccioné una distancia máxima de 155 píxeles porque quiero que las interacciones continúen siendo locales. Espero que se formen múltiples persecuciones y agrupaciones independientes.

---

## Fricción

La fricción es:

**0.982**

Este valor permite reducir gradualmente la velocidad sin detener inmediatamente a las partículas.

Seleccioné una fricción de 0.982 porque quiero conservar continuidad en las persecuciones y cambios de dirección. Espero que las partículas mantengan movimiento suficiente para producir reorganizaciones constantes sin acumular velocidad indefinidamente.

---

## Velocidades máximas

- Cuidadores: **2.25**
- Protegidos: **3.0**
- Mediadores: **3.1**

Los protegidos son más rápidos que los cuidadores para conservar una posibilidad de escape.

Los mediadores tienen la velocidad más alta para poder atravesar distintas zonas del sistema.

Seleccioné una velocidad máxima mayor para los protegidos porque quiero hacer perceptible su resistencia. Espero que puedan romper algunas persecuciones sin eliminar la relación con los cuidadores.

Seleccioné una velocidad ligeramente superior para los mediadores porque quiero que puedan intervenir en diferentes agrupaciones. Espero que generen interrupciones y cambios de dirección.

---

# Distribución inicial

Las partículas aparecen distribuidas aleatoriamente por el espacio.

También reciben una dirección y velocidad inicial aleatoria.

Esto permite que cada ejecución comience desde condiciones diferentes.

El sistema utiliza semillas aleatorias, por lo que las posiciones y trayectorias iniciales cambian en cada manifestación.

---

# Invariantes y variables

## Invariantes

Los elementos que deben permanecer para conservar la identidad del sistema son:

- Tres poblaciones.
- Los cuidadores buscan a los protegidos.
- Los protegidos rechazan a los cuidadores en la versión final.
- Los mediadores interfieren en la relación.
- Existe al menos una relación asimétrica.
- Las relaciones dependen de la distancia.
- Existe repulsión a corta distancia.
- Todas las partículas utilizan posición, velocidad y aceleración.
- No existen trayectorias predefinidas.

## Variables

Los elementos que pueden cambiar son:

- Semilla inicial.
- Posiciones iniciales.
- Velocidades iniciales.
- Valores de la matriz mediante sliders.
- Intensidad de atracción.
- Intensidad de repulsión.
- Configuraciones experimentales.
- Intervención del participante.

Estas variaciones permiten producir manifestaciones diferentes sin perder la identidad del sistema.

---

# Registro de pruebas y descartes

## Prueba 1: Cuidado equilibrado

Se utilizó una atracción fuerte de los cuidadores hacia los protegidos y una atracción débil en sentido contrario.

### Hallazgo

Aparecieron seguimientos, agrupaciones temporales y separaciones.

La relación resultaba coherente con la tensión conceptual porque todavía existía cierta atracción entre ambas poblaciones.

### Decisión

Conservar como referencia conceptual y primera exploración.

Aunque comunicaba de manera clara el equilibrio entre cuidado y control, las relaciones tendían a producir comportamientos más suaves y menos evidentes como sistema de Particle Life.
<!--videoPrueba1 -->
---

## Prueba 2: Sobreprotección

Se aumentó la cantidad de cuidadores y la intensidad con la que buscaban a los protegidos.

### Hallazgo

Aparecieron estructuras más densas y situaciones cercanas al encierro.

El control se hizo más evidente.

### Decisión

Descartar como versión final.

Aunque permitía comunicar la sobreprotección, algunas relaciones se volvían demasiado dominantes y reducían la variedad de comportamientos.
<!--videoPrueba2 -->

---

## Prueba 3: Resistencia

Se mantuvo una fuerte atracción de los cuidadores hacia los protegidos y se añadió una fuerte repulsión en sentido contrario.

También se fortaleció la intervención de los mediadores.

### Hallazgo

Aparecieron persecuciones, rupturas, agrupaciones y reorganizaciones constantes.

La relación asimétrica era más fácil de observar y las distintas reglas interactuaban simultáneamente.

### Decisión

Seleccionar como versión final.

Esta configuración permite observar con mayor claridad la lógica de Particle Life y los comportamientos emergentes generados por interacciones locales.

---

# Diseñado y emergente

Una parte importante del proyecto fue diferenciar lo diseñado directamente de aquello que aparece como consecuencia del sistema.

## Elementos diseñados

Se diseñaron:

- Las tres poblaciones.
- La cantidad de cada población.
- La matriz de relaciones.
- La intensidad de las atracciones y repulsiones.
- Las distancias de interacción.
- La fricción.
- Las velocidades máximas.
- La repulsión a corta distancia.
- Los rangos disponibles en los sliders.
- La interacción con el mouse.

## Elementos emergentes

No se diseñaron directamente:

- La forma exacta de las agrupaciones.
- Qué cuidador persigue a qué protegido.
- La duración de una persecución.
- Los momentos exactos de ruptura.
- Las rutas de escape.
- Los cercos.
- Las agrupaciones temporales.
- El lugar en el que ocurren las interacciones.
- El resultado final de una determinada semilla.

Se diseñaron las condiciones para que estos comportamientos pudieran aparecer, pero no se programó cuándo ni cómo debían ocurrir.

---

# Variabilidad entre ejecuciones

Cada nueva semilla modifica:

- Las posiciones iniciales.
- Las direcciones iniciales.
- Las velocidades iniciales.

Por esta razón, dos ejecuciones nunca producen exactamente las mismas trayectorias o agrupaciones.

Sin embargo, mantienen una identidad reconocible porque las relaciones fundamentales permanecen constantes.

En la versión final, independientemente de la semilla:

- Los cuidadores tienden a buscar a los protegidos.
- Los protegidos tienden a alejarse de los cuidadores.
- Los mediadores interfieren en esas relaciones.
- Se producen persecuciones y reorganizaciones.

Esto permite obtener varias manifestaciones del mismo sistema.

---

# Dificultades

Una de las principales dificultades fue encontrar relaciones que permitieran comunicar la tensión sin convertir el sistema en una animación demasiado predecible.

En la primera configuración, la relación era más equilibrada y conceptualmente clara, pero los comportamientos eran más suaves.

En la segunda, el aumento de cuidadores y de atracción generó situaciones demasiado dominadas por la concentración.

En la tercera configuración se encontró una relación que producía una mayor variedad de comportamientos y hacía más visibles las interacciones asimétricas.

Otra dificultad fue evitar que el significado dependiera únicamente de los nombres o colores de las partículas.

Para resolverlo, la contradicción fue incorporada directamente en la matriz.

Aunque se eliminaran los colores y nombres, seguiría existiendo una población que intenta acercarse a otra mientras esta responde alejándose.

---

# Uso de IA generativa

Se utilizó IA generativa como apoyo durante el proceso de diseño, programación y documentación.

Su uso se concentró en:

- Proponer contradicciones compatibles con Particle Life.
- Traducir la tensión entre cuidado y control a relaciones de atracción y repulsión.
- Apoyar la construcción inicial del sistema en p5.js.
- Incorporar sliders para modificar la matriz en tiempo real.
- Separar y comparar diferentes configuraciones.
- Organizar la documentación del proceso.

Posteriormente, los prototipos fueron observados y comparados para seleccionar la configuración que permitiera comunicar mejor la intención y hacer más visible la lógica de Particle Life.

La selección final se realizó a partir de la comparación entre los comportamientos producidos por las tres configuraciones.

---
# Muestra Proyecto
[ParticleOfLife_RechazoCercania v0.0.5](https://editor.p5js.org/Alex1320/full/4kt0XAlye)
<!-- video0.0.5-->

[ParticleOfLife_RechazoCercania v0.1.5](https://editor.p5js.org/Alex1320/full/fsO6pk08y)
<!-- video0.1.5-->

[ParticleOfLife_RechazoCercania v0.2.5](https://editor.p5js.org/Alex1320/full/17JkeIY2n)
<!-- video0.2.5-->

# Autoevaluación 

Considero que el proyecto cumple de manera satisfactoria con la mayoría de los criterios propuestos. Sin embargo, también reconozco que utilicé inteligencia artificial de forma importante durante la programación y documentación del sistema. Aunque participé en la selección de las propuestas, comparación de los prototipos y elección de la versión final, considero que podría haber tenido una participación más activa desde las primeras decisiones conceptuales y técnicas.


|   Criterio	|   Peso	|   Valoración	|   Aporte
|---|---:|---:|---:|
|**La intención es clara y perceptible en el comportamiento.**	   |    20%|	90%	|   18.00
|**Los tipos, cantidades, matriz y parámetros están justificados desde la intención.**	|25%	|90%	|22.5
|**Comprendo y puedo modificar el funcionamiento técnico del sistema.**	    |20%|80%	|16.00
|**El sistema produce variaciones con una identidad reconocible.**	|15%	|85%	|12.75
|**Experimenté, comparé, seleccioné y descarté con criterios claros.**	|10%	|90%	|9.00
|**Puedo distinguir y sustentar lo diseñado y lo emergente.**	|10%	|85%	|8.50
---
Total 79.25 


    Nota propuesta: 86.75 ÷ 20 = 4.33
