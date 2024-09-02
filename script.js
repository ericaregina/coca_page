// Seleciona o link pelo ID
const exploreLink = document.getElementById('explore-link');

// Define a URL para onde o link deve redirecionar
const cocaColaURL = 'https://www.coca-cola.com.br'; 
// Adiciona um evento de clique ao link
exploreLink.addEventListener('click', (event) => {
  event.preventDefault(); 
  window.location.href = cocaColaURL;
});
