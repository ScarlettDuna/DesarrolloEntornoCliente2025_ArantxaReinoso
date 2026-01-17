function mediaNotas(...notas) {
    let media = 0;
    let contador = 0;
    for (let nota of notas){
        if (typeof nota === 'number') {
            media += nota; 
            contador ++;
        }
    }
    if (contador === 0) return 0;
    return media/contador;
}

console.log(mediaNotas(1,5, 'o', 5, 1))