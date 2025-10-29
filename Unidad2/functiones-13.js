// Crea un script para realizar un saludo personalizado. Para ello crearemos una función que recibe dos parámetros:
let nombre = prompt("¿Cómo te llamas?");
let genero = prompt("Géreno: ¿masculino o femenino");
function stringCheck(nombre, genero) {
    if (nombre === "") {
        alert("¡Error, no has introducido un nombre válido!")
    } else {
        saludo(nombre, genero)
    }
}
function saludo(nombre, genero="no especificado"){
    if (genero.toLowerCase() === "femenino"){ 
        document.write(`Bienvenida, ${nombre}`);
    } else if (genero.toLowerCase() ===  "masculino"){ 
        document.write(`Bienvenido, ${nombre}`);
    } else {
        document.write(`Bienvenid@, ${nombre}`);
    }
}
stringCheck(nombre, genero)