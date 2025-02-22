// Função para abrir e fechar o menu hamburguer
function toggleMenu() {
    var menuItems = document.getElementById("menu-items");
    menuItems.style.display = (menuItems.style.display === "block") ? "none" : "block";
  }
  
  // Função para ligar/desligar a música
  function toggleMusic() {
    var musica = document.getElementById("musicaFundo");
    if (musica.paused) {
      musica.play();
    } else {
      musica.pause();
    }
  }
  
  // Função para ativar/desativar o som (mute/unmute)
  function toggleMute() {
    var musica = document.getElementById("musicaFundo");
    musica.muted = !musica.muted;  // Alterna entre mutar e desmutar
  }
  
  // Função para trocar a música
  function changeMusic(newMusic) {
    var musica = document.getElementById("musicaFundo");
    var source = document.getElementById("sourceMusica");
  
    // Altera a fonte da música
    source.src = newMusic;
  
    // Carrega a nova música e toca
    musica.load();  // Carrega a nova música
    musica.play();  // Toca a nova música
  }
  
  // Função para mudar o tema
  function changeTheme() {
    var body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
  }
  
  // Função para mudar o idioma (exemplo simples com alertas)
  function changeLanguage(lang) {
    if (lang === 'pt') {
      alert("Idioma alterado para Português");
    } else if (lang === 'en') {
      alert("Language changed to English");
    }
  }
  