const toggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const music = document.getElementById('bg-music');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

function toggleTheme() {
  document.body.classList.toggle('dark');
}

function toggleLanguage() {
  alert('Função de mudança de idioma ainda não implementada.');
}

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

let currentImg = 0;

function showImage(index) {
  const images = document.querySelectorAll('.carousel-img');
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function prevImage() {
  const images = document.querySelectorAll('.carousel-img');
  currentImg = (currentImg - 1 + images.length) % images.length;
  showImage(currentImg);
}

function nextImage() {
  const images = document.querySelectorAll('.carousel-img');
  currentImg = (currentImg + 1) % images.length;
  showImage(currentImg);
}


const texts = {
  pt: {
    about: "Sobre Mim",
    diciplina: "Fatec Jacareí – Desenvolvimento de Software Multiplataforma",
    descricao: "Estudante da Fatec Jacareí no segundo semestre de DSM (...)",
    fatecprojects: "Projetos Fatec",
    personalprojects: "Projetos Pessoais",
    tools: "Ferramentas Utilizadas",
    certificados: "Certificados"
  },
  en: {
    about: "About Me",
    diciplina:"Fatec Jacareí - Multiplatform software development",
    descricao: "Student at Fatec Jacareí in the second semester of Software Development (...)",
    fatecprojects: "Fatec Projects",
    personalprojects: "Personal Projects",
    tools: "Tools Used",
    certificados: "Certificates"
  }
};

let currentLang = 'pt';

function toggleLanguage() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  updateTexts();
}

function updateTexts() {
  document.getElementById('about').textContent = texts[currentLang].about;
  document.getElementById('diciplina').textContent = texts[currentLang].diciplina;
  document.getElementById('descricao').textContent = texts[currentLang].descricao;
  document.getElementById('fatecprojects').textContent = texts[currentLang].fatecprojects;
  document.getElementById('personalprojects').textContent = texts[currentLang].personalprojects;
  document.getElementById('tools').textContent = texts[currentLang].tools;
  document.getElementById('certificados').textContent = texts[currentLang].certificados;
}
