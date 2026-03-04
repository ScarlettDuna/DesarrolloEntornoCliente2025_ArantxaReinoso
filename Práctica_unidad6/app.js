const botonReinicio = document.getElementById('reset');
botonReinicio.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})

const sala1 = localStorage.getItem("sala1");
const sala2 = localStorage.getItem("sala2");
const sala3 = localStorage.getItem("sala3");
const sala4 = localStorage.getItem("sala4");

// Botones salas
const btnSala1 = document.getElementById('sala1');
const btnSala2 = document.getElementById('sala2');
const btnSala3 = document.getElementById('sala3');
const btnSala4 = document.getElementById('sala4')

if (sala1 === 'completada') {
    btnSala2.disabled = false;
}
if (sala2 === 'completada') {
    btnSala3.disabled = false;
}
if (sala3 === 'completada') {
    btnSala4.disabled = false;
}
if (sala4 === 'completada') {
    document.querySelector('.vencedor').innerText = `Juego superado`;
    document.body.classList.add('ganador')
}

document.querySelector('.menu').addEventListener('click', (e) => {
    const boton = e.target.closest('button');
    if (!boton || boton.disabled) return;
    
    switch (boton.id) {
        case 'sala1':
            window.location.href = "./Sala1/sala1.html";
            break;
        case 'sala2':
            window.location.href = "./Sala2-primera_parte/sala2.html";
            break;
        case 'sala3':
            window.location.href = "./Sala3/sala3.html";
            break;
        case 'sala4':
            window.location.href = "./Sala4-segunda_parte/sala4.html";
            break;
    }
    
})