function onInit() {
  renderGallery();
  showGallery();
}



function getImgs() {
  return gImgs
}



function onSearch(elInput) {
  gFilter = elInput.value.trim().toLowerCase()
  renderGallery()
}


function renderGallery() {
  let imgs = getImgs()
  if (gFilter) imgs = filteredImgs(imgs)
  const elContainer = document.querySelector('.img-container')
  if (!imgs.length) {
    elContainer.innerHTML = '<p class="no-imgs-to-display">No images found for your search</p>'
    return
  }
  const strHtmls = imgs.map(img =>
    `<img src="${img.url}" class="gallery-img" onclick="onImgSelect(${img.id})" />`
  ).join('')
  
  elContainer.innerHTML = strHtmls
}


function showGallery() {
  document.querySelector('.gallery').classList.add('active')
  document.querySelector('.editor').classList.remove('active')
}
function showEditor() {
  if (!gMeme.selectedImgId) {
    document.querySelector('dialog').showModal()
    return
  }
  
  document.querySelector('.gallery').classList.remove('active')
  document.querySelector('.editor').classList.add('active')
  updateInputForSelectedLine()
  elInput.focus() 

}

function onCloseModal(){
  document.querySelector('dialog').close()
}


