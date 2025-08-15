'use strict'

const gImgs = [
  {
    id: 1, 
    url: 'img/1.jpg', 
    keyWords: [
      'politician', 
      'speech', 
      'microphone', 
      'suit', 
      'red tie', 
      'flag', 
      'public speaking', 
      'blurred face', 
      'gesture', 
      'authority', 
      'leadership'
    ] 
  },
  {
    id: 2, 
    url: 'img/2.jpg', 
    keyWords: [
      'puppies', 
      'cute', 
      'dogs', 
      'licking', 
      'playful', 
      'outdoors', 
      'animals', 
      'companionship', 
      'puppy love', 
      'adorable'
    ] 
  },
  {
    id: 3, 
    url: 'img/3.jpg', 
    keyWords: [
      'baby', 
      'puppy', 
      'blanket', 
      'sleeping', 
      'cozy', 
      'adorable', 
      'peaceful', 
      'companionship', 
      'soft', 
      'cute'
    ] 
  },
  {
    id: 4, 
    url: 'img/4.jpg', 
    keyWords: [
      'cat', 
      'tabby', 
      'sleeping', 
      'laptop', 
      'keyboard', 
      'resting', 
      'cute', 
      'cozy', 
      'pet', 
      'technology'
    ] 
  },
  {
    id: 5, 
    url: 'img/5.jpg', 
    keyWords: [
      'child', 
      'beach', 
      'sand', 
      'ocean', 
      'green shirt', 
      'fistful of sand', 
      'determined', 
      'outdoors', 
      'popular meme', 
      'success kid'
    ] 
  },
  {
    id: 6, 
    url: 'img/6.jpg', 
    keyWords: [
      'person', 
      'suit', 
      'tie', 
      'gesture', 
      'indoors', 
      'warm lighting', 
      'blurred face', 
      'history channel', 
      'logo', 
      'presentation'
    ] 
  },
  {
    id: 7, 
    url: 'img/7.jpg', 
    keyWords: [
      'baby', 
      'striped shirt', 
      'blurred face', 
      'holding', 
      'black surface', 
      'indoors', 
      'soft focus', 
      'child', 
      'infant', 
      'close-up'
    ] 
  },
  {
    id: 8, 
    url: 'img/8.jpg', 
    keyWords: [
      'top hat', 
      'purple jacket', 
      'velvet', 
      'bow tie', 
      'costume', 
      'blurred face', 
      'character', 
      'fancy outfit', 
      'classic look', 
      'themed attire'
    ] 
  },
  {
    id: 9, 
    url: 'img/9.jpg', 
    keyWords: [
      'child', 
      'plaid shirt', 
      'red and white', 
      'sitting', 
      'grass', 
      'outdoors', 
      'nature', 
      'lake', 
      'greenery', 
      'blurred face'
    ] 
  },
  {
    id: 10, 
    url: 'img/10.jpg', 
    keyWords: [
      'Barack Obama', 
      'laughing', 
      'politician', 
      'smile', 
      'public figure', 
      'humor', 
      'expression', 
      'close-up', 
      'leader', 
      'charisma'
    ] 
  },
  {
    id: 11, 
    url: 'img/11.jpg', 
    keyWords: [
      'basketball', 
      'players', 
      'yellow jersey', 
      'green jersey', 
      'headband', 
      'sports', 
      'team', 
      'action', 
      'blurred faces', 
      'competition',
      'fight'
    ] 
  },
  {
    id: 12, 
    url: 'img/12.jpg', 
    keyWords: [
      'person', 
      'grey shirt', 
      'pointing', 
      'blurred face', 
      'gesture', 
      'indoor', 
      'background shapes', 
      'casual', 
      'hands', 
      'focus'
    ] 
  },
  {
    id: 13, 
    url: 'img/13.jpg', 
    keyWords: [
      'tuxedo', 
      'formal attire', 
      'champagne', 
      'celebration', 
      'toast', 
      'elegant', 
      'blurred face', 
      'lights', 
      'event', 
      'black tie'
    ] 
  },
  {
    id: 14, 
    url: 'img/14.jpg', 
    keyWords: [
      'Morpheus', 
      'Matrix', 
      'sci-fi', 
      'sunglasses', 
      'bald', 
      'movie character', 
      'cyberpunk', 
      'action', 
      'iconic', 
      'film'
    ] 
  },
  {
    id: 15, 
    url: 'img/15.jpg', 
    keyWords: [
      'person', 
      'long hair', 
      'dark jacket', 
      'blurred face', 
      'peace sign', 
      'gesture', 
      'portrait', 
      'casual', 
      'indoor', 
      'style'
    ] 
  },
  {
    id: 16, 
    url: 'img/16.jpg', 
    keyWords: [
      'sci-fi', 
      'spaceship', 
      'uniform', 
      'red and black', 
      'insignia', 
      'futuristic', 
      'blurred face', 
      'space setting', 
      'character', 
      'technology'
    ] 
  },
  {
    id: 17, 
    url: 'img/17.jpg', 
    keyWords: [
      'person', 
      'suit', 
      'red tie', 
      'microphone', 
      'gesture', 
      'blurred face', 
      'public speaking', 
      'two fingers', 
      'formal', 
      'presentation',
      'putin'
    ] 
  },
  {
    id: 18, 
    url: 'img/18.jpg', 
    keyWords: [
      'Toy Story', 
      'Woody', 
      'Buzz Lightyear', 
      'animated movie', 
      'cowboy', 
      'astronaut', 
      'Pixar', 
      'characters', 
      'classic animation', 
      'childhood'
    ] 
  }
  ]

function filteredImgs(imgs) {
  return imgs.filter((img) =>
    img.keyWords.some((keyword) =>
      keyword.toLowerCase().includes(gFilter.toLowerCase())
    )
  )
}

function showGallery() {
  resetMeme() 

  const sections = document.querySelectorAll('section')
  sections.forEach(section => section.classList.remove('active'))

  const gallerySection = document.querySelector('.gallery')
  gallerySection.classList.add('active')
}



function closeModal(){
    document.querySelector('dialog').close()
}
function resetMeme() {
  gMeme.selectedImgId = null
  gMeme.selectedLineIdx = 0
  gMeme.lines = [
    {
      txt: '',
      size: 40,
      color: 'white',
      stroke: 'black',
      x: elCanvas.width / 2,
      y: 50,
      align: 'center',
    },
  ]
  clearCanvas()
  clearTxtInput()
}
