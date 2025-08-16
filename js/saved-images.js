'use strict';
function showSaved() {
  document.querySelector('.gallery').classList.remove('active')
  document.querySelector('.editor').classList.remove('active')
  document.querySelector('.saved').classList.add('active')
  renderSavedMemes()
}

function renderSavedMemes() {
  const savedMemes = JSON.parse(localStorage.getItem('savedMemes')) 
  const container = document.querySelector('.saved-container')
  if (savedMemes.length === 0) {
    container.innerHTML = `
      <div class="no-memes-msg">
        😢 No saved memes yet. Go create something hilarious!
      </div>
    `
    return
  }
  let strHtml = ''

savedMemes.forEach((memeUrl, i) => {
  strHtml += `
    <div class="saved-meme-wrapper">
      <img src="${memeUrl}" class="saved-meme">
      <button onclick="deleteSavedMeme(${i})" class="delete-btn">🗑️ Delete</button>
    </div>
  `
})
  container.innerHTML = strHtml
}
function onSaveMeme() {
  renderMeme(false, () => {
    const dataURL = elCanvas.toDataURL('image/jpeg')
    const savedMemes = JSON.parse(localStorage.getItem('savedMemes')) 
    savedMemes.push(dataURL)
    localStorage.setItem('savedMemes', JSON.stringify(savedMemes))
    showSaveToast()
  })
}

function deleteSavedMeme(index) {
  const savedMemes = JSON.parse(localStorage.getItem('savedMemes')) 
  savedMemes.splice(index, 1)
  localStorage.setItem('savedMemes', JSON.stringify(savedMemes))
  renderSavedMemes()
}

function showSaveToast() {
  const toast = document.querySelector('.toast')
  toast.classList.add('show')
  setTimeout(() => {
    toast.classList.remove('show')
  }, 3000)
}