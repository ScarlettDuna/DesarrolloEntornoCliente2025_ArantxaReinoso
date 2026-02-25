import Jugador from './jugador.js'
import { Cientifico, Soldado, Atleta } from './especialista.js'

// Detona el método estático de la clase Jugador
let elemStatic = document.getElementById('static');
let btnAbrir = document.getElementById('abrir');
btnAbrir.addEventListener('click', () => {
    elemStatic.innerHTML = `<h2>${Jugador.intentarAbrir()}</h2>`
})

// Detonan los métodos de las clases hijas
let output = document.getElementById('output')
let btnSoldado = document.getElementById('soldado');
let btnCientifico = document.getElementById('cientifico');
let btnAtleta = document.getElementById('atleta');

// Función reutilizable para crear contenido dinámicamente
function contenidoDinamico(jugador, divAppend){
    let newH3 = document.createElement('H3');
    newH3.textContent = `¿Qué acción deseas probar?`;
    let newParrafo = document.createElement('p');
    newParrafo.textContent = `La habilidad especial del jugador es: ${jugador.especial}`;
    let btnEspecial = document.createElement('button');
    btnEspecial.textContent = `Habilidad Especial`;
    // Se añade de forma dinámica atributos al elemento botón
    btnEspecial.setAttribute('id', 'btn-especial')
    btnEspecial.setAttribute('type', 'button')
    let btnInvestigar = document.createElement('button');
    btnInvestigar.textContent = `Investigar`;
    btnInvestigar.setAttribute('id', 'btn-investigar');
    btnInvestigar.setAttribute('type', 'button');
    divAppend.append(newH3)
    divAppend.append(newParrafo)
    divAppend.append(btnEspecial)
    divAppend.append(btnInvestigar)
}

btnSoldado.addEventListener('click', () => {
    // leemos el nombre para poder iniciar el jugador
    let nombre = document.getElementById('nombre').value;
    const unSoldado = new Soldado(nombre || 'Brian');
    contenidoDinamico(unSoldado, output)
    
    document.getElementById('btn-investigar').addEventListener('click', () => {
        // Control de errores
        try {
            unSoldado.investigar(); 
        } catch (error) {
            output.innerHTML = `<p style="color: red;">ERROR: ${error.message}</p>`;
        }
    });
    document.getElementById('btn-especial').addEventListener('click', () => {
        output.innerHTML = `<p style="color: green;">${unSoldado.usarHabilidadEspecial()}</p>`;
        // Añadir info al localstorage para poder jugar desde sala hub
        localStorage.setItem("sala3", "completada");
        setTimeout(() => {
            // Se utiliza el método assign del objeto location para redirigir
            location.assign("../hub.html");
        }, 5000)
    })
});
btnCientifico.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    const unCientifico = new Cientifico(nombre || 'Einstein');
    contenidoDinamico(unCientifico, output);
    
    document.getElementById('btn-investigar').addEventListener('click', () => {
        try {
            unCientifico.investigar(); 
        } catch (error) {
            output.innerHTML = `<p style="color: red;">ERROR: ${error.message}</p>`;
        }
    });
    document.getElementById('btn-especial').addEventListener('click', () => {
        output.innerHTML = `<p style="color: green;">${unCientifico.usarHabilidadEspecial()}</p>`;
        // Añadir info al localstorage para poder jugar desde sala hub
        localStorage.setItem("sala3", "completada");
        setTimeout(() => {
            window.location.href = "../hub.html";
        }, 5000)
    })
});
btnAtleta.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    const unAtleta = new Atleta(nombre || 'U. Bolt');
    contenidoDinamico(unAtleta, output)
    
    document.getElementById('btn-investigar').addEventListener('click', () => {
        try {
            unAtleta.investigar(); 
        } catch (error) {
            output.innerHTML = `<p style="color: red;">ERROR: ${error.message}</p>`;
        }
    });
    document.getElementById('btn-especial').addEventListener('click', () => {
        output.innerHTML = `<p style="color: green;">${unAtleta.usarHabilidadEspecial()}</p>`;
        // Añadir info al localstorage para poder jugar desde sala hub
        localStorage.setItem("sala3", "completada");
        setTimeout(() => {
            window.location.href = "../hub.html";
        }, 5000)
    })
});

let btnNodos= document.getElementById('ver-nodos');
let nodosDisplay = document.getElementById('nodos-display')
btnNodos.addEventListener('click', () => {
    let nodoBody = document.body;
    let info = "";
    // Se accede al idioma del navegador
    info = `El idioma del navegador es: ${navigator.language}.<br>`
    info += `childNodes: ${nodoBody.childNodes.length} nodos<br>`;
    info += `firstChild: ${nodoBody.firstChild ? nodoBody.firstChild.nodeName : "No tiene primer nodo hijo"}<br>`;
    for (let node of nodoBody.childNodes) {
        if (node.childNodes !== null && node.tagName !== undefined) {
            info += `${node.tagName} tiene ${node.childNodes.length} hijos<br>`
        } 
    }
    nodosDisplay.innerHTML = info;

})