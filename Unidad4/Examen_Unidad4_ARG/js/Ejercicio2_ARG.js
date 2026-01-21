import { Filial } from "./FilialARG.js"
let competencias = Symbol('competencias')
let objetoDetalles = {
    [competencias]: "Esta filial hace negocios relacionados con IT",
    cifFiliar: "B321456987",
    fechaCreacion: new Date()
}

let clonObjetoDetalles = structuredClone(objetoDetalles)
let output = document.getElementById('output')
for (let [clave, valor] of Object.entries(clonObjetoDetalles)){
    // console.log(clave)
    output.innerHTML += `${clave}: ${valor} <br>`
}

let newFilial = new Filial(objetoDetalles)
output.innerHTML += `<br>Detalles Filial:  ${newFilial.detalles}<br>`
