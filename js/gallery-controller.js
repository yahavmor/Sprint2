'use strict';

function onInit() {
  renderGallery()
  showGallery()
}



function getImgs() {
  return gImgs
}



function onSearch(elInput) {
  gFilter = elInput.value.trim().toLowerCase()
  renderGallery()
}


function renderGallery() {
  const elContainer = document.querySelector('.img-container')
  let imgs = getImgs()
  if (gFilter) imgs = filteredImgs(imgs)
  if (!imgs.length) {
    elContainer.innerHTML = '<p class="no-imgs-to-display">No images found for your search</p>'
    return
  }
  const strHtmls = imgs.map(img =>
    `<img src="${img.url}" class="gallery-img" onclick="onImgSelect(${img.id})" />`
  ).join('')
  elContainer.innerHTML = strHtmls
}

function onCloseModal(){
  closeModal()
}
function onImFlexible() {
  const imgs = getImgs()
  const randomImg = imgs[Math.floor(Math.random() * imgs.length)]

  const randomTexts = [
    "Instant regret!", "Top tier humor!", "Unexpected twist!", "Meme overload!", "This is deep!", "It do be like that!",
    "Meme approved!", "NPC moment!", "Big mood!", "Just wow!", "LOL guaranteed!", "Hold my meme!", "This aged well!",
    "Chef's kiss!", "Winter is meming!", "Meme fuel!", "Boom! Here's your meme.", "Among us vibes!", "Me IRL",
    "Feeling lucky!", "Too funny!", "Unleash the meme!", "This is illegal!", "Classic meme energy!", "Too real!",
    "Peak comedy!", "Main character vibes!", "Dank alert!", "Wholesome content!", "Why tho?", "This is chaos!",
    "Ultimate meme drop!", "This hits hard!", "Internet gold!", "Mind blown!", "This is wild!", "Savage mode!",
    "Too accurate!", "Unexpected genius!", "Ultimate betrayal!", "Pure genius!", "Zero chill!", "Send help!",
    "Epic moment!", "Surprise me!", "Unfiltered truth!", "Legendary content!", "Just meme it!", "Friendship ended!",
    "Achievement unlocked!", "Blessed image!", "Internet treasure!", "Plot twist!", "Certified hood classic!",
    "Meme storm!", "Memeception!", "Emergency meeting!", "Just vibes.", "Side quest unlocked!", "New bestie!",
    "Meme police incoming!", "Mood of the day!", "Same energy!", "Let's meme it!", "This is fine.", "Meme wizardry!",
    "Straight facts!", "Sussy baka!", "This didn't age well!", "Random power!", "Creativity unleashed!",
    "Meme level: expert", "This is the meme!", "Internet culture!", "Instant classic!", "Viral vibes!", "Random vibes!",
    "Relatable much?", "This slaps!", "No thoughts, head empty.", "No caption needed!", "Triggered!", "Brace yourself!",
    "Can't stop laughing!", "This is cursed!", "This is sus!", "Screenshot this!", "That escalated quickly!",
    "This is the way!", "Flex mode on!", "Plot armor!", "Say what?!", "404 logic not found!", "Certified meme!",
    "Big brain time!", "When you know, you know.", "This is gold!", "When life memes you!", "Can't unsee this!",
    "This is art!"
  ]
  

  const randomColors = [
    "#6D8A00", "#10C8F4", "#431EB2", "#612B3E", "#329804", "#0FFA01", "#11B42C", "#C76167", "#6350BD", "#F52AF1",
    "#67996C", "#A6F724", "#9155D7", "#EDB0FA", "#CE43AE", "#ADD4B9", "#81326D", "#944C24", "#DFB62E", "#6341D9",
    "#A965BB", "#DBBE7A", "#DA94D5", "#434A98", "#C21041", "#D6DC2D", "#9E6013", "#21F59E", "#A1E382", "#F32AF7",
    "#3289B9", "#123FC2", "#A2E873", "#8B1DA3", "#D488D4", "#AF2359", "#A8F95C", "#D05EF6", "#3438B9", "#EBE11E",
    "#3F71EF", "#022266", "#4A23CE", "#D87BC4", "#9EFB86", "#583F72", "#ABB72F", "#8F6AE1", "#865A9C", "#FEED7C",
    "#420557", "#C510FD", "#09A10E", "#D8DA5B", "#FEE129", "#EEBE20", "#C2DCC7", "#192D81", "#C40226", "#08EDF8",
    "#4B587E", "#A5C9CC", "#B9CBDC", "#441509", "#308178", "#E9C502", "#F51FE9", "#8DA316", "#F71C38", "#4D0D03",
    "#6BD804", "#46B732", "#E14FA3", "#1140E0", "#F72F77", "#605118", "#5CC89C", "#2381E8", "#CD85D0", "#416CA0",
    "#A48150", "#5F6F66", "#C08454", "#DA738C", "#D27508", "#7B31DB", "#F2666B", "#86726C", "#3C2547", "#2FF8C6",
    "#49322F", "#7D27BB", "#C88DD0", "#F99ED7", "#13A08C", "#7115A2", "#7A192A", "#0A0ACC", "#E51A38", "#69F3B5"
  ]
  

  const text1 = randomTexts[Math.floor(Math.random() * randomTexts.length)]
  const text2 = randomTexts[Math.floor(Math.random() * randomTexts.length)]
  const color1 = randomColors[Math.floor(Math.random() * randomColors.length)]
  const color2 = randomColors[Math.floor(Math.random() * randomColors.length)]

  setImg(randomImg.id)

  gMeme.lines[0] = {
    txt: text1,
    size: 40,
    color: color1,
    stroke: 'black',
    x: elCanvas.width / 2,
    y: 50,
    align: 'center',
    font: 'Impact'
  }

  gMeme.lines[1] = {
    txt: text2,
    size: 40,
    color: color2,
    stroke: 'black',
    x: elCanvas.width / 2,
    y: elCanvas.height - 50,
    align: 'center',
    font: 'Impact'
  }

  gMeme.selectedLineIdx = 0
  showEditor()
  clearTxtInput()
  renderMeme(false)
}
