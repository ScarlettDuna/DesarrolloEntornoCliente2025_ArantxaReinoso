// Ejercicio 1
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

function mostrarObjeto(objeto, parrafo){
    for (let key in objeto){
        if (typeof objeto[key] == 'object') {
            parrafo.innerText += `Propiedad "${key}" es un objeto: \n`;
            for (let subKey in objeto[key]){
                parrafo.innerText += `${subKey}: ${objeto[key][subKey]} \n`
            }
        } else {
            parrafo.innerText += `${key}: ${objeto[key]}\n`
        }
        
    }
}
mostrarObjeto(alumno, parrafoOutput)

/* Object.assign(dest, ...sources) - copia las propiedades de todos los objetos fuentes dentro del destino dest y lo devuelve como resultado
structuredClone(object) - clona el object con todas sus propiedadas anidadas. */
// Ejercicio 2
let parrafoOutput2 = document.getElementById('output2') 
let clonAlumno = structuredClone(alumno)
clonAlumno.stats.posts += 1
parrafoOutput2.innerText += `Objeto Alumno\n`
mostrarObjeto(alumno, parrafoOutput2)
parrafoOutput2.innerText += `Objeto clon de Alumno modificado\n`;
mostrarObjeto(clonAlumno, parrafoOutput2)

// Ejercicio 3
alumno.incrementarStats = function (tipo, n) {
    if (typeof n === "number" && this.stats?.[tipo]){
        return this.stats[tipo] += n
    }
    
}
alumno.incrementarStats('followers', 15)
console.log(alumno.stats.followers)
let parrafoOutput3 = document.getElementById('output3')
mostrarObjeto(alumno, parrafoOutput3)

/* Ejercicio 4: (Objetos: función con new) El objeto “alumno” en este punto contiene 3
propiedades y un método. Convierte el objeto a una función llamada “classAlumno”
que se pueda instanciar con new. Comprueba si el resto del código sigue funcionando. 
function User(name) {
  this.name = name;
  this.isAdmin = false;
}*/
function Alumno(edad, posts, followers) {
    this.edad = edad,
    this.admin = false,
    this.stats = {
        followers : followers,
        post : posts
    }
    this.incrementarStats = function (tipo, n) {
        if (typeof n === "number" && this.stats?.[tipo]){
        return this.stats[tipo] += n
        }
    }
}
let alumnoObjeto1 = new Alumno(34, 3, 7);
console.log(alumnoObjeto1)
let parrafoOutput4 = document.getElementById('output4')
mostrarObjeto(alumnoObjeto1, parrafoOutput4)
