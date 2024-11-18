function aparecer(){
  const menu = document.getElementById("lat")
  menu.classList.toggle("aparecer")
}


const readMoreButtons = document.querySelectorAll('.button');
console.log('Zafalon Lindão e Sofia TBM');

readMoreButtons.forEach((button) => {
  button.addEventListener('click', function() {
    const listId = this.getAttribute('data-target');
    const textContent = document.getElementById(listId);

    textContent.classList.toggle('hidden');
    textContent.classList.toggle('visible');

    this.textContent = textContent.classList.contains('hidden')
      ? 'Abrir'
      : 'Fechar';
  });
});


// CORES DE VIADO
/*
function CoresAletor() {
  const letras = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

function MudarCores() {
  const elements = document.querySelectorAll('.credit *:not(style)');
  
  elements.forEach(element => {
      element.style.color = CoresAletor();
  });
}

setInterval(MudarCores, 275);
*/

