let contenedor = document.getElementById("contenedor");
let arrastrable = document.getElementById("arrastrable");
let info = document.getElementById("info");

//TODO Elige el tipo de evento y completa el código
contenedor.addEventListener("mousemove", function(evento) {
  evento.stopPropagation()
     // Dimensiones incluyendo padding y borde
    const ancho = contenedor.offsetWidth;
    const alto = contenedor.offsetHeight;

    // Para obtener la posición relativa a la ventana    
    const coordX = evento.pageX;
    const coordY = evento.pageY;

    // Posición del cursor dentro del contenedor
    const cursorX = evento.offsetX;
    const cursorY = evento.offsetY;

    info.textContent = `Dimensiones: ${ancho}px x ${alto}px, 
      Posición del contenedor: (${Math.round(coordX)}, ${Math.round(coordY)}), 
      Posición del cursor dentro: (${Math.round(cursorX)}, ${Math.round(cursorY)})`;
});
contenedor.addEventListener("mouseout", () => {
  info.textContent = ``;
})

//TODO Completar el evento para arrastrar y soltar
contenedor.addEventListener("dragover", function(evento) {
  evento.preventDefault();
});

contenedor.addEventListener("drop", function(evento) {
  evento.preventDefault();
  contenedor.append(arrastrable)
  
});
