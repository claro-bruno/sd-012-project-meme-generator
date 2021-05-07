const CarregarArquivo = (event) => {
  const image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
}

function digitarTextoMeme() {
  const getInput = document.getElementById('text-input');
  const getText = document.getElementById('meme-text');
  getInput.addEventListener('keyup', () => {
    getText.innerHTML = getInput.value;
  })
}

window.onload = () => {
  digitarTextoMeme();
}