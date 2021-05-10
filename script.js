const memeTextplace = document.getElementById('meme-text');
const inputText = document.getElementById('text-input');

// Pegar texto digitado para a seção de criação de meme.
function getText() {
  memeTextplace.innerText = inputText.value;
}

inputText.addEventListener('keyup', getText);
