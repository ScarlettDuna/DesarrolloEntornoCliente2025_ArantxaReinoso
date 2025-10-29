let nombreApellidos = document.getElementById("nombre").value;
let nota = document.getElementById("nota").value;
let nombreAlumno = document.getElementById("nombreAlumno");
let notaFinal = document.getElementById("notaFinal");
let boton = document.querySelector("button");
let mensaje = document.querySelector(".mensaje");

// En el div con la clase mensaje se muestra un texto indicando si la nota es SUSPENSO (menor que 5), APROBADO (entre 5 y 6), BIEN (de 6 a 7),
// NOTABLE (de 7 a 9) y SOBRESALIENTE (de 9 en adelante).

let calificacion = "";

if (nota >= 9) calificacion = "SOBRESALIENTE";
if (nota >= 7 && nota < 9) calificacion = "NOTABLE";
if (nota >= 6 && nota < 7) calificacion = "BIEN";
if (nota >= 5 && nota < 6) calificacion = "APROBADO";
if (nota < 5) calificacion = "SUSPENSO";

boton.addEventListener("click", ()=> {
    console.log(nota);
    console.log(nombreApellidos)
    nombreAlumno.innerText = nombreApellidos;
    notaFinal.innerHTML = `<strong>Nota: ${nota}</strong>`;
    mensaje.textContent = calificacion;
})
    