class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca
        this.modelo = modelo
        this.anio = anio
        this._totalVehiculos = 0
        this._kilometros = 0
    }
    mostrarInfo(){
        return "Este vehículo es un " + this.marca + ", modelo " + this.modelo + " del año " + this.anio;
    }
    calcularAntiguedad() {
        let anioActual = new Date();
        return anioActual.getFullYear() - this.anio
    }
    mostrarTotalVehiculos(){
        
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

let miChoche = new Coche("Hyunday", "Ioniq", 2018, 5, "gasolina hibrido");
let v1 = new Vehiculo("Toyota", "Corolla", 2010);
let v2 = new Vehiculo("Ford", "Fiesta", 2015);
let v3 = new Vehiculo("Seat", "Ibiza", 2008);

let output = document.querySelector('.output')
output.innerHTML += miChoche.mostrarInfo() + '<br>';

console.log(miChoche.mostrarInfo())
console.log("Mi coche tiene " + miChoche.calcularAntiguedad() + " años.")


console.log(miChoche instanceof Coche)
console.log(miChoche instanceof Vehiculo)