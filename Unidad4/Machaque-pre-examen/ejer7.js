let LeccionesDeQuimica = Symbol('Lecciones de Química')
let ElTiempoEntreCosturas = Symbol('El tiempo entre costuras');
let LaChicaDelVerano = Symbol('La chica del verano');
let misLibros = new Map();
misLibros.set(LeccionesDeQuimica, {autor: 'No me acuerdo', anio: 2021, genero: 'Novela'})
.set(ElTiempoEntreCosturas, {autor: 'María Dueñas', anio: 2009, genero: 'Novela histórica'})
.set(LaChicaDelVerano, {autor: 'La Vecina Rubia', anio: 2023, genero: 'Comedia'})
let misGeneros = new Set()
let librosRecientes = [];
// Recorre el Map con un for...of
for (let [clave, valor] of misLibros){
    console.log(clave.description + ': ' + valor.autor)
    // Extrae los géneros en un Set
    misGeneros.add(valor.genero)
    // Muestra solo los libros posteriores a 2000
    if (valor.anio > 2000) {
        librosRecientes.push(clave.toString())
    }
}
let generosArray = Array.from(misGeneros)
console.log(generosArray)