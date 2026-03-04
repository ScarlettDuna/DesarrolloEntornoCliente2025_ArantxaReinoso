let lista = document.getElementById('lista')

lista.addEventListener('click', (e) => {
  if (e.type = 'dblclick') {
      console.log('Doble click en ' + e.target.tagName);
      if (e.target.tagName === "li") {
      // Doble click - cambia el color de fondo del “li” afectado a “verde claro”.
      e.target.style.backgroundColor = 'lightgreen'; 
      }
    }
  

  
    if (e.target.tagName === "li") {
      console.log(e.target.tagName)
      // Click - cambia el color del “li” afectado a azul.
      e.target.style.color = "blue";
    }
    
    e.stopPropagation();

})
