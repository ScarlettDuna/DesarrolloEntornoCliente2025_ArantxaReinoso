import Empresa_ARG from "./Empresa_ARG.js";
// Se crea un array con dos objetos de prueba "Empresa"
let arrayPrueba = [];
let empresa1 = new Empresa_ARG("B123456789", "Empresa 1", 2019)
let empresa2 = new Empresa_ARG("B987654321", "Empresa 2", 2005)
arrayPrueba.push(empresa1)
arrayPrueba.push(empresa2)
// Prueba para mi para confirmar que el método estático funciona
console.log(Empresa_ARG.calcularAñoMinimo())

let output = document.getElementById('output')
// Se recorre el array y se muestra CIF, NombreFiscal y AñoFundación
for (let item of arrayPrueba){
    output.innerHTML += `<p>CIF: ${item.cif}; <br>Nombre Fiscal: ${item.nombreFiscal}, <br>Año Fundación: ${item.añoFundacion}</p>`
    
}

