// Guarda el nombre del usuario en una cookie y muéstralo al recargar la página.
let botonNombre = document.querySelector('.nombre')
botonNombre.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    let fechaExp = new Date()
    fechaExp.setTime(fechaExp.getTime() + 10*24*60*60*1000) // 10 días
    document.cookie = `nombre=${encodeURIComponent(nombre)};${fechaExp.toUTCString()};path=/`
})

// Implementa un contador de visitas usando localStorage.
let visitas = Number(localStorage.getItem('visitCounter')) || 0;
visitas++;
localStorage.setItem('visitCounter', visitas);

document.querySelector('.ejercicio2').innerText =
    `Has visitado esta página ${visitas} veces.`;

// Crea un formulario que recuerde los últimos valores introducidos al recargar la página.
let inputNombre = document.getElementById("nombre2");

// Al cargar la página, recuperar el valor guardado
let nombreGuardado = localStorage.getItem("nombreGuardado");
if (nombreGuardado !== null) {
    inputNombre.value = nombreGuardado;
}

// Cada vez que el usuario escriba, guardar automáticamente
inputNombre.addEventListener("input", () => {
    localStorage.setItem("edadGuardada", inputNombre.value);
});

// Al pulsar un botón “Cerrar sesión”, borra todas las cookies/localStorage y muestra un mensaje.
let botonBorrar = document.querySelector('.borrar')
botonBorrar.addEventListener('click', () => {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let posIgual = cookie.indexOf('=');
        let nombreCookie = posIgual > -1 ? cookie.substring(0, posIgual) : cookie;
        document.cookie = `${nombreCookie}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    }
    localStorage.clear()
})

