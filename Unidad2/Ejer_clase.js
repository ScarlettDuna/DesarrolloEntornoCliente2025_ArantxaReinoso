/* Ejercicio 4. Crea un script que pida el radio de un círculo y calcule y muestre el área del mismo en una página HTML (π*radio^2).
Definir PI (π) como una constante. Muestra el resultado con "document.write". */

let radio = prompt("Introduce el radio del circulo");
radio = Number(radio);
const pi = 3.14159;
let area_circulo = pi + (radio ** 2);
document.write("El área del circulo es " + area_circulo + "u.");

/* Ejercicio 5. Implementar un script que pida dos números.
Se implementará una calculadora básica que muestra con "document.write" el resultado de la suma, resta, multiplicación y división.
Si hay algún número incorrecto se mostrará NaN directamente. */

let num1 = prompt("Introduce un número");
let num2 = prompt("Introduce otro número");
num1 = Number(num1);
num2 = Number(num2);
document.write("La suma de " + num1 + " más " + num2 + " es " + (num1 + num2) + ".");
document.write("La resta de " + num1 + " menos " + num2 + " es " + (num1 - num2) + ".");
document.write("La multiplicación de " + num1 + " y " + num2 + " es " + (num1 * num2) + ".");
document.write("La división de " + num1 + " entre " + num2 + " es " + (num1 / num2) + ".");