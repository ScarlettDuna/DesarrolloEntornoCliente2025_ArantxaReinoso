let id = Symbol('id');
let producto = {
    [id]: 'Valor secreto 580',
    name: 'mi objeto 1'
}
let producto2 = structuredClone(producto)
producto2.id = 'Valor secreto 343'
producto2.name = 'mi objeto 2';
console.log(`Producto: ${producto.id}, Producto clonado: ${producto2.id}`)
