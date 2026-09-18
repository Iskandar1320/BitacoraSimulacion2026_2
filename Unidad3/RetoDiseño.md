# 🌊 Unidad 3 · Fuerzas — Corrientes topográficas

**Texto guía:** Capítulo 2 — Vectores de *The Nature of Code*
**Herramienta de desarrollo:** Three.js / JavaScript / WebGPU
**Caso de estudio:** [forces-instrument-u3](https://github.com/juanferfranco/forces-instrument-u3)

El propósito de esta unidad es construir y comprender un sistema dinámico de partículas que pueda ser interpretado en tiempo real. La obra no sigue trayectorias dibujadas previamente: el comportamiento aparece de la combinación entre estado, fuerzas, integración y decisiones del intérprete.

## Pregunta guía

**¿Cómo puede una persona interpretar una pieza musical mediante un sistema de partículas cuyo comportamiento surge de fuerzas que comprende, puede verificar y puede modificar?**

---

## 📌 Actividad 01 · Referentes y modelo mental

### ¿Qué parte es el sistema?

El sistema es la simulación física que mantiene el estado de cada partícula y actualiza su movimiento. En este proyecto el estado principal está formado por **posición** y **velocidad**, almacenadas en buffers de GPU. Cada frame se calculan las fuerzas, se obtiene la aceleración y luego se actualizan velocidad y posición.

```text
estado → fuerzas → aceleración → velocidad → posición → render
```

### ¿Qué parte es el instrumento?

El instrumento es la capa de control con la que una persona modifica el sistema mientras escucha la pieza musical. En la propuesta final los controles principales son:

- **Puntero:** mueve la cumbre/atractor.
- **1–4:** cambia entre cuatro momentos del score.
- **Espacio:** activa una ruptura repulsiva temporal llamada “avalancha”.
- **R:** reinicia el estado de las partículas.
- **P:** alterna entre LAB y PERFORMANCE.

### ¿Qué parte se interpreta?

La pieza musical se interpreta **manualmente**. El audio no controla automáticamente los parámetros. La persona escucha y decide cuándo cambiar de momento, mover el atractor o generar una ruptura. Esto hace que la interpretación dependa de decisiones y no solamente de un análisis automático de amplitud o frecuencia.

### ¿Qué parte emerge?

Emerge el comportamiento visual del campo de partículas. El resultado exacto no está dibujado con animaciones prefabricadas: aparece por la combinación entre velocidad previa, atracción/repulsión, vórtice, viento, drag y una fuerza adicional de contornos.

### Referentes usados como punto de partida

- [The Nature of Code — Forces](https://natureofcode.com/forces/)
- [Robert Hodgin](https://roberthodgin.com/)
- [Magnetosphere — Robert Hodgin](https://roberthodgin.com/project/magnetosphere)
- [Floating Points — Key103](https://youtu.be/DaiuHTYvF2U)

Los referentes se usan para observar cómo un sistema de partículas puede producir una imagen compleja a partir de reglas simples. La propuesta final evita copiar una estética específica y se concentra en que las fuerzas sean legibles dentro del concepto.

---

## 📌 Actividad 02 · Laboratorio de fuerzas

Antes de diseñar la interpretación se conservaron las cinco pruebas del proyecto base. El objetivo es poder predecir el comportamiento antes de mirar la imagen.

| Prueba | Fuerzas activas | Predicción | Verificación en el algoritmo |
|---|---|---|---|
| **1 · Inercia** | ninguna | Las partículas que empiezan con velocidad deben continuar moviéndose sin una aceleración deliberada. | El preset desactiva viento, radial, vórtice, contornos y drag. La integración conserva la velocidad previa. |
| **2 · Fuerza +X** | viento `(1.5, 0, 0)` | La componente `v.x` debe crecer y el conjunto debe desplazarse hacia +X. | La fuerza constante se suma directamente a `force` y después a la velocidad. |
| **3 · Atracción** | radial positiva | La aceleración debe apuntar hacia el atractor. | `radialDirection = (attractor - p) / distance` y `radialStrength > 0`. |
| **4 · Repulsión** | radial negativa | El comportamiento debe invertirse y las partículas deben alejarse del atractor. | Se conserva la misma dirección radial pero `radialStrength < 0`, por lo que cambia el signo de la fuerza. |
| **5 · Vórtice** | radial suave + tangencial + drag | Debe aparecer circulación alrededor del atractor, no solamente caída hacia el centro. | La tangente se calcula con `zAxis.cross(radialDirection)`, por lo que es perpendicular a la dirección radial. |

### Cambio deliberado de signo

La comparación más clara se realiza entre las pruebas **3 · Atracción** y **4 · Repulsión**. No cambia la arquitectura ni la posición del atractor; solo cambia el signo de `radialStrength` de positivo a negativo. Esta modificación es útil porque permite verificar que el signo del parámetro tiene una consecuencia física observable y explicable.

> **Evidencia pendiente de captura:** al ejecutar la versión final en el navegador, registrar una captura o GIF corto de las cinco pruebas. La verificación anterior corresponde a la lectura del algoritmo; la evidencia visual debe añadirse después de ejecutar el sistema.

---

## 📌 Actividad 03 · Encargo de diseño

### Pieza musical

[LesAlpx](https://music.youtube.com/watch?v=iuTk8x410mk)

### Concepto — “Corrientes topográficas”

La interpretación parte de imaginar la música como un paisaje que cambia de presión y dirección. El puntero representa una **cumbre móvil** y las partículas funcionan como corrientes que rodean, atraviesan o se alejan de ese punto.

La intención no es representar literalmente una montaña. La referencia topográfica sirve para que cada decisión física tenga una lectura clara:

- **Atracción:** ascenso hacia la cumbre.
- **Vórtice:** viento que circula alrededor del relieve.
- **Viento constante:** desplazamiento atmosférico del campo.
- **Repulsión:** ruptura del equilibrio.
- **Drag:** pérdida de energía y estabilización del flujo.
- **Contornos:** bandas alternadas alrededor de la cumbre.

### Fuerza diseñada para la propuesta

Además de las fuerzas del caso de estudio se añadió una fuerza de **contornos topográficos**:

```text
F_contorno = r̂ · sin(d · f) · k
```

Donde:

- `r̂` es la dirección hacia el atractor;
- `d` es la distancia de la partícula al atractor;
- `f` controla la frecuencia de las bandas;
- `k` controla la intensidad.

La función seno cambia de signo con la distancia. Por eso una banda puede empujar hacia la cumbre y la siguiente puede empujar en sentido contrario. El resultado son zonas de circulación y acumulación que recuerdan curvas de nivel, pero siguen siendo consecuencia de una fuerza y no de una trayectoria dibujada.

### Score de interpretación

El score se simplificó a cuatro decisiones grandes para que el sistema pueda conducirse en vivo sin un panel lleno de parámetros.

| Momento | Intención | Fuerzas dominantes | Acción del intérprete |
|---|---|---|---|
| **1 · Bruma** | Inicio contenido, campo suspendido. | contornos suaves + vórtice leve + drag | mover lentamente la cumbre |
| **2 · Ascenso** | Concentración progresiva alrededor de un punto. | atracción + contornos + vórtice | acercar y desplazar el atractor por el campo |
| **3 · Cresta** | Mayor energía y circulación. | vórtice fuerte + viento + contornos | mover la cumbre con más amplitud |
| **4 · Ruptura** | Apertura y pérdida del equilibrio anterior. | repulsión + vórtice invertido + viento | cambiar la posición del atractor y dejar expandir el sistema |
| **Avalancha** | Acento breve y explosivo. | repulsión radial fuerte | mantener **Espacio** durante el acento deseado |

### Controles de PERFORMANCE

```text
1        Bruma
2        Ascenso
3        Cresta
4        Ruptura
Espacio  Avalancha temporal
Puntero  Mover la cumbre/atractor
R        Reiniciar partículas
P        LAB / PERFORMANCE
```

El audio no modifica estos parámetros automáticamente. La escucha funciona como guía para decidir cuándo actuar.

---

## Arquitectura que debo poder explicar

### Estado

En `src/simulation/createSimulation.js`:

```text
positionBuffer
velocityBuffer
```

Cada partícula conserva posición y velocidad en almacenamiento de GPU.

### Fuerzas

También en `createSimulation.js` se acumulan en una variable `force`:

```text
viento
radial
vórtice
contornos
arrastre (drag)
```

### Integración

Se utiliza Euler semiimplícito:

```text
v = v + F · dt
p = p + v · dt
```

Se asume masa unitaria, por lo que `a = F`.

### Render

El render usa `SpriteNodeMaterial` y un `InstancedMesh`. La posición que se dibuja proviene del mismo buffer actualizado por el compute shader.

### Controles

- `src/ui/labPanel.js`: parámetros y pruebas del laboratorio.
- `src/ui/performanceHud.js`: interfaz mínima del score.
- `src/main.js`: mapeo de teclado, puntero y presets de interpretación.

---

## Experimentación y criterio frente a la IA

La IA se utilizó como apoyo para revisar la arquitectura, proponer una dirección visual, implementar modificaciones localizadas y organizar la documentación. Para no aceptar una propuesta únicamente porque “se ve interesante”, se tomaron estas decisiones:

1. **Se descartó una estética de galaxia/synthwave** porque se parecía demasiado al referente entregado por otro estudiante y no aportaba una interpretación propia.
2. **Se descartó que el audio controlara automáticamente la simulación** porque el criterio del instrumento pide que la persona pueda conducirlo en vivo.
3. **Se conservaron las cinco pruebas originales** antes de añadir la fuerza nueva, de manera que la base física siga siendo verificable.
4. **La fuerza nueva se aisló en el algoritmo** con parámetros propios (`contourEnabled`, `contourStrength`, `contourFrequency`) para que pueda apagarse, medirse y compararse.
5. **Se redujeron los controles de performance** a cuatro momentos, puntero y una acción temporal, evitando una interfaz difícil de tocar durante la presentación.

### Qué fue producido o modificado con asistencia de IA

- propuesta conceptual “Corrientes topográficas”;
- fuerza de contornos y sus parámetros;
- score de cuatro momentos;
- interfaz de PERFORMANCE;
- reorganización del workflow de GitHub Pages;
- documentación de esta bitácora.

La parte importante para la presentación es poder ubicar estas modificaciones dentro de la arquitectura y explicar qué hace cada una.

---

## 📌 Actividad 04 · Presentación y entrega técnica

### Ejecución local

```bash
cd Unidad3/forces-instrument-u3
npm install
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

### Despliegue

El repositorio usa GitHub Actions. El workflow está en:

```text
.github/workflows/deploy-unidad3.yml
```

Al hacer `push` a `main`, GitHub instala las dependencias, ejecuta `npm run build` y publica el contenido de `dist/` mediante GitHub Pages.

**URL esperada del repositorio:**
`https://iskandar1320.github.io/BitacoraSimulacion2026_2/`

> Esta URL debe verificarse después del push y de habilitar **Settings → Pages → GitHub Actions**. No se marca como evidencia final hasta comprobar que abre correctamente.

---

## Evidencias que faltan capturar al ejecutar

Para cerrar completamente la entrega deben añadirse evidencias visuales reales de ejecución:

1. LAB — Inercia.
2. LAB — Fuerza constante +X.
3. LAB — Atracción.
4. LAB — Repulsión.
5. LAB — Vórtice.
6. PERFORMANCE — al menos dos momentos del score.
7. PERFORMANCE — avalancha con `Espacio`.
8. URL pública abierta después del despliegue.

La lista y el formato sugerido están en [Evidencias.md](./Evidencias.md).

---

## Matriz de revisión según la rúbrica de la unidad

| Criterio | Peso | Evidencia preparada | Estado antes del push |
|---|---:|---|---|
| **Trazabilidad y comprensión del sistema** | 25 | mapa de estado, fuerzas, integración, render, controles y cambios asistidos por IA | documentado |
| **Verificación del algoritmo de fuerzas** | 25 | cinco presets aislados + comparación explícita atracción/repulsión | código verificado; falta captura de ejecución |
| **Diseño de fuerzas e intención** | 20 | fuerza de contornos con ecuación propia y relación con el concepto | implementado |
| **Instrumento, score e interpretación** | 15 | cuatro momentos, puntero y avalancha; audio no automatiza el sistema | implementado |
| **Experimentación y criterio frente a la IA** | 10 | alternativas descartadas, decisiones conservadas y lista de cambios hechos con IA | documentado |
| **Entrega técnica y documentación** | 5 | bitácora, README, workflow y checklist de evidencias | falta confirmar URL pública |

No asigno una valoración numérica final todavía porque las capturas de ejecución y la URL pública aún no han sido verificadas. Una vez realizadas esas dos comprobaciones, esta misma tabla puede convertirse en la autoevaluación final.
