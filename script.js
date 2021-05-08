const inputText = document.querySelector('#text-input');
const container = document.querySelector('#meme-image-container');
const textImage = document.querySelector('#meme-text');
const fileSelector = document.querySelector('#meme-insert');
const imageDisplay = document.querySelector('#meme-image');
const allButtons = document.querySelectorAll('button');

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
