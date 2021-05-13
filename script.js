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

const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');

function fireEffect() {
  memeContainer.style.border = '3px dashed red';
}

btnFire.addEventListener('click', fireEffect);

function waterEffect() {
  memeContainer.style.border = '5px double blue';
}

btnWater.addEventListener('click', waterEffect);

function earthEffect() {
  memeContainer.style.border = '6px groove green';
}

btnEarth.addEventListener('click', earthEffect);