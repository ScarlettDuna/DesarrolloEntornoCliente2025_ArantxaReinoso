let mapClasificacion = new Map()
mapClasificacion.set("At. de Madrid", 65)
mapClasificacion.set("Celta de Vigo", 63)
mapClasificacion.set("At. de Bilbao", 50)
mapClasificacion.set("Rayo Vallecano", 41)
mapClasificacion.set("Valencia", 34)
// Se seleciona el div donde se van a mostrar los resultados
let output = document.getElementById('output')
// Se recorre el map y se usa destructuración para llegar a la clave y el valor de cada entrada
for (let [clave, valor] of mapClasificacion.entries()){
    output.innerHTML += `<p>${clave} - Puntos: ${valor}</p>`
}
// Se seleciona el otro div donde se van a mostrar los resultados
let output2 = document.getElementById('output2')
// Se crea un Array con los equipos de fútbol y se hace un filter para quedarse solo con los que tienen menos de 42 puntos
let descenso = Array.from(mapClasificacion.keys()).filter(item => {
    if (mapClasificacion.get(item) < 42) return item
})
// Se muestra en el div de salida el array de descenso
output.innerHTML += `<h3>Equipos en descensos: </h3>${descenso}`

// Se calcula la media de las puntuaciones de los equipos usando reduce()
// Para ello primero se hace un array solo con las puntuaciones.
let puntuaciones = Array.from(mapClasificacion.values())
let media = puntuaciones.reduce((a, b) => a + b / puntuaciones.length, 0).toFixed(2)
console.log(media)