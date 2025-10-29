/* Vamos a simular sorteo de lotería. Para ello, solicita un número en el rango del 1 al 10 al usuario. Primero valida que el número introducido
sea correcto con las funciones estudiadas en este bloque. Después genera un
número aleatorio. Si los números coinciden el usuario habrá sido agraciado, en caso
contrario no. */
let numUsuario = Number(prompt("Introduce un número del 1 al 10"));
if (isNaN(numUsuario) || numUsuario < 1 || numUsuario > 10) {
    alert("Número fuera de rango o valor incorrecto")
} else {
    let numAleatorio = Math.floor(Math.random() * 10) + 1
    console.log(numAleatorio)
    if (numAleatorio === numUsuario) {
        alert("¡Has ganado!")
    } else {
        alert("¡Otra vez será")
    }
}