// Pide una frase y cuenta cuántas vocales tiene.
let botonVocales = document.getElementById("botonEj1")
botonVocales.addEventListener('click', () => {
    let frase = document.getElementById('fraseEj1').value
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
    let 
})