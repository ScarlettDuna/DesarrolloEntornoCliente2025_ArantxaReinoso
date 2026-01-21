export default class Empresa_ARG {
    #cif;
    #nombreFiscal;
    #añoFundacion;
    static añosFundacion = new Set();
    constructor(cif, nombreFiscal, añoFundacion){
        Empresa_ARG.añosFundacion.add(añoFundacion)
        this.cif = cif
        this.nombreFiscal = nombreFiscal
        this.añoFundacion = añoFundacion
    }
    get cif(){
        return this.#cif
    }
    set cif(newCif){
        if (typeof newCif === "string"){
            this.#cif = newCif
        }
    }
    get nombreFiscal(){
        return this.#nombreFiscal
    }
    set nombreFiscal(newNombre){
        if (typeof newNombre === "string"){
            this.#nombreFiscal = newNombre
        }
    }
    get añoFundacion(){
        return this.#añoFundacion
    }
    set añoFundacion(anio){
        if (typeof anio === "number"){
            this.#añoFundacion = anio
        }
    }
    static calcularAñoMinimo(){
        return Math.min(...Empresa_ARG.añosFundacion)
    }
}