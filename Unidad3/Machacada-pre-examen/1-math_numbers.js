// Pide dos números y muestra cuál es mayor, menor y si son iguales.
let pEj1 = document.querySelector('#ejercicio1')
let num1 = Number(prompt("Escribe un número"));
let num2 = Number(prompt("Escribe un número"));

if (!isNaN(num2) && !isNaN(num1)) {
    if (num1 !== num2) {
        pEj1.innerText += `El número mayor es: ${num1 > num2 ? num1 : num2} \n`;
        pEj1.innerText += `El número menor es: ${num1 < num2 ? num1 : num2} \n`;
    } else {
        pEj1.innerText +=`${num1} y ${num2} son iguales.`;
    }
} else {
    pEj1.innerText += "Valores incorrectos.";
}

// Genera 3 números aleatorios entre 1 y 50, y muestra el mayor.
let pEj2 = document.querySelector('#ejercicio2')
let aleatorio1 = Math.floor(Math.random() * 50) +1
let aleatorio2 = Math.floor(Math.random() * 50) +1
let aleatorio3 = Math.floor(Math.random() * 50) +1

pEj2.innerText = `El número mayor de ${aleatorio1}, ${aleatorio2} y ${aleatorio3} es ${Math.max(aleatorio1, aleatorio2, aleatorio3)}`


// Pide un número y muestra su valor absoluto, raíz cuadrada y cuadrado.
let boton = document.querySelector("button")
boton.addEventListener('click', () => {
    let num3 = Number(document.querySelector("#ej3").value)
    document.querySelector("#ejercicio3").innerText = `
    El valor absoluto es: ${Math.abs(num3)} 
    La raíz cuadrada es: ${Math.sqrt(num3)}
    El cuadrado es: ${Math.pow(num3, 2)}`
})

// Simula un dado que se lanza hasta obtener un 6, mostrando cuántos intentos tomó.
let dado = document.querySelector("#dado")
dado.addEventListener('click', () => {
    let resultado;
    let contador = 0
    do {
        resultado = Math.floor(Math.random() *6) +1
        contador ++;
    }
    while (resultado !== 6) 
    document.querySelector("#ejercicio4").innerText = `Ha habido que lanzar el dado ${contador} hasta conseguir el 6.`
})

// Calcula el precio final de un producto aplicando un IVA del 21% con toFixed(2).
let botonIva = document.querySelector(".iva")
botonIva.addEventListener('click', () => {
    let precio = Number(document.querySelector("#ej5").value)
    document.querySelector("#ejercicio5").innerText = `
    El total con IVA es ${(precio * 1.21).toFixed(2)}`
})
