const catchTextInput = document.getElementById('text-input');
const catchLegendElement = document.getElementById('meme-text');

catchTextInput.addEventListener('keyup', function(event) {
  catchLegendElement.innerHTML = event.target.value;
});
