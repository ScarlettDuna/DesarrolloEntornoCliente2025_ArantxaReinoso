// Crea un formulario con nombre y edad,
// y muestra un saludo personalizado al hacer clic en un botón.
let bottonEj1 = document.getElementById('botonEj1')
bottonEj1.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value
    let edad = document.getElementById('edad').value
    document.getElementById('parrafoEj1').innerHTML = `Hola ${nombre}, tienes ${edad} años.`;
})

// Crea tres botones: rojo, verde y azul.
// Al pulsarlos, cambia el color de fondo del body.
let body = document.querySelector('body')
let botonRojo = document.querySelector('.rojo')
let botonVerde = document.querySelector('.verde')
let botonAzul = document.querySelector('.azul')
botonRojo.addEventListener('click', () => {
    body.style.background = 'red';
})
botonVerde.addEventListener('click', () => {
    body.style.background = 'green';
})
botonAzul.addEventListener('click', () => {
    body.style.background = 'blue';
})
/* En vez de tres listeners...
document.getElementById("ejercicio2").addEventListener("click", e => {
    if (e.target.matches(".rojo")) body.style.background = "red";
    if (e.target.matches(".verde")) body.style.background = "green";
    if (e.target.matches(".azul")) body.style.background = "blue";
});
*/

// Al pasar el ratón sobre una imagen, cambia a otra.
let imagen = document.querySelector('img');
let original = imagen.src;
imagen.addEventListener('mouseover', () => {
    imagen.src = './istockphoto.jpg';
})
imagen.addEventListener('mouseout', () => {
    imagen.src = original;
})

// Al escribir en un input, muestra en tiempo real el número de caracteres restantes.
let inputEj4 = document.getElementById('ejercicio4');
let parrafoEj4 = document.getElementById('parrafoEj4');
parrafoEj4.innerText = '50';
inputEj4.addEventListener('input', () => {
    parrafoEj4.innerText = `${50 - inputEj4.value.length}`
})

// Crea un contador con botones “+” y “–” que actualice un número en pantalla.
let botonSumar = document.querySelector('.mas')
let botonRestar = document.querySelector('.menos')
let contador = 0;
let mosContador = document.getElementById('contador')
botonSumar.addEventListener('click', () => {
    contador ++;
    mosContador.innerText = `${contador}`
})
botonRestar.addEventListener('click', () => {
    contador --;
    mosContador.innerText = `${contador}`
})