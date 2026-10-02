# Bitácora — Unidad 4 · Oscilación

### Proyecto P5 
            
    [kURAMOto](https://editor.p5js.org/Alex1320/full/Eu5-cb1vD)

## Concepto

El proyecto representa la economía como un sistema de ciclos interdependientes. Cada agente simboliza un sector con un ritmo propio, pero la interacción entre ellos hace que puedan sincronizarse, desorganizarse o reorganizarse frente a cambios y perturbaciones. El modelo de Kuramoto permite representar cómo un comportamiento colectivo puede emerger a partir de múltiples ritmos individuales.

**Ecos de Fase** propone ocho entidades audiovisuales con ritmos naturales diferentes. Los agentes no obedecen un reloj global. Se influyen entre sí mediante el modelo de Kuramoto y el performer puede conducir el sistema aumentando o reduciendo el acoplamiento, alterando la diversidad de frecuencias y perturbando agentes individuales o al colectivo.

La intención performativa es poder recorrer:

**desorden → organización parcial → organización estable → ruptura → reorganización**

sin dibujar previamente las trayectorias ni programar una secuencia fija.

---

## Modelo utilizado

\[
\frac{d\theta_i}{dt} =
\omega_i +
\frac{K}{N}
\sum_{j=1}^{N}
\sin(\theta_j-\theta_i)
\]

En el proyecto:

- `theta`: estado de fase de cada agente.
- `omega`: velocidad natural a la que cada agente quiere avanzar.
- `K`: fuerza del acoplamiento entre agentes.
- `N = 8`.
- `sin(theta_j - theta_i)`: influencia producida por la diferencia de fase entre dos agentes.

No se fuerza directamente a todos los agentes a tener la misma fase. Cada uno ajusta su velocidad instantánea como resultado de la interacción.

---

## Predicciones y pruebas

### Prueba 1 — Acoplamiento casi nulo

**Configuración:** `K ≈ 0`, diversidad de frecuencias alta.

**Predicción:** cada agente debería conservar principalmente su propia frecuencia natural y las fases deberían permanecer dispersas.

**Observación:** cada agente tiene su propia frecuencia y mantienen con fases diversas y mantienen en un estado de desorden en cúal cada uno de estos mantiene una frencuencia propia, en cúal se intentan acoplar aumentando un poco el valor de `r`

### Prueba 2 — Acoplamiento creciente

**Configuración:** aumentar `K` progresivamente.

**Predicción:** los agentes deberían empezar a modificar sus velocidades instantáneas a partir de las diferencias de fase y el parámetro `r` debería tender a crecer.

**Observación:**  El parametro `r` tiende a crecer y su organización aumenta según este paremetro haciendo que cada uno de los agentes suene en cierta armonía, incluso si  la diversidad de frecuencia es alta o baja.

### Prueba 3 — Perturbación colectiva

**Configuración:** sistema con organización alta y `K` alto. Presionar `ESPACIO`.

**Predicción:** `r` debería caer inmediatamente al dispersarse las fases. Si el acoplamiento es suficiente, el colectivo debería tender a reorganizarse.

**Observación:** Cuando el sistmea tiene un acoplamiento alto este se desordena completamente, los agentes suenan de manera desincronizada, pero al tiempo de desacoplarse vuelven al estado de organización estable.

### Prueba 4 — Perturbación individual

**Configuración:** organización alta. Click sobre un agente.

**Predicción:** el agente perturbado se separará temporalmente de la fase colectiva y el modelo determinará si vuelve a acercarse al grupo.

**Observación:** Se desacopla el agente "perturbado", desestabilizando parte del sistema. pero estos vuelven a su estado anterior acoplandose según el estado colectivo.

---

## Personalidades audiovisuales

1. **Pulso:** respiración visual y golpe sinusoidal por ciclo.
2. **Órbita:** movimiento orbital y tono sostenido modulado por fase.
3. **Elástico:** estiramiento y pluck periódico.
4. **Chispa:** nube de puntos y ataque brillante breve.

La diferencia entre personalidades no depende únicamente del color o la altura musical; cada una transforma la fase en un comportamiento visual y sonoro diferente.

---

## Decisiones de diseño

- Se conservaron solo dos controles continuos principales: `K` y diversidad de `omega`.
- Se agregó una intervención individual para romper fases localmente.
- Se agregó una perturbación global para convertir la pérdida y recuperación del orden en material performativo.
- El parámetro de orden `r` comunica el comportamiento colectivo.
- Los umbrales que clasifican desorden, organización parcial y organización estable son una decisión de interfaz y no una parte original del modelo.

---

## ¿Por qué no es un secuenciador?

Un secuenciador puede utilizar un reloj central que determina exactamente cuándo ocurre cada evento.

En este proyecto cada agente tiene una fase y una frecuencia propias. La sincronización surge de la interacción entre esas fases a través de Kuramoto. Si se reemplazara el modelo por un temporizador global, desaparecerían la negociación temporal entre agentes, las transiciones emergentes y la reorganización después de una perturbación.

---

## Autoevaluación

| Criterio | Puntos | Evidencia |
|---|---:|---|
| Cumplimiento de requisitos mínimos | 25/25 | 8 agentes, 4 personalidades, controles, perturbaciones y estados |
| Explicación de variables de Kuramoto | 18/25 | sección Modelo utilizado + código comentado |
| Explicación del comportamiento observado | 20/25 | pruebas y parámetro de orden |
| Cumplimiento de objetivos de la unidad | 20/25 | instrumento performativo y demostración en vivo |
| **Total** | **83/100** | |

    nota de 0 a 5 -> 4.15
