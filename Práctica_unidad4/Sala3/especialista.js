import Jugador from './jugador.js';
class Cientifico extends Jugador {
    constructor() {
        super()
        this.especial = 'Conocimiento'
    }
    usarHabilidadEspecial() {
        return 'La solución es...'
    }
    investigar() {
        throw new Error('Has tocado donde no debías. ¡Has muerto!')
    }
}
class Soldado extends Jugador {
    constructor() {
        super()
        this.especial = 'Fuerza'
    }
    usarHabilidadEspecial() {
        return 'El soldado rompe la cerradura y la puerta se abre.'
    }
    investigar() {
        throw new Error('Has tocado donde no debías. ¡Has muerto!')
    }
}
class Atleta extends Jugador {
    constructor() {
        super()
        this.especial = 'Escalada'
    }
    usarHabilidadEspecial() {
        return 'El atleta ve una nota pegada en el techo, usando el saliente del marco de la puerta escala hasta ella y la coge. Está escrita la contraseña en la nota.'
    }
    investigar() {
        throw new Error('Has tocado donde no debías. ¡Has muerto!')
    }
}
export { Cientifico, Soldado, Atleta }