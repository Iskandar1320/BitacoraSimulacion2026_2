## Videos
<video src="Videos/Fuerzas_02.mp4" controls width="360"></video>
<video src="Videos/Fuerzas_03.mp4" controls width="360"></video>

## Momentos
### Posibilidad
* Al iniciar cúalquier campo de posibilidad o movimiento es posible, debido a la aletoriedad.
    
    ```javascript
        let direccionAleatoria = p5.Vector.random2D();
### Normalidad
* Los movimientos tienen una media común, por el uso de randomGaussian se generan alrededor de la media
    ```javascript
        let pasoNormal = abs(randomGaussian(1.8, 0.8));
    pasoNormal = constrain(pasoNormal, 0.2, 5);

### Ruido Perlin
* El uso de ruido perlín ayuda a crear un movimiento suave sin afectar la aletoriedad
    ```javascript
    let anguloRuido = noise(
      this.pos.x * 0.003,
      this.pos.y * 0.003,
      frameCount * 0.003 + this.semilla
    ) * TWO_PI * 4;

    let direccionRuido = p5.Vector.fromAngle(anguloRuido);


### Influencia
* El usario al interactuar no modifica la trayectoria de las particulas, crea una tendencia, para que estás modifiquen su trayectoria.
    ```javascript
    let haciaInfluencia = p5.Vector.sub(puntoInfluencia, this.pos);
    let distancia = haciaInfluencia.mag();
    haciaInfluencia.normalize();

    let fuerzaInfluencia = map(distancia, 0, width, 0.18, 0.02);
    fuerzaInfluencia = constrain(fuerzaInfluencia, 0.02, 0.18);

    if (!hayInteraccion) {
      fuerzaInfluencia *= 0.4;
    }

### Tendencia
* Una pequeña preferencia repetida se acumula y construye dirección.
    ```javascript
    let movimiento = createVector(0, 0);
    movimiento.add(direccionAleatoria.mult(0.45));
    movimiento.add(direccionRuido.mult(0.75));
    movimiento.add(tendenciaGlobal.copy().mult(0.55));
    movimiento.add(haciaInfluencia.mult(fuerzaInfluencia * 3));

    movimiento.normalize();
    movimiento.mult(pasoNormal);

### Excepción
* Se usa el salto tipo Lévy flight, para un evento improbable, la interacción aumenta la chance del evento pero no la controla.
    ```javascript
    let probabilidadExcepcion = hayInteraccion ? 0.006 : 0.002;

    if (random() < probabilidadExcepcion) {
      let salto = p5.Vector.random2D();

      // Muchos saltos serán medianos, pocos serán muy largos.
      let distanciaSalto = pow(random(1, 8), 2.2);

      salto.mult(distanciaSalto);
      movimiento.add(salto);
    }

