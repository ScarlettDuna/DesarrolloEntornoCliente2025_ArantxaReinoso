import Jugador from './jugador.js'
import { Cientifico, Soldado, Atleta } from './especialista.js'

let elemStatic = document.getElementById('static');
let btnAbrir = document.getElementById('abrir');

btnAbrir.addEventListener('click', () => {
    elemStatic.innerHTML = `<h2>${Jugador.intentarAbrir()}</h2>`
})

let btnSoldado = document.getElementById('soldado');
let btnCientifico = document.getElementById('cientifico');
let btnAtleta = document.getElementById('atleta');
let output = document.getElementById('output')
let nombre = document.getElementById('nombre').value;

btnSoldado.addEventListener('click', () => {
    output.innerHTML = `
        <h3>¿Qué acción deseas probar?</h3>
        <button type="button" id="btn-especial">Habilidad Especial</button>
        <button type="button" id="btn-investigar">Investigar</button>
    `;
    const unSoldado = new Soldado(nombre);
    // Ahora que existen en el DOM, les asignamos el evento
    document.getElementById('btn-investigar').addEventListener('click', () => {
        try {
            unSoldado.investigar(); 
        } catch (error) {
            output.innerHTML = `<p style="color: red;">ERROR: ${error.message}</p>`;
        }
    });
    document.getElementById('btn-especial').addEventListener('click', () => {
        output.innerHTML = `<p style="color: green;">${unSoldado.investigar}</p>`
    })
});
btnCientifico.addEventListener('click', () => {
    output.innerHTML = `
        <h3>¿Qué acción deseas probar?</h3>
        <button type="button" id="btn-especial">Habilidad Especial</button>
        <button type="button" id="btn-investigar">Investigar</button>
    `;
    const unCientifico = new Cientifico(nombre);
    document.getElementById('btn-investigar').addEventListener('click', () => {
        try {
            unCientifico.investigar(); 
        } catch (error) {
            output.innerHTML = `<p style="color: red;">ERROR: ${error.message}</p>`;
        }
    });
    document.getElementById('btn-especial').addEventListener('click', () => {
        output.innerHTML = `<p style="color: green;">${unCientifico.investigar}</p>`
    })
});
btnAtleta.addEventListener('click', () => {
    output.innerHTML = `
        <h3>¿Qué acción deseas probar?</h3>
        <button type="button" id="btn-especial">Habilidad Especial</button>
        <button type="button" id="btn-investigar">Investigar</button>
    `;
    const unAtleta = new Atleta(nombre);
    document.getElementById('btn-investigar').addEventListener('click', () => {
        try {
            unAtleta.investigar(); 
        } catch (error) {
            output.innerHTML = `<p style="color: red;">ERROR: ${error.message}</p>`;
        }
    });
    document.getElementById('btn-especial').addEventListener('click', () => {
        output.innerHTML = `<p style="color: green;">${unAtleta.investigar}</p>`
    })
});