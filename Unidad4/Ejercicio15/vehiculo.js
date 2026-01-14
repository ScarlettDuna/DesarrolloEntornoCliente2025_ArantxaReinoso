export default class Vehiculo {

    static totalVehiculos = 0
    #kilometros = 0
    constructor(marca, modelo, anio) {
        this.marca = marca
        this.modelo = modelo
        this.anio = anio
        Vehiculo.totalVehiculos++;
    }
    mostrarInfo(){
        return "Este vehículo es un " + this.marca + ", modelo " + this.modelo + " del año " + this.anio;
    }
    calcularAntiguedad() {
        let anioActual = new Date().getFullYear();
        return anioActual - this.anio
    }
    get kilometros(){
        return this.#kilometros;
    }
    set kilometros(kms) {
        if (kms > this.#kilometros) {
            this.#kilometros = kms
        }
    }
    static mostrarTotalVehiculos(){
        return `Se han creado ${Vehiculo.totalVehiculos} vehículos.`;
    }
    
}