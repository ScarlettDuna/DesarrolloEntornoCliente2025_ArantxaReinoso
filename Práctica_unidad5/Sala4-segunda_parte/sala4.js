// Formulario bloqueado → se desbloquea al insertar la correcta
let inputUser = document.getElementById('user');
let inputSecreto = document.getElementById('secret');
let boton = document.querySelector('button');

function desbloquarFormulario(estado) {
  inputUser.disabled = estado;
  inputSecreto.disabled = estado;
  boton.disabled = estado;
}

// Drag & drop → tarjetas → lector
const lectorTarj = document.getElementById('lector-tarj');
const tarjetas = document.querySelectorAll('[draggable="true"]');
// Usamos el evento 'dragstart' para guardar el información de si es la tarjeta correcta
tarjetas.forEach(tarjeta => {
  tarjeta.addEventListener('dragstart', (e) => {
    const esCorrecta = tarjeta.dataset.correct;
    e.dataTransfer.setData('text/plain', esCorrecta);
  });
});
lectorTarj.addEventListener('dragenter', () => {
  lectorTarj.classList.add('activo');
  lectorTarj.classList.remove('incorrecto');
  lectorTarj.classList.remove('correcto');
})

lectorTarj.addEventListener('dragover', (e) => {
  // prevenir default para permitir 'drop'
  e.preventDefault();
})
lectorTarj.addEventListener('dragleave', () => {
  lectorTarj.classList.remove('activo');
});

lectorTarj.addEventListener('drop', (e) => {
  e.preventDefault();
  const dato = e.dataTransfer.getData('text/plain')
  lectorTarj.classList.remove('activo');
  if (dato === 'true') {
    lectorTarj.classList.add('correcto');
    lectorTarj.innerText = 'Tarjeta correcta. Acceso concedido.';
    desbloquarFormulario(false)
    
  } else {
    lectorTarj.classList.add('incorrecto');
    lectorTarj.innerText = 'Tarjeta incorrecta.';
    desbloquarFormulario(true)
  }
})


// Scroll para revelar pista
const divSecreto = document.querySelector('.secreto');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    divSecreto.style.visibility = 'visible';
  }
});

// Clipboard para copiar código secreto
divSecreto.addEventListener('click', () => {
  navigator.clipboard.writeText(divSecreto.innerText);
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

