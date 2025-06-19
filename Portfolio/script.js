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
    descricao: "Estudante da Fatec Jacareí, no Segundo semestre de DSM (Desenvolvimento de software multiplataforma), cuja grade inclui: Algoritmo e lógica de programação, modelagem de Banco de dados, Banco de dados relacional, Estrutura de Dados, engenharia de software, sistemas operacionais e redes, desenvolvimento web e Design Digital. sociável e colaborativo, até mesmo líder de projeto web em trabalho universitário, sempre em busca de resolver problemas de maneira lógica e eficiente, utilizando principalmente Scrum",
    fatecprojects: "Projetos Fatec",
    personalprojects: "Projetos Pessoais",
    tools: "Ferramentas Utilizadas",
    certificados: "Certificados"
  },
  en: {
    about: "About Me",
    diciplina:"Fatec Jacareí - Multiplatform software development",
    descricao: "Student at Fatec Jacareí, in the second semester of DSM (Multiplatform Software Development), whose curriculum includes: Algorithms and programming logic, Database modeling, Relational Database, Data Structures, software engineering, operating systems and networks, web development and Digital Design. Sociable and collaborative, even leading a web project in university work, always seeking to solve problems in a logical and efficient way, mainly using Scrum.",
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
