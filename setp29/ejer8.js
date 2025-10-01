let valor = Number(prompt("Introduce un número entre el 1 y el 5."));
if (isNaN(valor)) {
    alert("Error: Valor no admitido!")
} else {
    switch (valor) {
    case 1:
    alert("One")    
    break;
    case 2:
    alert("Two")
    break;
    case 3:
    alert("Three")
    break;
    case 4:
    alert("Four")
    break;
    case 5:
    alert("Five")
    break;
    default:
        alert("Error: Valor no admitido!")
        break;
}
}
