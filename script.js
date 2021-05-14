const inputText = document.getElementById('text-input');
const memeTexto = document.getElementById('meme-text');

function AddText() {
  memeTexto.innerHTML = inputText.value;
}

inputText.addEventListener('keyup', AddText);

const imagem = document.getElementById('meme-image');

const loadImage = function (event) {
  imagem.src = URL.createObjectURL(event.target.files[0]);
};

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

const memesReadys = document.getElementById('memes-readys');

function memeChoice() {
  for (let index = 0; index < memesReadys.childElementCount * 2; index += 1) {
    memesReadys.childNodes[index].addEventListener('click', function (event) {
      imagem.src = event.target.src;
      console.log(memesReadys.childElementCount);
    });
  }  
}

memeChoice();

// function memeChoice() {
//   for (let index =0; index < memesReadys.childElementCount; index +=1) {
//     memeContainer.src = memesReadys.childNodes[index].src;
//   }  
// }

// memesReadys.addEventListener('click', memeChoice);
