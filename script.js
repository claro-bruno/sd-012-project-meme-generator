const textInput = document.querySelector('#text-input');
const memeImageContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
// Faz valor inserido no input aparecer na imagem
textInput.addEventListener('keyup', () => {
  memeText.innerText = textInput.value;
});
