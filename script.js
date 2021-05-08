const inputText = document.querySelector('#text-input');
const container = document.querySelector('#meme-image-container');
const textImage = document.querySelector('#meme-text');
const fileSelector = document.querySelector('#meme-insert');
const imageDisplay = document.querySelector('#meme-image');
const allButtons = document.querySelectorAll('button');
const memeUm = document.querySelector('#meme-1');
const memeDois = document.querySelector('#meme-2');
const memeTres = document.querySelector('#meme-3');
const memeQuatro = document.querySelector('#meme-4');

inputText.addEventListener('keyup', (event) => {
  textImage.innerHTML = event.target.value;
});

fileSelector.addEventListener('change', (event) => {
  imageDisplay.src = URL.createObjectURL(event.target.files[0]);
});

function differentBorders() {
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', (event) => {
      container.classList = event.target.innerHTML.toLowerCase();
    });
  }
}

differentBorders();

document.addEventListener('click', (event) => {
  if (event.target === memeUm || event.target === memeDois
    || event.target === memeTres || event.target === memeQuatro) {
    imageDisplay.src = event.target.src;
  }
});
