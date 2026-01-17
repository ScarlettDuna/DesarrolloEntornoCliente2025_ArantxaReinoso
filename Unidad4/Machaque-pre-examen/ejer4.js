let myArray = ["HTML", "CSS", "JS", "React", "Node"];
// Haz un array con los que tengan más de tres letras.
let mas3Letras = myArray.filter(item => item.length > 3)
console.log(mas3Letras)
// Otro array con las longitudes
let longitudes = myArray.map(item => item.length)
console.log(longitudes)
// Comprueba si todos contitnen la letra 'S'
let tienenS = myArray.every(item => item.toLowerCase().includes('s'));
console.log(tienenS)
// Buscal el primer elemento que empiece por 'J'
let conJ = myArray[myArray.findIndex(item => item[0] === 'J')]
// Otra opción let conJ = myArray.find(item => item.startsWith('J'));
console.log(conJ)