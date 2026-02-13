// Drag & drop → tarjetas → lector
// Formulario bloqueado → se desbloquea al insertar la correcta
// Scroll para revelar pista
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    secreto.style.visibility = 'visible';
  }
});

// Clipboard para copiar código secreto
secreto.addEventListener('click', () => {
  navigator.clipboard.writeText(secreto.innerText);
});



let patronUser = /^[a-z]{4,8}$/
let patronSecret = /^[A-Z]{3}\d{2}$/

// Generar secreto
function generarSecreto() {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeros = '0123456789';

  let resultado = '';

  for (let i = 0; i < 3; i++) {
    resultado += letras[Math.floor(Math.random() * letras.length)];
  }

  for (let i = 0; i < 2; i++) {
    resultado += numeros[Math.floor(Math.random() * numeros.length)];
  }

  return resultado;
}
const secreto = generarSecreto();
let inputSecreto = document.getElementById('secret');


function validarSecreto() {
    if (patronSecret.test(inputSecreto.value)) {
        // validación visual en el fomulario
        inputSecreto.style.borderColor = 'green';
    } else {
        inputSecreto.style.borderColor = 'red';
    }
}
// evento click que verifica el
inputSecreto.addEventListener('change', () => {
    validarSecreto()
})

// Evento resize
window.addEventListener('resize', () => {
  info.innerText = `Ventana: ${window.innerWidth} x ${window.innerHeight}`;
});

