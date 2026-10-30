# Unidad 8 — Why Bother? ¿Para qué tomarte el trabajo?

Repositorio Exploración: https://github.com/Iskandar1320/Unidad9Simulaci-n.git 
Pagina Exploración: https://iskandar1320.github.io/Unidad9Simulaci-n/
## Mi punto de partida

Esta última unidad me puso a pensar bastante, no solo por lo que nos pedía hacer, sino porque sentí que la pregunta tenía mucho que ver con mi experiencia durante el curso. **¿Para qué tomarnos el trabajo de crear si hoy una inteligencia artificial puede ayudarnos a conseguir resultados tan rápido?**

Yo mismo he utilizado ChatGPT durante varias unidades. Hay momentos en los que he tenido una idea muy clara y la IA me ha ayudado a plasmarla, incluso llegando a cosas que no me imaginaba que pudiera hacer. Pero también tengo que reconocer que otras veces, por falta de tiempo y por querer entregar, le he delegado demasiado trabajo. Y precisamente eso es lo que me genera cierta incomodidad: no quiero criticar cómo otras personas usan la IA sin reconocer primero que yo también he caído en eso.

Lo que me preocupa no es que existan estas herramientas, sino que comencemos a crear por crear, a repetir lo que es tendencia y a conformarnos con un resultado sin preguntarnos por qué lo estamos haciendo o qué estamos aprendiendo. Siento que la IA puede ser una ayuda increíble, pero también puede volverse una excusa para dejar de pensar si la usamos sin criterio.

## Referentes y concepto

La charla de **Robert Hodgin, *Why Bother? Making Art in the Age of AI***, me hizo conectar el esfuerzo creativo con el valor del proceso. A veces pareciera que solo importa llegar al resultado, cuando muchas de las cosas que aprendemos aparecen precisamente al intentar algo, equivocarnos y volverlo a hacer.

También tomé como referente una entrevista a **Yuval Noah Harari**, especialmente su comparación sobre la posibilidad de convertirnos en las “vacas del futuro”. Más allá de estar de acuerdo con todo lo que plantea, esa imagen me hizo pensar en qué pasa cuando dejamos que otros sistemas o personas decidan por nosotros, sin intentar comprender lo que sucede.

De allí nació la idea de utilizar **la ruleta rusa como una metáfora**, no como una invitación a la violencia. Para mí representa el riesgo de dejar nuestras decisiones al azar, a lo que piensan los demás o a una herramienta que usamos sin cuestionar. Quería que la persona que recorriera la obra se hiciera sus propias preguntas, en lugar de recibir una respuesta que yo le impusiera.

## Cómo fui construyendo la obra

Comencé imaginando una serie de escenas en un bar. La experiencia abre con la pregunta **«¿Vas a jugar a la ruleta?»**. Después aparece un vaso junto a una botella, una persona bebiendo, un revólver como símbolo de decisión, una vista de la Tierra, el exterior del bar y el regreso a la ruleta. Todo va acompañado de preguntas sobre seguir al rebaño, perder el pensamiento crítico, decidir nuestro destino y entender si la IA nos limita o nos permite explorar nuestro potencial.

Para el cierre imaginé un disparo simbólico. En la implementación preferí que ese momento se transformara en un efecto abstracto de partículas que se dispersan y vuelven a organizarse. Me gustó esa posibilidad porque deja de centrarse en el daño y pasa a representar un cambio: después de cuestionarnos, podemos reorganizar nuestras ideas y elegir otro camino.

Primero hicimos un storyboard con imágenes alusivas. La primera versión era más elaborada y cinematográfica de lo que necesitaba, así que volví a tomar como referencia la estructura que había usado en la Unidad 6. Lo simplificamos para que cada momento tuviera su imagen, descripción e intención, sin perder el concepto original.

Después construimos una primera propuesta de página usando **Three.js y Vite**. Elegí modelos geométricos sencillos porque no quería depender de figuras demasiado complejas: lo importante era la atmósfera, el movimiento de cámara y, sobre todo, las preguntas. La experiencia quedó organizada en **nueve momentos** con navegación entre escenas, objetos del bar, un personaje simplificado, una Tierra giratoria, un exterior con luces y lluvia, y un sistema de partículas para el final.

En cuanto a la simulación, se trabajó con rotaciones, cambios de cámara, animaciones simples y partículas que tienen posición, velocidad y un objetivo hacia el cual se mueven. En el cierre, las partículas dejan una figura inicial y buscan otra organización. Esa fue la manera de conectar el tema de la unidad con algo que también habíamos explorado antes en el curso.

## Cambios, dificultades y decisiones

La primera versión de la página me pareció una buena base, pero estaba demasiado oscura. Los objetos y el escenario perdían presencia, así que pedí mejorar aproximadamente un 50 % la calidad visual. Revisamos la iluminación, los materiales del vaso y la botella, el contraste, los textos, los botones y los paneles de la interfaz para que la experiencia se sintiera más clara y cuidada.

También organizamos la estructura del proyecto para subirlo a GitHub. Como la carpeta de la Unidad 8 está dentro del repositorio, fue necesario ajustar el archivo de despliegue de GitHub Actions para que buscara el proyecto en la ruta correcta.

Quiero ser claro con una limitación del proceso: **una parte importante de la programación fue desarrollada con ayuda de ChatGPT**. Mi papel estuvo principalmente en plantear el concepto, decidir la secuencia, escribir las preguntas, revisar los resultados y pedir los cambios que consideraba necesarios. Tampoco puedo decir que ya domino todos los detalles del código; todavía me falta probar con calma algunos comportamientos de la versión 3D y profundizar más en cómo están implementados. Me parece más valioso reconocerlo que presentar la obra como si hubiera hecho absolutamente todo por mi cuenta.

## Qué encontré y qué aprendí realmente

Lo que más me llamó la atención es que la experiencia fue cambiando sin que yo tuviera que abandonar la idea inicial. Aprendí a pensar una misma propuesta como **concepto, storyboard, escena 3D e interfaz**, y a identificar cuándo un problema no estaba en la idea, sino en cómo se estaba mostrando. Por ejemplo, que una página esté bien organizada no significa que transmita lo que uno quiere si la iluminación impide apreciar las escenas.

También reforcé algo que venía descubriendo en las últimas unidades: la tecnología permite avanzar mucho más rápido, pero la intención no aparece sola. Alguien tiene que decidir qué vale la pena contar, qué se queda, qué se cambia y por qué. La IA puede proponer y construir; aun así, si acepto todo sin mirar ni entender, termino renunciando a una parte importante de crear.

No siento que haya resuelto la pregunta del profesor, y creo que tampoco era la intención. Me sigo preguntando hasta qué punto apoyarme en una herramienta es aprender y en qué momento se convierte en delegar mi propio criterio. Esa duda sigue abierta.

## ¿Entonces para qué tomarse el trabajo?

Creo que me tomo el trabajo porque **todavía quiero tener algo que decir**. Porque me gusta imaginar una experiencia y ver cómo, poco a poco, comienza a existir. Porque aunque no siempre tenga el tiempo o los conocimientos para construir cada parte por mí mismo, sí quiero preocuparme por las decisiones que hay detrás de lo que hago.

No quiero que esta obra le diga a nadie que está mal utilizar inteligencia artificial. Sería contradictorio, porque yo también la utilicé para hacerla. Lo que quiero es dejar una pregunta: **si tenemos tantas herramientas para crear, ¿por qué conformarnos con hacer lo mismo que todos?**

Para mí, *Why Bother?* termina siendo eso: tomarse el trabajo no solo para entregar algo, sino para intentar encontrar una idea propia, entenderla y llevarla más lejos. Y si una herramienta puede ayudarme a lograrlo, quiero aprender a usarla de manera consciente, sin dejarle también la responsabilidad de pensar por mí.


**Referentes:**

- Robert Hodgin — [*Why Bother? Making Art in the Age of AI*](https://www.youtube.com/watch?v=vmUodu6K-bA)
- Yuval Noah Harari — [Entrevista sobre inteligencia artificial y el futuro humano](https://www.youtube.com/watch?v=FNZhxTtOL-I)
