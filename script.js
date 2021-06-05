const textInput = document.getElementById('text-input');
const memeSubtitle = document.getElementById('meme-text');

const imageSubtitle = () => {
  textInput.addEventListener('keyup', () => {
    const inputValue = textInput.value;
    memeSubtitle.textContent = inputValue;
  });
};
imageSubtitle();
