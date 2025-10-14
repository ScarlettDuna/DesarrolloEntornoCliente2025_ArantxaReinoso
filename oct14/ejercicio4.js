let fechas = []
let input = prompt("Introduce una fecha YYYY-MM-DD / 'año, mes, fecha, horas, minutos, segundos, ms' ")
while (true) {
    if (input === null || input === "") {
        break
    }
    fechas.push(input)
    input = prompt("Introduce una fecha YYYY-MM-DD / 'año, mes, fecha, horas, minutos, segundos, ms' ")
}
console.log(fechas)
/* Validar el formato de la fecha. Si no es válido se mostrará un error. En caso
de que el formato sea válido, se convierte a Date y se mostrará por consola
la siguiente información por cada fecha: dd de mm de yyyy a las
hh:mm */

/* La diferencia entre la fecha actual y la introducida: en días y en
segundos. La diferencia en días será siempre redondeando al día
más cercano y empleando restas con milisegundos. */

/* Sumar 5 días a la fecha introducida y mostrar el resultado */