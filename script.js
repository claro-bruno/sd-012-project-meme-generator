const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImg = document.getElementById('meme-image');
const memeSection = document.getElementById('meme-image-container');
const imgInput = document.getElementById('meme-insert');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const templates = document.getElementById('templates');

function addText() {
  memeText.innerHTML = textInput.value;
}

function displayImg(event) {
  memeImg.src = URL.createObjectURL(event.target.files[0]); // do artigo https://www.webtrickshome.com/faq/how-to-display-uploaded-image-in-html-using-javascript
}

function changeBorder(button) {
  if (button.target.id === 'fire') {
    memeSection.style.border = 'dashed 3px rgb(255, 0, 0)';
  } else if (button.target.id === 'water') {
    memeSection.style.border = 'double 5px rgb(0, 0, 255)';
  } else if (button.target.id === 'earth') {
    memeSection.style.border = 'groove 6px rgb(0, 128, 0)';
  }
}

function displayTemplate(event) {
  if (event.target.id !== 'templates') {
    memeImg.src = event.target.src;
  }
}

textInput.addEventListener('keyup', addText);
imgInput.addEventListener('change', displayImg);
fireButton.addEventListener('click', changeBorder);
waterButton.addEventListener('click', changeBorder);
earthButton.addEventListener('click', changeBorder);
templates.addEventListener('click', displayTemplate);
