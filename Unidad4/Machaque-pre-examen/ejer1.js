let usuario = {
    nombre: 'Anchan',
    edad: 34,
    activo: false
}
// Muestra todas las propiedades usando Object.entries
for (const [key, valor] of Object.entries(usuario)) {
    console.log(`${key}: ${valor}`)
}
// Cambia activo a true
usuario.activo = true;
// Elimina edad
delete usuario.edad;
console.log(usuario)
// Comprueba si existe la propiedad email usando ?.
console.log(`Email: ${usuario?.email}`)