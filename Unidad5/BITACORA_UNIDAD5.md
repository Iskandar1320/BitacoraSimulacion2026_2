# Bitácora — Unidad 5: Sistemas de partículas

**Proyecto:** Relevo generacional: la ventaja que nadie está aprovechando  
**Encargo:** Presentación generativa para el Centro de Eventos Fórum UPB  
**Herramientas:** Three.js, JavaScript, HTML, CSS, Vite, Git y GitHub Actions  
**Estado:** Propuesta visual revisada; publicación mediante GitHub Actions preparada.
**Repositorio** https://github.com/Iskandar1320/ForumBoceto
**Pagina/Experiencia** https://iskandar1320.github.io/ForumBoceto/

## 1. Punto de partida

El propósito de la Unidad 5 era comprender los sistemas de partículas como **estructuras de elementos relacionados**. Por eso, el reto no consistía en llenar una presentación de efectos llamativos, sino en conseguir que los cambios en el movimiento, la organización y las relaciones aportaran significado al discurso.

A partir de la charla *«Relevo generacional: la ventaja que nadie está aprovechando»*, quise comunicar una idea sin representarla de manera literal: **el conocimiento acumulado por las generaciones anteriores y la capacidad de exploración de las nuevas generaciones pueden encontrarse y construir posibilidades que ninguna alcanzaría por separado**.

Mi punto de partida fue un interés personal por los agujeros negros y los agujeros de gusano. En lugar de utilizarlos como ilustraciones científicas, decidí tomarlos como metáforas del encuentro y la conexión. Así surgió el concepto central: **Fórum como singularidad**.

## 2. Concepto y decisiones de diseño

En esta propuesta, la singularidad no representa destrucción, sino un punto de atracción que altera trayectorias y hace posibles encuentros. El agujero de gusano funciona como un puente entre sistemas diferentes: ninguna generación desaparece ni sustituye a la otra; ambas cambian mediante el intercambio.

Decidí evitar una clasificación explícita de las partículas en «jóvenes» y «mayores». En cambio, propuse **dos maneras de comportarse**: unas partículas recorren caminos estables y otras exploran desviaciones. Las nuevas rutas no aparecen desde cero, sino que parten de recorridos previos.

También descarté desarrollar la pieza en Unity, porque la entrega era de corta duración y necesitaba una presentación accesible desde el navegador. Elegí **Three.js** para conservar la profundidad espacial y los movimientos de cámara, y **HTML/CSS** para presentar el texto con claridad sobre la escena. Así, la cámara y las partículas construyen la experiencia visual sin sacrificar legibilidad.

## 3. Referentes

- **Memo Akten — *Forms*:** me ayudó a pensar el movimiento como una forma de revelar conexiones, rastros y transformaciones, en lugar de imitar un efecto visual concreto.
- **ForumTEDTALK — presentación de referencia:** tomé como guía la relación entre discurso y cambios de comportamiento, así como la secuencia narrativa y el contenido facilitado para el encargo. Mi propuesta conserva los 13 momentos y los textos e imágenes correspondientes, pero los interpreta mediante una metáfora espacial propia.

La principal conclusión de esta exploración fue que **las partículas no son el mensaje: las relaciones entre ellas son las que construyen el mensaje**.

## 4. Gramática visual

| Elemento o comportamiento | Interpretación dentro del discurso |
|---|---|
| Partículas | Personas, conocimientos, experiencias y posibilidades individuales, sin asignar una identidad literal a cada una. |
| Gravedad | Atracción hacia una visión compartida. |
| Singularidad | Fórum como punto que propicia encuentros y cambia trayectorias. |
| Órbitas estables | Experiencia, continuidad y estructuras existentes. |
| Perturbación de trayectorias | Encuentros que producen aprendizaje y transformación. |
| Rastros y caminos | Memoria de lo construido y conocimiento que puede servir a otros. |
| Movimiento en pares o grupos | Confianza y capacidad de avanzar en relación. |
| Desviaciones desde rutas conocidas | Exploración de nuevas posibilidades apoyada en la experiencia previa. |
| Agujero de gusano | Conexión entre perspectivas y generaciones. |
| Flujo en ambos sentidos | Intercambio y colaboración sin reemplazo. |
| Expansión hacia espacios vacíos | Construcción colectiva de un futuro que todavía no está definido. |

**Regla que orientó el diseño:** cuando cambia el comportamiento de las partículas, debe cambiar también alguna relación importante en la narrativa.

## 5. Desarrollo del storyboard: los 13 momentos

La propuesta se concibió como **una sola escena tridimensional que cambia de estado**, no como trece escenas desconectadas.

| Momento | Qué ocurre visualmente y qué comunica |
|---|---|
| **01. Atracción** | Partículas dispersas comienzan a responder a una fuerza invisible. Se introduce la posibilidad de encuentro. |
| **02. Estabilidad** | Aparecen órbitas ordenadas alrededor de la singularidad. Un sistema puede funcionar y, aun así, repetir siempre los mismos recorridos. |
| **03. Apertura** | Entran nuevos movimientos que alteran las órbitas existentes. El encuentro con el mundo genera cambios. |
| **04. Tres sistemas** | Grupos con trayectorias diferentes comparten un mismo campo de atracción: academia, industria y ciudad. |
| **05. Impacto** | Una trayectoria se desvía y modifica las posibilidades de otras. El impacto continúa después del evento. |
| **06. Comunidad** | Se vuelven visibles los rastros y caminos que unas partículas dejan para otras. Aparece memoria colectiva. |
| **07. Confianza** | Algunas partículas sostienen movimientos compartidos sin dejar de ser independientes. La relación permite avanzar juntas. |
| **08. Experiencia y exploración** | Unas partículas siguen rutas establecidas y otras abren ramificaciones a partir de ellas. |
| **09. Dos generaciones** | Se revela un agujero de gusano que conecta sistemas antes separados. La conexión pasa a ser el centro visual. |
| **10. Colaboración** | Hay flujo de partículas en ambas direcciones del túnel. Ningún sistema reemplaza al otro: intercambian. |
| **11. Presente** | La cámara se aproxima y viaja dentro del flujo. Lo nuevo no es una promesa lejana: ya participa en el presente. |
| **12. Construcción** | Las trayectorias se extienden hacia zonas sin caminos previos. El futuro aparece como resultado de acciones compartidas. |
| **13. Continuidad** | La cámara se aleja y revela un sistema interconectado que sigue moviéndose. Fórum se entiende como punto de partida, no como final. |

## 6. Prototipado, pruebas e iteraciones

**Primera exploración.** Se realizó un boceto funcional con Three.js para comprobar si el recorrido se entendía sin depender de efectos complejos. En esta etapa prioricé la continuidad entre momentos, el movimiento de cámara, las órbitas, la memoria de trayectorias y la aparición del túnel.

**Integración del contenido del cliente.** El primer boceto utilizaba textos conceptuales. Después se incorporaron los textos de la presentación de referencia y las imágenes, logos y códigos QR correspondientes. Esto fue necesario para respetar la secuencia narrativa del encargo y no quedarme únicamente con mi interpretación visual.

**Problema encontrado.** En una prueba, los logos aparecieron demasiado grandes y el texto dejó de mostrarse correctamente al cambiar de momento. La revisión permitió corregir los límites de tamaño de los recursos, separar mejor los textos de las imágenes y ajustar su actualización durante la navegación. También se cambiaron nombres de recursos para reducir conflictos con archivos antiguos guardados por el navegador.

**Revisión de la composición.** Después de la corrección, revisé nuevamente la presentación y consideré que la distribución visual ya funcionaba para continuar. Esta iteración confirmó que **la legibilidad y la jerarquía visual son tan importantes como el sistema generativo**: si una imagen tapa el discurso, las partículas dejan de acompañarlo.

## 7. ¿Cómo construye significado el sistema?

Una partícula aislada solamente describe un movimiento. Cuando varias comparten una trayectoria, dejan un rastro o alteran el recorrido de otras, empiezan a expresar **memoria, confianza, intercambio y transformación**.

La narración sigue una progresión: **atracción → encuentro → impacto → memoria → confianza → conexión → intercambio → construcción**. El agujero negro reúne las trayectorias; el agujero de gusano muestra cómo pueden relacionarse sistemas distintos; la expansión final representa posibilidades que surgen gracias a esa relación.

La decisión más importante fue **no hacer desaparecer el sistema anterior para mostrar el nuevo**. En el relevo generacional, el propósito de la charla no es reemplazar una generación, sino reconocer el valor de su colaboración.

## 8. Autoevaluación

**Calificación que me asigno: 4.2 / 5.0 (84 / 100 puntos).** Cada criterio tiene un valor máximo de 25 puntos.

| Criterio | Puntaje | Justificación |
|---|---:|---|
| **Cumplimiento del encargo** | **19/25** | La presentación respeta la secuencia del guion e integra un sistema visual dinámico. Sin embargo, enfoqué más mi atención en la metáfora espacial que en destacar a Fórum como un lugar que el público quisiera conocer y experimentar. |
| **Relaciones estructurales** | **23/25** | Las órbitas, las perturbaciones, los rastros, los recorridos compartidos y el agujero de gusano tienen significados relacionados con el relevo generacional. |
| **Comportamiento y significado** | **23/25** | Los cambios en las partículas y la cámara acompañan la idea del encuentro entre generaciones. Aun así, parte de ese protagonismo visual podría haberse utilizado para comunicar mejor el valor de la experiencia Fórum. |
| **Explicación y demostración** | **19/25** | Puedo explicar la narrativa y las decisiones visuales, pero considero que falta un equilibrio más sólido entre contar la historia y comunicar la propuesta del cliente. La demostración y el despliegue final siguen pendientes de verificación. |
| **Total** | **84/100** | **Equivale a 4.2/5.0.** |

### Comentario de autoevaluación

Me asigno una calificación de **4.2 sobre 5.0** porque considero que logré desarrollar una narrativa visual coherente y un sistema de partículas cuyas relaciones tienen un significado claro. Me gusta cómo el agujero negro y el agujero de gusano permiten representar el encuentro y la colaboración entre generaciones sin hacerlo de manera literal.

Sin embargo, reconozco que **le di demasiada importancia a la narrativa y a la experiencia espacial**, y dejé en segundo plano uno de los propósitos más importantes del encargo: **vender la experiencia de Fórum y mostrar por qué es un espacio valioso para encontrarse, conectar y generar oportunidades**. Aunque utilicé los textos y recursos de la presentación de referencia, pude haber integrado mejor la identidad y las posibilidades del centro de eventos en los momentos de mayor impacto.

Para mejorar la propuesta, buscaría un equilibrio entre la metáfora visual y el mensaje del cliente: conservar el recorrido generativo, pero aprovechar ciertas transiciones para que el público no solo comprenda el relevo generacional, sino que también **recuerde a Fórum y quiera vivir allí esa experiencia de encuentro**.

## 9. Reflexión final

Esta unidad me permitió entender que un sistema de partículas no necesita representar objetos concretos para comunicar. Su sentido puede construirse a partir de **cómo se organizan, se relacionan y modifican su comportamiento**.

Al comienzo me interesaba principalmente la imagen del agujero negro y el viaje por un agujero de gusano. Durante el desarrollo comprendí que su valor no estaba en el espectáculo visual, sino en convertirlos en una metáfora coherente del relevo generacional.

El resultado busca que el público no vea dos generaciones enfrentadas, sino **trayectorias diferentes que encuentran una manera de avanzar juntas**. Lo más importante que aprendí es que una estructura se convierte en lenguaje cuando sus transformaciones dejan de ser decorativas y empiezan a expresar una intención.

También entendí que **una narrativa bien construida no garantiza, por sí sola, que se cumpla plenamente un encargo de comunicación**. En este proyecto conseguí expresar la colaboración generacional, pero habría podido dar más protagonismo a lo que Fórum ofrece como experiencia real. Ese equilibrio entre concepto, claridad y objetivo del cliente es uno de los aprendizajes que me llevo de la unidad.


**Referentes:** [*The Nature of Code* — Particles](https://natureofcode.com/particles/) · [Memo Akten — *Forms*](https://memo.tv/projects/2011/forms/) · [ForumTEDTALK](https://juanferfranco.github.io/ForumTEDTALK/)
