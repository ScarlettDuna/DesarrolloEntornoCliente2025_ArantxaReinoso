// Crea un botón que abra una nueva ventana con una cita aleatoria.
let boton1 = document.getElementById('ejercicio1');
let params = `scrollbars=no,resizable=yes,status=no,location=no,toolbar=no,menubar=no,
                width=500,height=600,left=-1000,top=-1000`;
boton1.addEventListener('click', () => {
    window.open('./6-popup.html', 'test', params );
})

// Crea una página que envíe un mensaje a otra usando postMessage().
let parrafo2 = document.getElementById('ejercicio2');
window.addEventListener('message', (event) => {
    console.log(event.data);
    parrafo2.innerText = `${event.data}`
})

// Crea una ventana emergente que se cierre automáticamente después de 5 segundos.
let boton3 = document.getElementById('ejercicio3')
boton3.addEventListener('click', () => {
    let newWin = window.open("", "", "width=200,height=200");
    setTimeout(() => {
        newWin.close();
    }, 5000)
})