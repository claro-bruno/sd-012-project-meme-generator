const getElementById = (element) => document.getElementById(element);

const inputMemeText = getElementById('text-input');

const inputText = () => {
  const textOfMeme = getElementById('meme-text');
  textOfMeme.innerText = inputMemeText.value;
};

inputMemeText.addEventListener('keyup', inputText);
