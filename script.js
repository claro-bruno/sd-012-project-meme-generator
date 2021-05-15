const catchImageInput = document.getElementById('meme-insert');
const catchImage = document.getElementById('meme-image');
const catchTextInput = document.getElementById('text-input');
const catchLegendElement = document.getElementById('meme-text');

//Imprime na tela a legenda capturada no input
catchTextInput.addEventListener('keyup', function(event) {
  catchLegendElement.innerHTML = event.target.value;
});

//Captura a imagem selecionada e imprime na tela. Solução retirada do repositório do meu colega de trybe Roberval Filho https://github.com/tryber/sd-012-project-meme-generator/pull/17/commits/5484e6475995ed356ddbd4ad2f1f86f3ad6c880c
catchImageInput.addEventListener('change', function(event) {
  catchImage.src = URL.createObjectURL(event.target.files[0]);
  catchImage.onload = function() {
    URL.revokeObjectURL(event);
  }
})

