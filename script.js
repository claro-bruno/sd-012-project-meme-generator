
let userText = document.getElementById('text-input');
let imageTextDiv = document.getElementById('meme-image-container');
let textDiv = document.getElementById('meme-text');




userText.addEventListener('keyup', function(){
  if (userText != null) {      
    textDiv.innerHTML = userText.value;    
  }
})


