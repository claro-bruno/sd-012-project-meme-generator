let inputText = document.getElementById('text-input');
let containerImagem = document.getElementById('meme-image-container');
let memeTexto = document.getElementById('meme-text');
containerImagem.appendChild(memeTexto);

function AddText() {  
  memeTexto.innerHTML = inputText.value;  
}

inputText.addEventListener('keyup', AddText);

