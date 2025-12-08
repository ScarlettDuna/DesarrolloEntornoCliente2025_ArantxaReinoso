const codigoSecreto = Symbol("codigo secreto")
const numeroAleatorio = Math.floor(Math.random() * 900) + 100 //Número aleatorio del 100 al 999
let sala1 = {
    nombre: "Sala 1",
    bloqueada: true,
    pistas: {
        1: "Es un número de 3 dígitos, entre el 100 y el 999.",
        2: numeroAleatorio >= 500 ? "El número es mayor o igual a 500" : "El número es menor de 500",
        3: numeroAleatorio % 2 === 0 ? "Es un número par" : "Es un número impar",
        4: numeroAleatorio % 3 === 0 ? "Es divisible por 3" : "No es divisible por 3",
        5: numeroAleatorio % 5 === 0 ? "Es divisible por 5" : "No es divisible por 5",
        6: numeroAleatorio % 7 === 0 ? "Es divisible por 7" : "No es divisible por 7"
    },
    [codigoSecreto]: numeroAleatorio,
    intentosAcceder: 10,
    intentosHechos: 0,
    validarCodigo(codigoIntroducido) {
        if (codigoIntroducido === this[codigoSecreto]) {
            this.bloqueada = false;
            this.addIntento();
            return "Correcto";
        } else {
            this.addIntento();
            return "Incorrecto";
        }
    },
    addIntento() {
        this.intentosHechos ++;
        document.getElementById("intentosUsados").innerText = this.intentosHechos;
        if (this.intentosHechos >= this.intentosAcceder) {
            document.getElementById("inputCodigo").style.display = "none";
            document.getElementById("probarCodigo").style.display = "none";
            document.getElementById("zonaPistas").innerText = "Número de intentos agotado. Reinicia la sala para empezar de nuevo."
        }
    }
}
// Clonación del objeto Sala1
const estadoInicialSala1 = structuredClone(sala1);


// Comprobar input con códigoSecreto
document.getElementById("probarCodigo").addEventListener("click", () => {
    const valor = Number(document.getElementById("inputCodigo").value);
    const resultado = sala1.validarCodigo(valor);
    document.getElementById("resultado").innerText = resultado;
});

// Mostrar pistas
let pista = 1;
const contenedor = document.getElementById("zonaPistas");
contenedor.innerHTML = "";
document.getElementById("verPistas").addEventListener("click", () => {
    if (pista >= 6) {
        contenedor.innerHTML += `<p>${pista}. ${sala1.pistas[pista]}</p> \n`;
        pista ++;
    } else {
        contenedor.innerHTML += "No hay más pistas";
    }

});

// Reiniciar Sala
document.getElementById("reiniciarSala").addEventListener("click", () => {
    // Restaurar estado completo desde la copia
    sala1 = structuredClone(estadoInicialSala1);

    // Restaurar interfaz
    document.getElementById("intentosUsados").innerText = 0;
    document.getElementById("resultado").innerText = "";
    document.getElementById("zonaPistas").innerHTML = "";
    document.getElementById("inputCodigo").style.display = "inline";
    document.getElementById("probarCodigo").style.display = "inline";

    pista = 1;

    alert("Sala reiniciada");
});
