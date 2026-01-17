export default class Jugador {
    #nivel = 5;
    constructor(nombre) {
        this.nombre = nombre;
    }
    static intentarAbrir() {
        return "La puerta emite una luz roja y pita. Se ilumina un cartel 'USA UNO DE LOS JUGADORES ESPECIALES'";
    }
    get nivel(){
        return this.#nivel;
    }
    set nivel(kms) {
        if (kms > this.#nivel) {
            this.#nivel = kms
        }
    }
}