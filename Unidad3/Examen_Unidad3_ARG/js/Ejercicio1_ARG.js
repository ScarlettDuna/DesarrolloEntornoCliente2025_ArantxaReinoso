// Comprueba que la cadena del input contiene al menos dos guiones (-). En caso
// contrario se mostrará un alert con un error y no se continuará.
let boton = document.querySelector('button')
boton.addEventListener('click', () => {
    let input = document.querySelector('input').value
    let numGuiones = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '-') {
            numGuiones ++
        }
    }
    console.log(numGuiones)
    if (numGuiones === 0) {
        alert('Error: La fecha debe contener guiones ('-') y formato DD-MM-AAAA')
        return;
    }
    // Extrae el año, mes y día usando métodos de strings. Si no son números
    // mostraremos un alert con un error y no se continuará.
    let fecha = input.split('-');
    for (let item of fecha) {
        item = parseInt(item)
        if (isNaN(item)) {
            alert("Error: Día, mes y año deben ser valores númericos");
            return;
        }
    }
    // Si está todo correcto, crea un objeto fecha con el constructor de año, mes y día. Si la fecha
    // es mayor a la actual mostraremos un alert con un error y no se continuará.
    let fechaNacimiento = new Date(fecha[2], fecha[1] - 1, fecha[0])
    console.log(fechaNacimiento)

    /*Se mostrará un alert con un string que indique los años transcurridos de la fecha actual
    respecto a los introducidos por teclado de las siguientes formas: */
    let hoy = new Date();
    let edad = (hoy.getTime() - fechaNacimiento.getTime()) / (1000*60*60*24*365)
    console.log(edad)
    alert(`
        - Edad con decimales: ${edad.toFixed(2)} años\n
        - Edad actual: ${Math.floor(edad)} años\n
        - Edad el próximo año: ${Math.floor(edad) + 1} años`)


})



