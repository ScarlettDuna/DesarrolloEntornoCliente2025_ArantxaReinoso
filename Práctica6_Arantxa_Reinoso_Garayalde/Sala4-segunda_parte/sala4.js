// Formulario bloqueado → se desbloquea al insertar la correcta
let inputUser = document.getElementById('user');
let inputSecreto = document.getElementById('secret');
let boton = document.querySelector('form button');

function desbloquarFormulario(estado) {
  inputUser.disabled = estado;
  inputSecreto.disabled = estado;
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

// Regrex para usuario y secreto
let patronUser = /^[a-z]{4,8}$/
let patronSecret = /^[A-Z]{3}\d{2}$/

// Generar secreto
const divSecreto = document.querySelector('.secreto');
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
  divSecreto.innerText = resultado
  return resultado;
}
const secreto = generarSecreto();


// Scroll para revelar pista
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    divSecreto.classList.add('contrast');
  }
});

// Clipboard para copiar código secreto
divSecreto.addEventListener('click', () => {
  navigator.clipboard.writeText(divSecreto.innerText);
});


// Solo si los patrones del user & del secreto son correctos se activa el botón 
function validarFormulario(){
  const userValido = patronUser.test(inputUser.value);
  const secretValido = patronSecret.test(inputSecreto.value);
  boton.disabled = !(userValido && secretValido);

  if (userValido) {
    // validación visual en el fomulario
    inputUser.classList.add('valido')
    inputUser.classList.remove('invalido')
  } else {
    inputUser.classList.add('invalido')
    inputUser.classList.remove('valido')
  }
  if (secretValido) {
    inputSecreto.classList.add('valido')
    inputSecreto.classList.remove('invalido')
  } else {
    inputSecreto.classList.add('invalido')
    inputSecreto.classList.remove('valido')
  }
}

inputSecreto.addEventListener('input', () => {
  boton.classList.remove('error-boton');
  validarFormulario()
})
inputUser.addEventListener('input', () => {
  validarFormulario()
})

// Botón activo → comprueba secreto → siguiente reto
const form = document.querySelector('form');
let modoFinalActivo = false;
const ganador = document.querySelector('.te-has-pasado')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputSecreto.value === secreto) {
    modoFinalActivo = true;
    divSecreto.innerText = `Sistema inestable. Redimensiona la ventana para recalibrar.`;
    divSecreto.classList.add('inestable')
  } else {
    boton.classList.add('error-boton');
  }
})

// Evento resize
window.addEventListener('resize', () => {
  if (modoFinalActivo){
    if (window.innerWidth < 600) {
      document.body.classList.add('victoria')
      ganador.innerText = `¡GANADOR! Te has pasado el juego`;

      localStorage.setItem("sala4", "completada");
      setTimeout(() => {
        window.location.href = "../hub.html";
      }, 5000)
      
    } 
  }
});

