let index = 0;

function moverSlide(direction) {
  const slides = document.querySelectorAll(".carousel-images img");
  const totalSlides = slides.length;

  index += direction;

  if (index < 0) {
    index = totalSlides - 1; // Volta para a última imagem
  } else if (index >= totalSlides) {
    index = 0; // Vai para a primeira imagem
  }

  const carouselImages = document.querySelector(".carousel-images");
  carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

// Adicionando eventos de clique diretamente aos botões
document.querySelector(".prev").addEventListener("click", function() {
  moverSlide(-1);
});

document.querySelector(".next").addEventListener("click", function() {
  moverSlide(1);
});
