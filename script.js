const memeTextplace = document.getElementById('meme-text');
const inputText = document.getElementById('text-input');
const memeImgplace = document.getElementById('meme-image');
const inputImg = document.getElementById('meme-insert');
const marginChangers = document.getElementById('marginsBtns');
const memeContainer = document.getElementById('meme-image-container');
const miniPlace = document.getElementById('miniatures');

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

// Mudar margens
function changeMargin(event) {
  if (event.target.tagName !== 'SECTION') {
    switch (event.target.id) {
    case 'fire':
      memeContainer.style.border = '3px dashed red';
      break;
    case 'water':
      memeContainer.style.border = '5px double blue';
      break;
    case 'earth':
      memeContainer.style.border = '6px groove green';
      break;
    default:
      break;
    }
  }
}

marginChangers.addEventListener('click', changeMargin);

// Cria imagens pequenas abaixo como opção de seleção
function geraImagens() {
  for (let index = 1; index <= 4; index += 1) {
    const miniImg = document.createElement('img');
    miniImg.src = `/imgs/meme${index}.png`;
    miniImg.className = 'mini';
    miniImg.id = `meme-${index}`;
    console.log(miniImg);
    miniPlace.appendChild(miniImg);
  }
}

window.onload = geraImagens;

// Colocar a miniatura selecionada e colocar em exibição
function getMini(event) {
  if (event.target.tagName !== 'SECTION') {
    memeImgplace.src = event.target.src;
  }
}

miniPlace.addEventListener('click', getMini);
