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
  pistas: new Map([
    ["A", "La palanca A parece desgastada"],
    ["B", "La palanca B no hace ruido"],
    ["C", "La palanca C vibra ligeramente"]
  ]),
  combinacionesUsadas: new Set(), //Cada vez que se pulsa comprobar se guarda la combianción por si el usuario quiere ver qué opciones ha introducido ya
  cambiarPalanca(palanca) {
    this.palancas[palanca] = !this.palancas[palanca]
  },
  comprobarCombinacion() {
    this.intentos ++;
    const clavePalancas = Array.from(
      Object.entries(this.palancas),
      ([p, v]) => `${p}:${v}`).join('|');
    this.combinacionesUsadas.add(clavePalancas)
    const correcta = Object.keys(this.combinacionCorrecta).every(p => this.palancas[p] === this.combinacionCorrecta[p]);
    if (correcta) {
      this.bloqueada = false;
      return true;
    } else {
      return false;
    }
  }, 
  mostrarEstado() {
    return Object.entries(this.palancas).map(([palanca, estado]) => {
      return `${palanca}: ${estado ? "ON" : "OFF"}`;
    }).join('\n')
  }
}
let resultado = document.querySelector('.resultado')
let palancaA = document.querySelector('.palA')
let palancaB = document.querySelector('.palB')
let palancaC = document.querySelector('.palC')
let comprobar = document.querySelector('#comprobar')
let mostrar = document.querySelector('.mostrar')

palancaA.addEventListener('click', () => {
  sala2.cambiarPalanca('A');
})
palancaB.addEventListener('click', () => {
  sala2.cambiarPalanca('B');
})
palancaC.addEventListener('click', () => {
  sala2.cambiarPalanca('C');
})
comprobar.addEventListener('click', () => {
  const ok = sala2.comprobarCombinacion();
  resultado.innerText = ok
    ? "✔ Combinación correcta"
    : "✖ Combinación incorrecta";
})
mostrar.addEventListener('click', () => {
  resultado.innerHTML = sala2.mostrarEstado()
})
