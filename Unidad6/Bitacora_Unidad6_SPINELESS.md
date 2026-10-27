# Bitácora — Unidad 6: Agentes autónomos

## Proyecto: SPINELESS — Fragmentos de una mente

**Pieza musical:** *Spineless*, de Terror Reid.  
**Tecnologías:** Three.js, JavaScript y Vite.  
**Conceptos:** steering behaviors, flocking y flow fields.

![Repositorio](https://github.com/Iskandar1320/Unidad6Prototipo.git)
![Pagina](https://iskandar1320.github.io/Unidad6Prototipo/)

## 1. Idea e intención

Para esta unidad decidí interpretar *Spineless* desde una estética minimalista en blanco y negro. Más que ilustrar literalmente toda la canción, me interesó expresar la presión de las expectativas, la búsqueda de identidad, los recuerdos y el deseo de dejar una huella. La canción tiene para mí un significado personal, por lo que preferí crear imágenes abiertas a la interpretación de quien las observa.

La propuesta parte de un círculo de partículas que representa una mente en movimiento: los agentes se agrupan, se separan, cambian de dirección y reaccionan a su entorno. A medida que avanza la canción, puedo activar símbolos que aparecen y se desintegran, como pensamientos pasajeros.

![Composición del escenario principal](./Composición/EscenarioBase.png)

## 2. Exploración de agentes autónomos

Partí de los conceptos estudiados en la unidad para definir cómo debía funcionar el instrumento:

- **Flow fields:** orientan la circulación de las partículas mediante un campo de direcciones. Cada agente consulta el campo desde su propia posición.
- **Flocking:** combina separación, alineación y cohesión. Permite que se formen agrupaciones sin establecer un líder.
- **Steering behaviors:** permiten que los agentes se dirijan hacia puntos de una figura o respondan al cursor sin desplazarse mediante una animación rígida.

También consideré **Interactive Physarum** como referente de movimientos y rastros orgánicos. Sin embargo, en este prototipo las estelas se construyen con partículas de duración limitada; no implementé el algoritmo de Physarum.

## 3. Composición visual y storyboard

Organicé el proceso visual en tres momentos: **escenario base, formación y desintegración**. Elegí que las figuras estuvieran hechas únicamente de partículas, con siluetas sencillas, incompletas y en constante movimiento.

![Formación de las figuras](./Composición/Formación.png)

![Desintegración de las figuras](./Composición/Desintegración.png)

A partir de los bocetos definí seis estados para controlar durante la interpretación:

| Tecla | Evento | Intención visual |
| --- | --- | --- |
| `1` | La mente | Círculo de partículas como escenario permanente. |
| `2` | Romper la cuerda | Una cuerda y un cuchillo representan la angustia y la búsqueda de liberación. |
| `3` | Purificación fallida | Un jabón desprende agrupaciones semejantes a espuma. |
| `4` | La inocencia perdida | Un niño con audífonos aparece como un recuerdo de la infancia. |
| `5` | Asfixia emocional | Unas manos alrededor de un cuello representan la presión de los sentimientos. |
| `6` | El pacto | Una máscara, un documento y un bolígrafo simbolizan el conflicto con la identidad. |

Los bocetos de cada evento están documentados en [`StoryBoard.md`](./StoryBoard.md), con sus imágenes en la carpeta `ImganesStory`.

## 4. Desarrollo del instrumento

Preparé una primera versión web con **Three.js y Vite**, acompañada de una configuración de **GitHub Actions** para su publicación en GitHub Pages. La escena principal utiliza un conjunto de agentes que mantiene el movimiento del círculo; los eventos reorganizan temporalmente otras partículas para formar las siluetas.

La propuesta tiene una transición breve: cada símbolo permanece activo durante aproximadamente **2 segundos** y se desvanece durante **0,5 segundos**. Si activo otra tecla antes, el evento anterior comienza a desaparecer mientras aparece el siguiente. El círculo central continúa en movimiento.

El instrumento incluye interacción con el **mouse** para perturbar localmente el flujo y dejar estelas. Con `B` puedo invertir blanco y negro; con `H`, ocultar la interfaz, y con `F`, activar la pantalla completa.

Por autorización del profesor, añadí una dimensión **audio reactiva**: el análisis de frecuencias modifica propiedades del movimiento y la respuesta visual. Esto no reemplaza la interpretación humana, porque **la música no activa los eventos automáticamente**; soy yo quien decide cuándo introducir cada símbolo.

## 5. Score e interpretación en vivo

Mi score funciona como una guía flexible para acompañar distintos momentos de la canción. Comienzo con el círculo base, introduzco las imágenes relacionadas con la cuerda, el jabón, la infancia y la asfixia, y reservo la máscara y el contrato para los pasajes de mayor tensión. Durante las transiciones puedo dejar que las partículas vuelvan al círculo, mover el cursor o invertir el contraste.

No busco sincronizar cada acción con un segundo exacto. La intención es escuchar, observar cómo responde el sistema y decidir cuándo intervenir. Para la presentación todavía es importante registrar un ensayo completo y capturas del prototipo funcionando, tanto en local como en su versión publicada.

## 6. Reflexión

Lo más valioso de esta unidad fue pasar de pensar en figuras que simplemente aparecen en pantalla a diseñar un sistema donde los propios agentes construyen esas figuras. Los comportamientos autónomos hacen que cada ejecución tenga variaciones, incluso si activo los mismos eventos.

Considero que la propuesta consigue relacionar música, narrativa y simulación visual, aunque todavía puedo mejorar la legibilidad de algunas siluetas, afinar la respuesta al sonido y practicar las intervenciones en vivo.

## 7. Autoevaluación

| Criterio | Puntaje | Sustento |
| --- | ---: | --- |
| Cumplimiento del encargo | **23/25** | Se diseñó una versión web en tiempo real, con eventos manuales, interacciones y preparación para GitHub Pages. Queda documentar la validación final publicada. |
| Comprensión y verificación | **22/25** | Puedo explicar las reglas de flow fields, flocking y steering, y cómo afectan el movimiento. Falta reunir más evidencias de pruebas de parámetros. |
| Diseño e intención | **24/25** | La composición, los bocetos y el storyboard conectan cada símbolo con mi interpretación personal de la canción. |
| Interpretación humana | **21/25** | El teclado y el mouse permiten intervenir directamente, y el score funciona como una guía abierta. Necesito más ensayos para conseguir transiciones fluidas en vivo. |
| **Total** | **90/100** | **Nota propuesta: 4.5/5.0.** |

**Comentario final:** Me asigno un **4.5** porque siento que logré una propuesta visual y conceptual coherente con la canción y los contenidos de la unidad. Me esforcé por convertir los agentes autónomos en el lenguaje principal de la experiencia y no solo en un efecto decorativo. Aun así, considero que debo dedicar más tiempo a probar los controles, mejorar algunos detalles visuales y ensayar la performance para defender con mayor seguridad las decisiones durante la presentación.
