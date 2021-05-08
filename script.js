const file = document.querySelector('#meme-insert');
function loadFile(event) {
  const image = document.querySelector('#meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
}
file.addEventListener('change', loadFile);

const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
function insertText() {
  memeText.innerText = textInput.value;
}
textInput.addEventListener('keyup', insertText);

const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');
const container = document.querySelector('#meme-image-container');
btnFire.addEventListener('click', () => {
  container.style.border = '3px dashed red';
});
btnWater.addEventListener('click', () => {
  container.style.border = '5px double blue';
});
btnEarth.addEventListener('click', () => {
  container.style.border = '6px groove green';
});
