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
  intentos: 0, 
  pistas: new Map([
    [1, "Una palanca debe estar 'on'"],
    [2, "Hay dos palancas en el mismo sentido"],
    [3, "No te rindas"]
  ]),
  combinacionesUsadas: new Set(), //Cada vez que se pulsa comprobar se guarda la combianción por si el usuario quiere ver qué opciones ha introducido ya
  cambiarPalanca(palanca) {
    this.palancas[palanca] = !this.palancas[palanca]
  },
  comprobarCombinacion() {
    this.intentos ++;
    intentos.innerText = sala2.intentos;
    const clavePalancas = Array.from(
      Object.entries(this.palancas),
      ([p, v]) => `${p}:${v}`).join('|');
    this.combinacionesUsadas.add(clavePalancas)
    const correcta = Object.keys(this.combinacionCorrecta).every(p => this.palancas[p] === this.combinacionCorrecta[p]);
    if (correcta) {
      this.bloqueada = false;
      this.mostrarPista();
      return true;
    } else {
      this.mostrarPista();
      return false;
    }
  }, 
  mostrarEstado() {
    return Object.entries(this.palancas).map(([palanca, estado]) => {
      return `${palanca}: ${estado ? "ON" : "OFF"}`;
    }).join('\n')
  },
  mostrarPista() {
    if (this.intentos % 2 === 0 && this.intentos < 7) {
      pistas.innerText += this.pistas.get(this.intentos / 2) + '\n';
    }
  }
}
let estado = document.querySelector('#estado')
let palancaA = document.querySelector('.palA')
let palancaB = document.querySelector('.palB')
let palancaC = document.querySelector('.palC')
let comprobar = document.querySelector('#comprobar')
let mostrar = document.querySelector('.mostrar')
let mensaje = document.querySelector('#mensaje')
let intentos = document.getElementById('intentos')

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
  if (ok) {
    mensaje.innerHTML = `<span style="color: green"> ✔ Combinación correcta</span>`
  } else {
    mensaje.innerHTML = `<span style="color: red"> ✖ Combinación incorrecta</span>`
  }
})
mostrar.addEventListener('click', () => {
  estado.innerHTML = sala2.mostrarEstado()
})

let verIntentos = document.getElementById('verIntentos');
let ayuda = document.getElementById('ayuda');
let pistas = document.getElementById('pistas');

verIntentos.addEventListener('click', () => {
  if (sala2.combinacionesUsadas.size === 0) {
    ayuda.innerText = "Aún no has probado ninguna combinación.";
    return;
  }

  ayuda.innerText = Array.from(sala2.combinacionesUsadas)
    .map((comb, i) => `${i + 1}. ${comb}`)
    .join('\n');
});
