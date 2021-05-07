function addTextMeme() {
  const textInput = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  textInput.addEventListener('keyup', (event) => {
    memeText.innerHTML = event.target.value;
  });
}
window.onload = () => {
  addTextMeme();
};

function addImageMeme() {
  const imageInput = document.getElementById('meme-insert');
  const imageOutput = document.getElementById('meme-image');
  imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend =  () => {
      imageOutput.src = fileReader.result;
    };
    fileReader.readAsDataURL(file);
  });
}
addImageMeme();
