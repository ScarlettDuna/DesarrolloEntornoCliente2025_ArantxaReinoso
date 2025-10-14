/* Crea un script que reciba una cadena de texto. El script comprueba si la
cadena contiene la palabra “JavaScript” tal cual */
let hayJavascript = prompt("Escribe una frase")
let posJS = hayJavascript.indexOf("JavaScript");
if (posJS !== -1) {
    alert("Enhorabuena, tu frase contiene 'JavaScript'! Ahora te toca adivinar en qué posición empieza.");
    let posicion = prompt("¿En qué posición está la palabra 'Javascript'? ");
    let intentos = 0
    while (posicion !== posJS) {
        if (posicion < posJS) {
            alert("Es un número más alto")
            intentos ++;
        } else if (posicion > posJS) {
            alert("Es un número más bajo");
            intentos ++;
        } else {
            alert(`¡Has acertado! Has usado ${intentos} intentos. \n
                El final de la cadena es: ...${hayJavascript.substring(posJS + 10)}`)
            break;
        }
        posicion = prompt("¿En qué posición está la palabra 'Javascript'? ")
    }
} else {
    alert("Oh no! Tu frase no contiene 'JavaScript'")
}