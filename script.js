
let userText = document.getElementById('text-input');
let imageTextDiv = document.getElementById('meme-image-container');
let textDiv = document.getElementById('meme-text');
let userImage = document.getElementById('meme-insert');
let showImage = document.getElementById('show-image');
let fire = document.getElementById('fire');
let water = document.getElementById('water');




userText.addEventListener('keyup', function(){ //adiciona texto
  if (userText) {      
    textDiv.innerHTML = userText.value;    
  }
})



userImage.addEventListener('change', function(event){ //adiciona imagem
  showImage.src = URL.createObjectURL(event.target.files[0]);
  })

fire.addEventListener('click', function(){
  imageTextDiv.style.border= '3px dashed red';  
})

water.addEventListener('click', function(){  
  imageTextDiv.style.border= '5px double blue';  
})

earth.addEventListener('click', function(){  
  imageTextDiv.style.border= '6px groove green';  
})






