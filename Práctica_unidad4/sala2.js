let sala2 = {
  nombre: "El juego de las palancas",
  bloqueada: true,

  palancas: {
    A: false,
    B: false,
    C: false
  },

  combinacionCorrecta: {
    A: true,
    B: false,
    C: true
  },
  tiempoLimite: 60, // 60 segundos
  intentos: 0, 
  cambiarPalanca(palanca) {
    this.palancas[palanca] = !this.palancas[palanca]
  },
  comprobarCombinacion() {
    this.intentos ++;
    for (let palanca in this.combinacionCorrecta) {
        if (this.palancas[palanca] !== this.combinacionCorrecta[palanca]) {
        return false;
        }
    }
    this.bloqueada = false;
    return true;
  }
}
