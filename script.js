const file = document.querySelector('#meme-insert');

function loadFile (event) {
  const image = document.querySelector('#meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
}
file.addEventListener('change', loadFile);
