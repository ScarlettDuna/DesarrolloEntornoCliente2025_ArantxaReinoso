// Crea un array de 5 nombres y ordénalos alfabéticamente.
let botonEj1 = document.getElementById('botonEj1');
botonEj1.addEventListener('click', () => {
    let nombres = document.getElementById('inputEj1').value 
    let sortedNombers = nombres.trim().split(" ").toSorted()
    let parrafo = document.getElementById('parrafoEj1');
    if (sortedNombers.length !== 5) {
        parrafo.innerText = `Valores introducidos incorrectos`
    } else {
        parrafo.innerText = `Los nombres ordenador son: ${sortedNombers[0]}, ${sortedNombers[1]}, ${sortedNombers[2]}, ${sortedNombers[3]} y ${sortedNombers[4]}`
    }
    
})

// Calcula la media de un array de números introducidos por el usuario.
let botonEj2 = document.getElementById('botonEj2')
botonEj2.onclick = function () {
    let numeros = document.getElementById("inputEj2").value
        .trim()
        .split(/[\s,]+/) // separa uno o más espacios o comas
        .map(Number)
    let sum = 0;
    let parrafo = document.getElementById('parrafoEj2');
    numeros.forEach(num => {
        if (!isNaN(num)) {
            sum += num
        } else {
            parrafo.innerText = `Valores introducidos incorrectos`;
            return
        }
    });
    let media = sum/numeros.length
    parrafo.innerText = `La media de los números introducidos es: ${media}`
}

// Crea una función que reciba dos fechas y diga cuántos días han pasado entre ellas.
let botonEj3 = document.getElementById('botonEj3')
botonEj3.addEventListener('click', () => {
    let input1 = document.getElementById('inputEj3-1').value
    let input2 = document.getElementById('inputEj3-2').value
    let fecha1 = new Date(input1)
    let fecha2 = new Date(input2)
    let parrafo = document.getElementById('parrafoEj3');
    let diferenciaFechas;
    if (fecha1 < fecha2) {
        diferenciaFechas = Math.round((fecha2.getTime() - fecha1.getTime())/(1000 * 60 * 60 * 24))
        parrafo.innerText = `Entre el ${fecha1.toLocaleDateString('es-ES')} y el ${fecha2.toLocaleDateString('es-ES')} hay ${diferenciaFechas} días`;
    } else {
        parrafo.innerText = `La fecha final debe ser mayor a la fecha inicial.`
    }
})

// Dado un array de fechas, muestra cuáles caen en fin de semana.


// Crea un reloj en vivo que actualice la hora cada segundo en la página.