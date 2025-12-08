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
    intentosAcceder: 10,
    intentosHechos: 0,

}
// Clonación del objeto Sala1
const estadoInicialSala1 = structuredClone(sala1);

// Añadimos métodos y symbol al objeto sala1
sala1[codigoSecreto] = numeroAleatorio;
sala1.validarCodigo = function (codigoIntroducido) {
    if (codigoIntroducido === this[codigoSecreto]) {
        this.bloqueada = false;
        this.addIntento();
        return "Correcto";
    } else {
        this.addIntento();
        return "Incorrecto";
    }
}
const fnValidarCodigo = sala1.validarCodigo;
sala1.addIntento = function () {
    this.intentosHechos ++;
    document.getElementById("intentosUsados").innerText = this.intentosHechos;
    if (this.intentosHechos >= this.intentosAcceder) {
        document.getElementById("inputCodigo").style.display = "none";
        document.getElementById("probarCodigo").style.display = "none";
        document.getElementById("zonaPistas").innerText = "Número de intentos agotado. Reinicia la sala para empezar de nuevo."
    }
}
const fnAddIntento = sala1.addIntento;
// Comprobar input con códigoSecreto
document.getElementById("probarCodigo").addEventListener("click", () => {
    const valor = Number(document.getElementById("inputCodigo").value);
    const resultado = sala1.validarCodigo(valor);
    if (resultado === "Incorrecto") {
        document.getElementById("resultado").classList.add("error");
        setTimeout(() => {
            document.getElementById("resultado").classList.remove("error");
        }, 300);

    }
    document.getElementById("resultado").innerText = resultado;
});

// Mostrar pistas
let pista = 1;
const contenedor = document.getElementById("zonaPistas");
contenedor.innerHTML = "";
document.getElementById("verPistas").addEventListener("click", () => {
    if (pista <= 6) {
        contenedor.innerHTML += `<p>${pista}. ${sala1.pistas[pista]}</p> \n`;
        pista ++;
    } else {
        contenedor.innerHTML += "No hay más pistas";
        document.getElementById("verPistas").style.display = 'none';
    }

});

// Reiniciar Sala
document.getElementById("reiniciarSala").addEventListener("click", () => {
    // Restaurar estado completo desde la copia
    let nuevoCodigo = Math.floor(Math.random() * 900) + 100;
    sala1 = structuredClone(estadoInicialSala1);
    sala1[codigoSecreto] = nuevoCodigo;
    sala1.validarCodigo = fnValidarCodigo;
    sala1.addIntento = fnAddIntento;

    // Restaurar interfaz
    document.getElementById("intentosUsados").innerText = 0;
    document.getElementById("resultado").innerText = "";
    document.getElementById("zonaPistas").innerHTML = "";
    document.getElementById("inputCodigo").style.display = "inline";
    document.getElementById("probarCodigo").style.display = "inline";

    pista = 1;

    alert("Sala reiniciada");
});
