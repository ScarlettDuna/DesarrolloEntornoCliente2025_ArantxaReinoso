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
    output.innerHTML = `
        <h3>¿Qué acción deseas probar?</h3>
        <button type="button" id="btn-especial">Habilidad Especial</button>
        <button type="button" id="btn-investigar">Investigar</button>
    `;
    // leemos el nombre para poder iniciar el jugador
    let nombre = document.getElementById('nombre').value;
    const unSoldado = new Soldado(nombre);

    document.getElementById('btn-investigar').addEventListener('click', () => {
        // Control de errores
        try {
            unSoldado.investigar(); 
        } catch (error) {
            output.innerHTML = `<p style="color: red;">ERROR: ${error.message}</p>`;
        }
    });
    document.getElementById('btn-especial').addEventListener('click', () => {
        output.innerHTML = `<p style="color: green;">${unSoldado.usarHabilidadEspecial()}</p>`
    })
});
btnCientifico.addEventListener('click', () => {
    output.innerHTML = `
        <h3>¿Qué acción deseas probar?</h3>
        <button type="button" id="btn-especial">Habilidad Especial</button>
        <button type="button" id="btn-investigar">Investigar</button>
    `;
    let nombre = document.getElementById('nombre').value;
    const unCientifico = new Cientifico(nombre);
    document.getElementById('btn-investigar').addEventListener('click', () => {
        try {
            unCientifico.investigar(); 
        } catch (error) {
            output.innerHTML = `<p style="color: red;">ERROR: ${error.message}</p>`;
        }
    });
    document.getElementById('btn-especial').addEventListener('click', () => {
        output.innerHTML = `<p style="color: green;">${unCientifico.usarHabilidadEspecial()}</p>`
    })
});
btnAtleta.addEventListener('click', () => {
    output.innerHTML = `
        <h3>¿Qué acción deseas probar?</h3>
        <button type="button" id="btn-especial">Habilidad Especial</button>
        <button type="button" id="btn-investigar">Investigar</button>
    `;
    let nombre = document.getElementById('nombre').value;
    const unAtleta = new Atleta(nombre);
    document.getElementById('btn-investigar').addEventListener('click', () => {
        try {
            unAtleta.investigar(); 
        } catch (error) {
            output.innerHTML = `<p style="color: red;">ERROR: ${error.message}</p>`;
        }
    });
    document.getElementById('btn-especial').addEventListener('click', () => {
        output.innerHTML = `<p style="color: green;">${unAtleta.usarHabilidadEspecial()}</p>`
    })
});