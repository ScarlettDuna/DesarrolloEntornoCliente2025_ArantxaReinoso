/* Estructura mínima de tu Sala 1 (plantilla mental)

Antes de escribir nada, tu cabeza debería ver esto:

=> Un objeto sala1
- Un symbol codigoSecreto
- Un estado: bloqueada: true
Un método para:
* comprobar código
* desbloquear la sala
- Un objeto anidado con “pistas”
Una copia del estado inicial

=> “Estás en una habitación. Hay un papel con un número.
Introduce el código para salir.”*/

const codigoSecreto = Symbol("codigo secreto")
const numeroAleatorio = Math.floor(Math.random() * 900) + 100 //Número aleatorio del 100 al 999
let sala1 = {
    nombre: "Sala 1",
    bloqueada: true,
    pistas: {

    },
    [codigoSecreto]: numeroAleatorio,
    validarCodigo(codigoIntroducido) {
        if (codigoIntroducido === this[codigoSecreto]) {
            this.bloqueada = false;
            return "Correcto";
        } else {
            return "Incorrecto";
        }
    }
}
console.log(sala1.validarCodigo(123)); // "Incorrecto"
console.log(sala1.validarCodigo(sala1[codigoSecreto])); // "Correcto"
console.log(sala1.bloqueada); // false
