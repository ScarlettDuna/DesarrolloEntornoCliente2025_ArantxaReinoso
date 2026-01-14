class Vehiculo {

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

class Coche extends Vehiculo{
    constructor(marca, modelo, anio, puertas, combustible){
        super(marca, modelo, anio);
        this.puertas = puertas
        this.combustible = combustible
    }
    mostrarInfo() {
        return "Este coche es un " + this.marca + ", modelo " + this.modelo + " del año " + this.anio + " con " + this.puertas + " puertas y combustible " + this.combustible + ".";
    }
}

let output = document.querySelector('.output')
let miChoche = new Coche("Hyunday", "Ioniq", 2018, 5, "gasolina hibrido");
let v1 = new Vehiculo("Toyota", "Corolla", 2010);
let v2 = new Vehiculo("Ford", "Fiesta", 2015);
let v3 = new Vehiculo("Seat", "Ibiza", 2008);

v1.kilometros = 15000;
v2.kilometros = 5000;
miChoche.kilometros = 23000;

output.innerHTML += miChoche.mostrarInfo() + '<br>';

console.log(miChoche.mostrarInfo())
console.log("Mi coche tiene " + miChoche.calcularAntiguedad() + " años.")


console.log(miChoche instanceof Coche)
console.log(miChoche instanceof Vehiculo)
console.log(Vehiculo.mostrarTotalVehiculos())

let nuevaFuncion = {
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
Object.assign(Coche.prototype, nuevaFuncion);
miChocheNuevo = new Coche("Seat", "Ibiza", 2026, 3, "diesel")
console.log('Para 125 litros de dieses necesito ' + miChocheNuevo.calcularCombustible(125))