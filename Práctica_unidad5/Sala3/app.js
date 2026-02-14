import Jugador from './jugador.js'
import { Cientifico, Soldado, Atleta } from './especialista.js'

// Detona el método estático de la clase Jugador
let elemStatic = document.getElementById('static');
let btnAbrir = document.getElementById('abrir');
btnAbrir.addEventListener('click', () => {
    elemStatic.innerHTML = `<h2>${Jugador.intentarAbrir()}</h2>`
})

// Detonan los métodos de las clases hijas
let btnSoldado = document.getElementById('soldado');
let btnCientifico = document.getElementById('cientifico');
let btnAtleta = document.getElementById('atleta');
let output = document.getElementById('output')

btnSoldado.addEventListener('click', () => {
    // leemos el nombre para poder iniciar el jugador
    let nombre = document.getElementById('nombre').value;
    const unSoldado = new Soldado(nombre || 'Brian');

    output.innerHTML = `
        <h3>¿Qué acción deseas probar?</h3>
        <p>La habilidad especial del Soldado es: ${unSoldado.especial}</p>
        <button type="button" id="btn-especial">Habilidad Especial</button>
        <button type="button" id="btn-investigar">Investigar</button>
    `;
    
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
            window.location.href = "../hub.html";
        }, 5000)
    })
});
btnCientifico.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    const unCientifico = new Cientifico(nombre || 'Einstein');
    output.innerHTML = `
        <h3>¿Qué acción deseas probar?</h3>
        <p>La habilidad especial del científico es: ${unCientifico.especial}</p>
        <button type="button" id="btn-especial">Habilidad Especial</button>
        <button type="button" id="btn-investigar">Investigar</button>
    `;
    
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
    output.innerHTML = `
        <h3>¿Qué acción deseas probar?</h3>
        <p>La habilidad especial del atleta es: ${unAtleta.especial}</p>
        <button type="button" id="btn-especial">Habilidad Especial</button>
        <button type="button" id="btn-investigar">Investigar</button>
    `;
    
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