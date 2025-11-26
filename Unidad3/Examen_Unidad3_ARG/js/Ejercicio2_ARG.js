let boton = document.querySelector('button')
boton.addEventListener('click', () => {
    let input = document.querySelector('input').value
    let numGuiones = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '-') {
            numGuiones ++
        }
    }

    if (numGuiones !== 2) {
        alert("Error: La fecha debe contener guiones ('-') y formato DD-MM-AAAA")
        return;
    }
    let fecha = input.split('-');
    for (let item of fecha) {
        item = parseInt(item)
        if (isNaN(item)) {
            alert("Error: Día, mes y año deben ser valores númericos");
            return;
        }
    }
    let fechaNacimiento = new Date(fecha[2], fecha[1] - 1, fecha[0])

    let hoy = new Date();
    let edad = (hoy.getTime() - fechaNacimiento.getTime()) / (1000*60*60*24*365)
    
    /*El objetivo es almacenar la edad máxima introducida. Cada vez que se calcula una edad, se
    comprueba si el valor actual es mayor que el último almacenado en localStorage. En caso
    afirmativo se actualiza localStorage con la edad mayor y también una cookie con este mismo valor
    y duración de 7 días. */
    let edadMaxima = Number(localStorage.getItem('edadMaxima')) || Math.floor(edad);
    alert(`
        - Edad con decimales: ${edad.toFixed(2)} años\n
        - Edad actual: ${Math.floor(edad)} años\n
        - Edad el próximo año: ${Math.floor(edad) + 1} años\n
        - Edad máxima introducida: ${edadMaxima}`);
    let edadGuardar = Math.floor(edad) >= edadMaxima ? Math.floor(edad) : edadMaxima
    localStorage.setItem('edadMaxima', edadGuardar)

    let fechaExp = new Date()
    fechaExp.setTime(fechaExp.getTime() + 7*24*60*60*1000) // 7 días
    document.cookie = `edadMaxima=${encodeURIComponent(edadGuardar)};expires=${fechaExp.toUTCString()};path=/`

})



