// Alterna una clase CSS que cambie el color de fondo al pulsar un botón.
let div1 = document.querySelector('.ejercicio1')
let botonDiv1 = document.querySelector('.ejercicio1>button')
botonDiv1.addEventListener('click', () => {
    div1.classList.toggle('background');
})
// Cambia el tamaño del texto con dos botones: “Aumentar” y “Disminuir”.
let botonGrande = document.querySelector('.agrandar');
let botonPeque = document.querySelector('.encoger');
let parrafo = document.querySelector('.ejercicio2');
let tamFuente = 16;
botonGrande.addEventListener('click', () => {
    tamFuente = Math.min(tamFuente + 2, 60); // para evitar que se vuelva demasiado grande
    parrafo.style.fontSize = `${tamFuente}px`
})
botonPeque.addEventListener('click', () => {
    tamFuente = Math.max(tamFuente - 2, 8); // para evitar que se vuelva demasiado pequeño
    parrafo.style.fontSize = `${tamFuente}px`
})

// Crea un div que cambie de color al hacer doble clic.
const coloresPastel = [
    "#FFD1DC", // rosa pastel
    "#FDFD96", // amarillo pastel
    "#AEC6CF", // azul pastel
    "#BFD8B8", // verde pastel
    "#E6E6FA", // lavanda
    "#FFE5B4", // melocotón pastel
    "#F5E1FD", // lila pastel
    "#F7D6E0"  // rosado suave
];
let div3 = document.querySelector('#ejercicio3')
div3.addEventListener('dblclick', () => {
    div3.style.background = coloresPastel[Math.floor(Math.random() * coloresPastel.length)];
})