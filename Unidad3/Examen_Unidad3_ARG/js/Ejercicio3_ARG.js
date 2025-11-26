// Al hacer clic en el botón, se valida si se ha introducido al menos un valor en el input y se realizan
// las siguientes acciones:
let boton = document.getElementById('enviar');
boton.addEventListener('click', () => {
    let domicilio = document.getElementById('domicilio').value.trim();
    let numero = document.getElementById('numero').value.trim();
    let observaciones= document.getElementById('observaciones').value.trim();
    let mensaje = document.querySelector('.mensaje');
    if (domicilio === "" && numero === "" && observaciones === "") {
        mensaje.innerHTML = `<p style="color: red;" >Error: debes introducir al menos un campo de la dirección</p>`;
    }
    // Guardamos cada input en un Array eliminando los espacios en blanco
    let direccion = []
    if (domicilio !== "") {
        direccion.push(domicilio)
    }
    if (numero !== "") {
        direccion.push(numero)
    }
    if (observaciones !== "") {
        direccion.push(observaciones)
    }
    console.log(direccion)
    /* Posteriormente se abre una ventana nueva que contiene tres párrafos. Se
    rellenarán tantos párrafos como valores tenga el array sin emplear el atributo “id” ni
    clases. Por ejemplo, si solo hay un valor el resto se dejan en blanco.*/
    let newWindow = window.open("./Ventana3_ARG.html", "", "width=350,height=500")
    let newWindowBody = ""
    newWindowBody += `<h1>Datos de dirección:</h1>`
    for (let item of direccion) {
        newWindowBody += `<p>${item}</p>` 
    }
    /* En la ventana nueva, después de la carga, se informará a la página
    principal y se mostrará un mensaje debajo de los inputs (en el mismo sitio donde estaba
    el mensaje de error). En este caso el texto tendrá color verde y también se cambiará
    desde JavaScript */
    newWindow.onload = () => {
        console.log("Ventana nueva cargada")
        mensaje.innerHTML = `<p style="color: green;" >Dirección enviada correctamente</p>`;
        newWindow.document.body.insertAdjacentHTML("afterbegin", newWindowBody);
    }


})

