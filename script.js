
let userText = document.getElementById('text-input');
let imageTextDiv = document.getElementById('meme-image-container');
let textDiv = document.getElementById('meme-text');
let userImage = document.getElementById('meme-insert');
let showImage = document.getElementById('meme-image');
let fire = document.getElementById('fire');
let water = document.getElementById('water');
let meme1 = document.getElementById('meme-1');
let meme2 = document.getElementById('meme-2');
let meme3 = document.getElementById('meme-3');
let meme4 = document.getElementById('meme-4');






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

meme1.addEventListener('click', function(){
  showImage.src = "imgs/meme1.png";
})

meme2.addEventListener('click', function(){
  showImage.src = "imgs/meme2.png";
})

meme3.addEventListener('click', function(){
  showImage.src = "imgs/meme3.png";
})

meme4.addEventListener('click', function(){
  showImage.src = "imgs/meme4.png";
})







