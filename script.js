
let userText = document.getElementById('text-input');
let imageTextDiv = document.getElementById('meme-image-container');
let textDiv = document.getElementById('meme-text');
let userImage = document.getElementById('meme-insert');
let showImage = document.getElementById('show-image');




userText.addEventListener('keyup', function(){ //adiciona texto
  if (userText) {      
    textDiv.innerHTML = userText.value;    
  }
})



userImage.addEventListener('change', function(event){
  showImage.src = URL.createObjectURL(event.target.files[0]);
  })







