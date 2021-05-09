const imageInput = document.getElementById('meme-insert');
const img = document.getElementById('meme-image');

function getText() {
  const textInput = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');

  textInput.addEventListener('keyup', (event) => {
    memeText.innerHTML = event.target.value;
  });
}

function getImage() {
  imageInput.addEventListener('change', (event) => {
    img.src = URL.createObjectURL(event.target.files[0]);
    img.onload = () => {
      URL.revokeObjectURL(event.target.files[0]);
    };
  });
}

getText();
getImage();
