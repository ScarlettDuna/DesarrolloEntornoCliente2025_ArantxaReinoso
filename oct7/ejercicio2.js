/* Crea un script que simule el análisis de precios de productos en una tienda. El usuario debe introducir:
Un precio base en euros (por prompt). */
let precio = parseFloat(prompt("Introduce el precio del producto"))
// Un número con decimales para representar un porcentaje de descuento.
let descuento = parseFloat(prompt("Introduce el porcentaje de descuento, en decimal"))
/* Tu script debe:
 Validar que los dos valores sean números válidos.
 Convertir los valores a tipo numérico real.
 Calcular el precio final aplicando el descuento.
 Redondear el resultado final a 2 decimales (con la función que
automáticamente calcula el valor más cercano).
 Mostrar los errores o el resultado final con alert. */
if (isNaN(precio) || isNaN(descuento) || precio < 0 || descuento < 0) {
    alert("Datos introducidos no válidos");
} else {
    let precio_final = (precio - (precio *(descuento / 100))).toFixed(2)
    alert(`Precio inicial: ${precio}€ \nDescuento: ${descuento}%. \nEl precio final es ${precio_final}€`)
}