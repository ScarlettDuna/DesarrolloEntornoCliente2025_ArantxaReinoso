import Empresa_ARG from "./Empresa_ARG.js";
export class Filial extends Empresa_ARG{
    #detalles;
    constructor(detalles){
        super()
        this.#detalles = detalles
    }
    get detalles(){
        let {cif, fechaCreacion} = this.#detalles;
        return `Esta filial tiene el CIF ${cif} y fecha de creación ${fechaCreacion.toDateString()}`
    }
    
}