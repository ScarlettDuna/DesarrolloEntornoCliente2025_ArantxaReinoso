// Pide una frase y cuenta cuántas vocales tiene.
let botonVocales = document.getElementById("botonEj1")
botonVocales.addEventListener('click', () => {
    let frase = document.getElementById('fraseEj1').value.toLowerCase()
    let vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (vocales.includes(frase.charAt(i))) {
            contador ++;
        }
    }
    document.getElementById("ejercicio1").innerText = `La frase tiene ${contador} vocales.`;
})

// Pide una palabra y di si es un palíndromo.
let botonPalindromo = document.getElementById('botonEj2');
botonPalindromo.addEventListener('click', () => {
    let palabra = document.getElementById('fraseEj2').value.toLowerCase()
    let palindromo = palabra.split("").reverse().join("");
    let parrafo = document.getElementById('ejercicio2');
    if (palabra === palindromo) {
        parrafo.innerText = `"${palabra}" es palíndromo.`;
    } else {
        parrafo.innerText = `"${palabra}" no es palíndromo.`;
    }
})

// Pide una frase y muestra la misma en mayúsculas, minúsculas y con la primera letra en mayúscula.
let botonformateo = document.getElementById('botonEj3');
botonformateo.addEventListener('click', () => {
    let frase = document.getElementById('fraseEj3').value
    let fraseArray = frase.split(" ").filter(p => p !== "");  // filtrar posibles dobles espacios
    let camelCase = [];
    for (let word of fraseArray) {
        const firstCap = (word.charAt(0)).toUpperCase()
        const remainingletters = word.slice(1)
        camelCase.push(firstCap + remainingletters)
    }
    
    document.getElementById('ejercicio3').innerText = `
    En mayúsculas: ${frase.toUpperCase()}\n
    En minúsculas: ${frase.toLowerCase()}\n
    Primera letra de cada palabra en mayúsculas: ${camelCase.join(" ")}`
    
})

// Comprueba si una palabra empieza por "a" o termina por "z".
let botonAZ = document.getElementById('botonEj4')
botonAZ.addEventListener('click', () => {
    let palabra = (document.getElementById('fraseEj4').value).toLowerCase()
    // if (palabra.startsWith("a") || palabra.endsWith("z")) { ... } Métodos más modernos
    if (palabra.charAt(0) === 'a' || palabra.charAt(palabra.length -1) === 'z') {
        document.getElementById('ejercicio4').innerText = `La palabra "${palabra}" empieza por A o termina por Z`
    } else {
        document.getElementById('ejercicio4').innerText = `La palabra "${palabra}" NO empieza por A ni termina por Z`
    }
})

// Sustituye todas las apariciones de “JS” por “JavaScript” en una cadena.
let botonReemplazar = document.getElementById('botonEj5');
botonReemplazar.onclick = function () {
    let frase = document.getElementById('fraseEj5').value
    let fraseReemplazada = frase.replaceAll(/js/gi, "JavaScript"); //regrex case insensitive
    document.getElementById("ejercicio5").innerText = fraseReemplazada
}