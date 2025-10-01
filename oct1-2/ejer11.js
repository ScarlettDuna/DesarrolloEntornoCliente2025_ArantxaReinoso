/* Crea un script que genere una tabla de multiplicar "especial" del 1 al 10, usando dos bucles for anidados:
La tabla actual se detiene y pasa a la siguiente cuando el producto sea múltiplo de una constante almacenada en el script (por ejemplo, múltiplos de 3, 4 o 5 según el valor de la constante).
Antes de cada tabla, aparecerá un confirm que permite al usuario finalizar el bucle y el script antes de tiempo.
La salida por pantalla será con document.write().
*/
// let numero = Number(prompt("Introduce un número del 1 al 10"));
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        let interruptor = confirm("¿Desea saber la tabla de multiplicar del 3?");
            if (!interruptor) {
                break
            }
        }
    document.write(`<h2>Tabla de multiplicar del ${i}: </h2>`)
    for (let j = 1; j <= 10; j++) {
        if (j === 9) {
        let interruptor = confirm(`¿Desea saber cuanto es ${i} multiplicado por ${j}?`);
        if (!interruptor) {
                continue
            }
        }
        document.write(`${i} x ${j} = ${i*j} <br>`);
    }
}