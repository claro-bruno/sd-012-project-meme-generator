const inputText = document.getElementById('text-input');
const containerImagem = document.getElementById('meme-image-container');
const memeTexto = document.getElementById('meme-text');
// containerImagem.appendChild(memeTexto);
const btnInsert = document.getElementById('meme-insert"');
// btnInsert.innerHTML = 'Choose File';

function AddText() {
  memeTexto.innerHTML = inputText.value;
}

inputText.addEventListener('keyup', AddText);

let imagem = document.getElementById('meme-image');

let loadImage = function (event) {
  imagem.src = URL.createObjectURL(event.target.files[0]);  
}


