// Propagacion del body (se frena en palancas)
const eventos = document.getElementById('eventos');

document.body.addEventListener('click', () => {
  eventos.innerText = 'Burbuja activa: evento recibido en BODY';
});


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
    [3, "Hay más 'off' que 'on'."],
    [4, "No te rindas"]
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
    let pistas = document.getElementById('pistas');
    if (this.intentos % 2 === 0) {
      const numPista = this.intentos / 2;
      if (this.pistas.has(numPista))  {
        pistas.innerText += this.pistas.get(numPista) + '\n';
      }
    }
  }
}

let estado = document.querySelector('#estado')
let comprobar = document.querySelector('#comprobar')
let mostrar = document.querySelector('.mostrar')
let mensaje = document.querySelector('#mensaje')
let intentos = document.getElementById('intentos')

// Insertamos evento de ratón "mousemove" con uso de coordenadas
const panelPalancas = document.querySelector('.palancas');
let mousedisplay = document.getElementById('mousedisplay');

panelPalancas.addEventListener('mousemove', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  
  // console.log(`Ratón en panel → X: ${x}, Y: ${y}`);
  mousedisplay.innerText = `Posición del ratón: X=${e.offsetX}, Y=${e.offsetY}`;

});

// Insertamos el segundo evento de ratón
panelPalancas.addEventListener('click', (e) => {
  // getBoundingClientRect() - MDN devuelve el tamaño de un elemento 
  // y su posición relativa respecto a la ventana de visualización
  const { width, height } = panelPalancas.getBoundingClientRect();
  mousedisplay.innerText = `Tamaño del panel: ${Math.round(width)} x ${Math.round(height)} px`;
  // Delegación de eventos
  const boton = e.target; // elemento real clicado

    if (!boton.matches('button')) return;
    // evitar propagación del evento en el body
    e.stopPropagation();
    eventos.innerText = 'Evento detenido en el panel de palancas';
    const letra = boton.textContent.slice(-1);
    sala2.cambiarPalanca(letra);
});
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


verIntentos.addEventListener('click', () => {
  intentos.innerText = sala2.intentos;
  sala2.mostrarPista();
  if (sala2.combinacionesUsadas.size === 0) {
    ayuda.innerText = "Aún no has probado ninguna combinación.";
    return;
  }

  ayuda.innerText = Array.from(sala2.combinacionesUsadas)
    .map((comb, i) => `${i + 1}. ${comb}`)
    .join('\n');
});

// Muestra por consola las propiedades de algún objeto creando las variables con desestructuración.
let {nombre, bloqueada} = sala2;
console.log(`El objeto sala2 se llama '${nombre}' y ${bloqueada ? 'está bloquada' : 'no está bloqueada'}.`);

// Eventos de teclado
document.addEventListener('keydown', (e) => {
  // Validación de caracteres alfanuméricos
  if (/^[a-z0-9]$/i.test(e.key)) {
    mousedisplay.innerText = `Tecla alfanumérica: ${e.key}`;
  }

  // Validación de teclas especiales
  if (e.key === 'Enter') {
    const ok = sala2.comprobarCombinacion();
    mensaje.innerHTML = ok
      ? `<span style="color: green">✔ Combinación correcta</span>`
      : `<span style="color: red">✖ Combinación incorrecta</span>`;
  }
  if (e.ctrlKey) {
    verIntentos.click();
  }
  if (e.shiftKey) {
    estado.innerText = sala2.mostrarEstado();
  }

});

