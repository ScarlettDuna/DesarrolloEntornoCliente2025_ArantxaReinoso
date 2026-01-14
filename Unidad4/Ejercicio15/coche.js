import Vehiculo from './vehiculo.js'

export default class Coche extends Vehiculo{
    constructor(marca, modelo, anio, puertas, combustible){
        super(marca, modelo, anio);
        this.puertas = puertas
        this.combustible = combustible
    }
    mostrarInfo() {
        return "Este coche es un " + this.marca + ", modelo " + this.modelo + " del año " + this.anio + " con " + this.puertas + " puertas y combustible " + this.combustible + ".";
    }
}

let nuevoMetodo = {
    calcularCombustible(litros) {
        if (this.combustible.toLowerCase() === "gasolina") {
            return `${litros * 1.5}€`;
        } else if (this.combustible.toLowerCase() === "diesel") {
            return `${litros * 2}€`;
        } else {
            return "Error: combustible incorrecto.";
        }
    }
}

export { nuevoMetodo };