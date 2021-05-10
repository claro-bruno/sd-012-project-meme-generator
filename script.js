const memeTextplace = document.getElementById('meme-text');
const inputText = document.getElementById('text-input');
const memeImgplace = document.getElementById('meme-image');
const inputImg = document.getElementById('meme-insert');

// Pegar texto digitado para a seção de criação de meme.
function getText() {
  memeTextplace.innerText = inputText.value;
}

inputText.addEventListener('keyup', getText);

// Pegar imagem selecionada e exibir
function getImg(event) {
  memeImgplace.src = URL.createObjectURL(event.target.files[0]);
}

inputImg.onchange = getImg;
