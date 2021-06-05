const textInput = document.getElementById('text-input');
const memeSubtitle = document.getElementById('meme-text');
const imageInput = document.getElementById('meme-insert');

const imageSubtitle = () => {
  textInput.addEventListener('keyup', () => {
    const inputValue = textInput.value;
    memeSubtitle.textContent = inputValue;
  });
};
imageSubtitle();

const imgBackground = () => {
  imageInput.addEventListener('change', (evt) => {
    const imageOutput = document.getElementById('meme-image');
    const imageAsURL = URL.createObjectURL(evt.target.files[0]);
    imageOutput.style.backgroundImage = `url(${imageAsURL})`;
  });
};
imgBackground();
