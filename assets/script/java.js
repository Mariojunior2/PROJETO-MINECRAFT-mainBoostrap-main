function aparecer(){
  const menu = document.getElementById("lat")
  menu.classList.toggle("aparecer")
}


const readMoreButtons = document.querySelectorAll('.button');

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





