'use strict'
const gMeme = {
  selectedImgId: null,
  selectedLineIdx: 0,
  lines: [
    {
      txt: '',
      size: 40,
      color: 'white',
      stroke: 'black',
      x: 250,
      y: 50,
      align: 'center',
    },
  ],
}

function getMeme() {
  return gMeme
}

function setImg(id) {
  gMeme.selectedImgId = id
  gMeme.selectedLineIdx = 0
}

function setLineTxt(txt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setLineColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color
}

function switchLine() {
  if (gMeme.lines.length > 1) {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length
    updateInputForSelectedLine()
    renderMeme(true)
    elInput.focus()
  }
}
function showEditor() {
  if (!gMeme.selectedImgId) {
    document.querySelector('dialog').showModal()
    return
  }
  const sections = document.querySelectorAll('section')
  sections.forEach(section => section.classList.remove('active'))

  const editorSection = document.querySelector('.editor')
  editorSection.classList.add('active')
  elInput.focus()
}

function addLine() {
  if (gMeme.lines.length < 2) {
    gMeme.lines.push({
      txt: '',
      size: 40,
      color: 'white',
      stroke: 'black',
      x: elCanvas.width / 2,
      y: elCanvas.height - 50,
      align: 'center',
    })
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    updateInputForSelectedLine()
    renderMeme(true)
  } else {
    alert('You can only add up to 2 lines!')
  }
}

function onDeleteLine() {
  elInput.disabled = false 
  if (gMeme.lines.length > 1) {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = 0
  } else {
    gMeme.lines[0] = {
      txt: '',
      size: 40,
      color: 'white',
      stroke: 'black',
      x: elCanvas.width / 2,
      y: 50,
      align: 'center',
    }
  }

  updateInputForSelectedLine()
  renderMeme(true)
}


function increaseFont() {
  gMeme.lines[gMeme.selectedLineIdx].size += 5
  renderMeme(true)
}

function decreaseFont() {
  const line = gMeme.lines[gMeme.selectedLineIdx]
  line.size = Math.max(10, line.size - 5)
  renderMeme(true)
}

function onAlign(alignType) {
  gMeme.lines[gMeme.selectedLineIdx].align = alignType
  renderMeme(true)
}

function clearCanvas() {
  ctx.clearRect(0, 0, elCanvas.width, elCanvas.height)
}

function drawImage(img) {
  const canvasRatio = elCanvas.width / elCanvas.height
  const imgRatio = img.width / img.height

  let srcX = 0, srcY = 0, srcWidth = img.width, srcHeight = img.height

  if (imgRatio > canvasRatio) {
    srcWidth = img.height * canvasRatio
    srcX = (img.width - srcWidth) / 2
  } else {
    srcHeight = img.width / canvasRatio
    srcY = (img.height - srcHeight) / 2
  }

  ctx.drawImage(
    img,
    srcX, srcY, srcWidth, srcHeight, 
    0, 0, elCanvas.width, elCanvas.height 
  )
}



function drawTextLines(meme, showFrame) {
    meme.lines.forEach((line, idx) => {
    drawText(line)
    if (showFrame && idx === meme.selectedLineIdx) {
      drawTextFrame(line)
    }
  })
}


function drawText(line) {
  ctx.font = `bold ${line.size}px ${line.font || 'Impact'}`
  ctx.fillStyle = line.color
  ctx.strokeStyle = line.stroke
  ctx.lineWidth = 3
  ctx.textAlign = line.align

  ctx.fillText(line.txt, line.x, line.y)
  ctx.strokeText(line.txt, line.x, line.y)
}
function drawTextFrame(line) {
  const textMetrics = ctx.measureText(line.txt)
  const padding = 10
  const height = line.size + padding
  let xStart

  switch (line.align) {
    case 'left':
      xStart = line.x
      break
    case 'center':
      xStart = line.x - textMetrics.width / 2
      break
    case 'right':
      xStart = line.x - textMetrics.width
      break
  }

  ctx.strokeStyle = 'white'       
  ctx.lineWidth = 1               
  ctx.setLineDash([4, 4])       
  ctx.strokeRect(xStart - padding / 2, line.y - line.size, textMetrics.width + padding, height)
  ctx.setLineDash([])           

}
function clearTxtInput(){
  elInput.value = ''
}