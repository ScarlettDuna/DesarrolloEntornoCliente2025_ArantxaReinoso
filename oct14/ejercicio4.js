let fechas = []
while (true) {
    input = prompt("Introduce una fecha YYYY-MM-DD / YYYY-MM-DDTHH:mm:ss.sssZ")
    if (!input) break;
    fechas.push(input)
}
console.log(fechas)
/* Validar el formato de la fecha. Si no es válido se mostrará un error. En caso de que el formato sea válido, se convierte a Date y se mostrará por consola
la siguiente información por cada fecha: dd de mm de yyyy a las hh:mm */
for (let fecha of fechas){
    let fechaActual = new Date(fecha);
    if (isNaN(fechaActual)) {
        console.log("Error en formato");
        
    } else {
        console.log(`${fechaActual.getDate()} de ${fechaActual.getMonth() + 1} de ${fechaActual.getFullYear()} a las ${(fechaActual.getHours()).toString().padStart(2, "0")}:${(fechaActual.getMinutes()).toString().padStart(2, "0")}`)
    }
    
}

/* La diferencia entre la fecha actual y la introducida: en días y en segundos. La diferencia en días será siempre redondeando al día
más cercano y empleando restas con milisegundos. */
let diaMiliS = 86400000
let hoy = Date.now()
for (let fecha of fechas){
    let fechaActual = new Date(fecha);
    if (isNaN(fechaActual))  continue;
    else {
        console.log(`La diferencia entre hoy y el ${fechaActual.getDate()} de ${fechaActual.getMonth()} de ${fechaActual.getFullYear()} es de ${Math.round((hoy - fechaActual.getTime()) / diaMiliS)} días.`)
    }
    
}
/* Sumar 5 días a la fecha introducida y mostrar el resultado */
for (let fecha of fechas){
    let fechaActual = new Date(fecha);
    let en5dias = new Date(fechaActual.getTime + diaMiliS * 5);
    if (isNaN(fechaActual))  continue;
    else {
        console.log(`Si sumamos 5 días al ${fechaActual.getDate()} de ${fechaActual.getMonth() + 1} de ${fechaActual.getFullYear()} da el ${en5dias.getDate()} de ${en5dias.getMonth()} de ${en5dias.getFullYear()}.`)
    }
    
}
