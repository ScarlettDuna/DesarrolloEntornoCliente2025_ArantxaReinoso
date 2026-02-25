let formulario = document.getElementById("formulario");
let input = document.getElementById("inputTexto");


// TODO Bloquear todo lo que no sean letras o enter
input.addEventListener("keydown", function (event) {
  let tecla = event.code;

    // Con el código no hay que distinguir entre mayúsculas y minúsculas
    let alfabeto = ["KeyA", "KeyE", "KeyI", "KeyO", "KeyU", "KeyB", "KeyC", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyM", "KeyN", "KeyÑ", "KeyP", "KeyQ", "KeyR", "KeyS", "KeyT", "KeyV", "KeyW", "KeyX", "KeyY", "KeyX"];
    
    if (!alfabeto.includes(tecla) || event.key === 'Enter') {
        event.preventDefault();
        return;
    }
});e


// TODO Añadir tipo de evento y validación
input.addEventListener("input", function () {
  let inputValue = input.value;  
  console.log(inputValue)
  if (inputValue.length > 10) {
    input.value = inputValue.slice(0, 10)
    // console.log(inputValue.slice(0, 10))
  } 
});

// Impedir envío si hay menos de 6 caracteres
formulario.addEventListener("submit", function (evento) {
  let inputValue = input.value;  
  // TODO Código para impedir envío  
  if (inputValue.length < 6) {
    evento.preventDefault();
    alert("Tiene que haber un mínimo de carácteres en el input para poder enviar al formulario.")
  }

});
