'use strict'

const elCanvas = document.querySelector('.meme-canvas')
const ctx = elCanvas.getContext('2d')
const elInput = document.querySelector('.text-input')
const elColorPicker = document.querySelector('.color-picker')
const elDownload = document.querySelector('.download-btn')
const elConfirmLineBtn = document.querySelector('.confirm-line-btn')

let gFilter = ''




function onImgSelect(imgId) {
  setImg(imgId)
  showEditor()
  renderMeme(true)
}

function renderMeme(showFrame, callback = null) {
  const meme = getMeme()
  const imgData = gImgs.find(img => img.id === meme.selectedImgId)
  const img = new Image()
  img.src = imgData.url
  img.onload = () => {
    clearCanvas()
    drawImage(img)
    drawTextLines(meme, showFrame)
    if (callback) callback() 
  }
}



function updateInputForSelectedLine() {
  const meme = getMeme()
  const line = meme.lines[meme.selectedLineIdx]
  elInput.value = line.txt
}
function onFontChange(font) {
  gMeme.lines[gMeme.selectedLineIdx].font = font
  renderMeme(true)
}




elInput.addEventListener('input',ev => {
  onSetLineTxt(ev.target.value)
})
elColorPicker.addEventListener('input', (ev) => {
  onSetLineColor(ev.target.value)
})
function updateDownloadLink() {
  renderMeme(false, () => {
    try {
      const dataURL = elCanvas.toDataURL('image/jpeg')
      elDownload.href = dataURL
      elDownload.download = 'my-meme.jpg'
    } catch (err) {
      console.error("Failed to generate image:", err)
      alert("There was an error generating the meme image.")
    }
  })
}



elConfirmLineBtn.addEventListener('click', () => {
  onConfirmLine()
})


function onConfirmLine() {
  if (!elInput.value) return
  clearTxtInput()
  elInput.blur()              
  elInput.disabled = true       
  updateDownloadLink()         
}



function onSetLineTxt(txt) {
  setLineTxt(txt)
  renderMeme(true)
}
function onSetLineColor(color) {
  setLineColor(color)
  renderMeme(true)
}
function onAddLine() {
  addLine()
  elInput.disabled = false 
  elInput.focus()            
}

function onSwitchLine() {
  elInput.disabled = false 
  switchLine()
}
function onIncreaseFont() {
  increaseFont()
}
function onDecreaseFont() {
  decreaseFont()
}

function shareOnFacebook() {
  renderMeme(false, () => {
    const dataUrl = elCanvas.toDataURL('image/jpeg')
    const blob = dataURItoBlob(dataUrl)
    const file = new File([blob], 'meme.jpg', { type: 'image/jpeg' })
    uploadImg(file, (uploadedUrl) => {
      const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(uploadedUrl)}`
      window.open(fbShareUrl, '_blank')
    })
  })
}

function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(',')[1])
  const mimeString = dataURI.split(',')[0].split(':')[1].split('')[0]
  const ab = new ArrayBuffer(byteString.length)
  const ia = new Uint8Array(ab)
  for (let i = 0 ;i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ab], { type: mimeString })
}
async function uploadImg(imgData, onSuccess) {
  const CLOUD_NAME = 'webify'
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
  const formData = new FormData()
  formData.append('file', imgData)
  formData.append('upload_preset', 'webify')
  try {
      const res = await fetch(UPLOAD_URL, {
          method: 'POST',
          body: formData
      })
      const data = await res.json()
      onSuccess(data.secure_url)

  } catch (err) {
      console.log(err)
  }
}

