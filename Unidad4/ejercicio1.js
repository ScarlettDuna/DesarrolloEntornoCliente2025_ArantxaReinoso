// (Objetos: creación, recorrido y propiedades) Vamos a simular un objeto llamado
// “alumno” con las siguientes propiedades:
let alumno = {
    edad: 18,
    admin: false,
    stats: {
        posts: 0,
        followers: 0
    }
}
// Todos los apartados que pidan mostrar un resultado será en un párrafo de la página con id “output”.
let parrafoOutput = document.getElementById('output') 
// Incrementa el número de posts en 2 y de followers en 3.
alumno.stats.posts += 2;
alumno.stats.followers += 3;
// Cambia el permiso de administrador a “true” y muestra el resultado en el párrafo.
alumno.admin = true;
parrafoOutput.innerText +=  `alumno.admin -> ${alumno.admin}\n` 
// Quita la propiedad de administrador.
delete alumno.admin;

function mostrarObjeto(objeto){
    for (let item in objeto){
        parrafoOutput.innerText += `${objeto[item]}\n`
    }
}
mostrarObjeto(alumno)