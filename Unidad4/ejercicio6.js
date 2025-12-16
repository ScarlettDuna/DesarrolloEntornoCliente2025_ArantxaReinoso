let frutas = ["manzana", "pera", "plátano"];
let output = document.querySelector('.output')
// Reemplaza el segundo elemento por "sandía". Muestra el array
frutas.splice(1, 1, 'sandía')
output.innerHTML += `<p>${frutas}</p>`;
// Crea una copia de las frutas desde la posición 1 hasta la 3 (sin incluir 3). Muestra el array con la copia
let copiaFrutas = frutas.slice(1, 3)
output.innerHTML += `<p>${copiaFrutas}</p>`;
// Crea un nuevo array concatenando la lista actual conlos elementos uvas y mango. Muestra el nuevo array
let masFrutas = frutas.concat('uva', 'mango')
output.innerHTML += `<p>${masFrutas}</p>`;
// Busca el índice de "sandía" en el array original y muestra el resultado.
output.innerHTML += `<p>Indice de 'Sandía': ${frutas.indexOf('sandía')}</p>`;
// Muestra si el array contien "pera"
output.innerHTML +=`<p>El array contiene 'pera': ${frutas.includes('pera')}</p>`;
// Crea un array con todas las frutas que empiecen con la letra 'm' y puestra elresultado
output.innerHTML += `<p>Frutas que empiezan por 'm': ${frutas.find(item => item.startsWith('m'))}</p>`;
// Muestra el índice de la primera fruta que tenga la letra 'a'.
output.innerHTML += `<p>Primera fruta que empieza por 'a': ${frutas.findIndex(item => item.startsWith('a'))}</p>`;