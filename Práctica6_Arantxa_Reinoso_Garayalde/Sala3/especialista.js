import Jugador from './jugador.js';
class Cientifico extends Jugador {
    constructor(nombre) {
        super(nombre)
        this.especial = 'Conocimiento'
    }
    usarHabilidadEspecial() {
        this.nivel = this.nivel + 5;
        return `¡Claro! La solución es 1234. ¡El científico mete la contraseña y la puerta se abre!  <br> El científico ${this.nombre} ha subido de nivel, nivel actual: ${this.nivel}`
    }
    investigar() {
        throw new Error('Has tocado donde no debías. ¡Has muerto!')
    }
}
class Soldado extends Jugador {
    constructor(nombre) {
        super(nombre)
        this.especial = 'Fuerza'
    }
    usarHabilidadEspecial() {
        this.nivel = this.nivel + 5;
        return `El soldado rompe la cerradura y la puerta se abre. <br> El soldado ${this.nombre} ha subido de nivel, nivel actual: ${this.nivel}`
    }
    investigar() {
        throw new Error('Has tocado donde no debías. ¡Has muerto!')
    }
}
class Atleta extends Jugador {
    constructor(nombre) {
        super(nombre)
        this.especial = 'Escalada'
    }
    usarHabilidadEspecial() {
        this.nivel = this.nivel + 5;
        return `El atleta ve una nota pegada en el techo, usando el saliente del marco de la puerta escala hasta ella y la coge. Está escrita la contraseña en la nota. <br> El atleta ${this.nombre} ha subido de nivel, nivel actual: ${this.nivel}`
    }
    investigar() {
        throw new Error('Has tocado donde no debías. ¡Has muerto!')
    }
}
export { Cientifico, Soldado, Atleta }