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
            document.getElementById("resultado").innerText = "Número de intentos agotado. Refresca la página y empieza de nuevo."
        }
    }
}
// Test objeto Sala1
console.log(sala1.validarCodigo(123)); // "Incorrecto"
console.log(sala1.validarCodigo(sala1[codigoSecreto])); // "Correcto"
console.log(sala1.bloqueada); // false
document.getElementById("probarCodigo").addEventListener("click", () => {
    const valor = Number(document.getElementById("inputCodigo").value);
    const resultado = sala1.validarCodigo(valor);
    document.getElementById("resultado").innerText = resultado;
});


document.getElementById("verPistas").addEventListener("click", () => {
    const contenedor = document.getElementById("zonaPistas");
    contenedor.innerHTML = "";

    for (let [objeto, pista] of Object.entries(sala1.pistas)) {
        contenedor.innerHTML += `<p>${objeto}. ${pista}</p>`;
    }
});

