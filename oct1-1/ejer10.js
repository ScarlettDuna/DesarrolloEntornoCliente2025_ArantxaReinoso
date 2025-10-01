/* Ejercicio 10. Crea un script que simule el acceso a un cajero automático. 
El sistema tiene un PIN correcto almacenado en una constante (por ejemplo, 1234). 
El usuario tiene hasta 3 intentos para introducir el PIN correcto usando prompt(). 
Si acierta, se muestra un mensaje de bienvenida. Si falla los 3 intentos, se bloquea el acceso con un mensaje de "Tarjeta bloqueada". 
El script debe usar un bucle “while” o “do while” para controlar los intentos*/
let intentos = 3;
do {
    let pin = Number(prompt("Introduce tu número PIN para acceder"));
    if (pin === 1234) {
        alert("¡Bienvenido a su servicio de ATM!");
        break;
    } else {
        intentos --;
    }
    
} while (intentos > 0);
