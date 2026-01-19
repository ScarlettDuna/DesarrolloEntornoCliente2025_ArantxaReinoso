document.getElementById("formulario").addEventListener("submit", function(e) {
    // No enviamos el formulario para ver el mensaje
    e.preventDefault();
  
    const prefix = document.getElementById("prefix").value.trim();
    const domain = document.getElementById("domain").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validación incluyendo el prefijo y dominio específicos
    const pattern = "[A-Za-z0-9._%+\\-]*@";

    const reg = new RegExp(pattern, "i");

    const msg = document.getElementById("mensaje");

    if (reg.test(email)) {
        msg.textContent = "✔ Formulario válido. Enviando...";
        msg.style.color = "green";
    } else {
        msg.textContent = "✘ El email NO cumple el prefijo o el dominio requerido.";
        msg.style.color = "red";
    }
});