const content = document.createElement('div')
content.className = 'content'
document.body.appendChild(content)

const textContainer = document.createElement('div')
textContainer.className = 'text-container'

content.appendChild(textContainer)

const labelText = document.createElement('label')
labelText.htmlFor = 'text-input'

const inputText = document.createElement('input')
inputText.id = 'text-input'

textContainer.appendChild(labelText)
textContainer.appendChild(inputText)

const memeImageContainer = document.createElement('div')
memeImageContainer.id = 'meme-image-container'

content.appendChild(memeImageContainer)

const memeText = document.createElement('div')
memeText.id = 'meme-text'

memeImageContainer.appendChild(memeText)

function insertMemeText(event) {
  memeText.innerHTML = event.target.value
}

inputText.addEventListener('input', insertMemeText)
