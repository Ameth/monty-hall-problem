function simularMontyHall(iteraciones) {
    let victorias = 0;
    let derrotas = 0;

    for (let i = 0; i < iteraciones; i++) {
        // Configurar las puertas: una con coche y dos con cabras
        let puertas = [0, 0, 0]; // 0 = cabra, 1 = coche
        const cocheDetrasDe = Math.floor(Math.random() * 3);
        puertas[cocheDetrasDe] = 1;

        // El jugador elige una puerta al azar
        const eleccionJugador = Math.floor(Math.random() * 3);

        // Monty abre una de las otras puertas con una cabra
        let puertasRestantes = [0, 1, 2].filter(num => num !== eleccionJugador && puertas[num] !== 1);
        const puertaAbiertaPorMonty = puertasRestantes[Math.floor(Math.random() * puertasRestantes.length)];

        // El jugador cambia de puerta
        let puertasDisponibles = [0, 1, 2].filter(num => num !== eleccionJugador && num !== puertaAbiertaPorMonty);
        const nuevaEleccion = puertasDisponibles[0]; // Solo queda una puerta después del cambio

        // Comprobar si el jugador gana con la nueva elección
        if (puertas[nuevaEleccion] === 1) {
            victorias++;
        } else {
            derrotas++;
        }
    }

    console.log(`De ${iteraciones} simulaciones:`);
    console.log(`- Ganaste ${victorias} veces`);
    console.log(`- Perdiste ${derrotas} veces`);
}

// Simular 100 veces
simularMontyHall(100);
