function aparecer(){
  const menu = document.getElementById("lat")
  menu.classList.toggle("aparecer")
}


const readMoreButtons = document.querySelectorAll(".button");

readMoreButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const articleSection = e.target.parentNode;
    const textContent = articleSection.querySelector(".list");
    textContent.classList.toggle("hidden");
    textContent.classList.toggle("visible");
    
    e.target.textContent = textContent.classList.contains("hidden")
      ? "Saiba Mais"
      : "Fechar";
  });
});

