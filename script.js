const inputImage = document.querySelector('#meme-insert');
const imagem = document.querySelector('#meme-image');

// Ideia from https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977

function adicionandoImagemNoContainer() {
  inputImage.addEventListener('change', (event) => {
    imagem.src = URL.createObjectURL(event.target.files[0]);
    imagem.onload = () => {
      URL.revokeObjectURL(imagem.src);
    };
  });
}

adicionandoImagemNoContainer();
