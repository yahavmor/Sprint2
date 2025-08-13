'use strict';

const elCanvas = document.querySelector('.meme-canvas');
const ctx = elCanvas.getContext('2d');
const elInput = document.querySelector('.text-input');
const elColorPicker = document.querySelector('.color-picker');
const elDownload = document.querySelector('.download-btn');
let gFilter = '';




function onImgSelect(imgId) {
  setImg(imgId);
  showEditor();
  renderMeme();
}

function renderMeme() {
  const meme = getMeme();
  console.log(meme.lines)
  const imgData = gImgs.find(img => img.id === meme.selectedImgId);

  const img = new Image();
  img.src = imgData.url;
  img.onload = () => {
    ctx.clearRect(0, 0, elCanvas.width, elCanvas.height);
    ctx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height);

    meme.lines.forEach(line => {
      ctx.font = `bold ${line.size}px ${line.font || 'Impact'}`;
      ctx.fillStyle = line.color;
      ctx.strokeStyle = line.stroke;
      ctx.lineWidth = 3;
      ctx.textAlign = line.align;

      ctx.fillText(line.txt, line.x, line.y);
      ctx.strokeText(line.txt, line.x, line.y);
    });
        updateDownloadLink(); 
  };
}
function updateInputForSelectedLine() {
  const meme = getMeme();
  const line = meme.lines[meme.selectedLineIdx];
  elInput.value = line.txt;
  elColorPicker.value = rgbToHex(line.color);
}
function onFontChange(font) {
  gMeme.lines[gMeme.selectedLineIdx].font = font;
  renderMeme();
}




elInput.addEventListener('input',ev => {
  onSetLineTxt(ev.target.value);
});
elColorPicker.addEventListener('input', (ev) => {
  onSetLineColor(ev.target.value);
});
function updateDownloadLink() {
  const dataURL = elCanvas.toDataURL('image/jpeg');
  elDownload.href = dataURL;
}







function onSetLineTxt(txt) {
  setLineTxt(txt);
  renderMeme();
}
function onSetLineColor(color) {
  setLineColor(color);
  renderMeme();
}
function onAddLine() {
  addLine();
  elInput.focus(); 
}
function onSwitchLine() {
  switchLine();
}
function onIncreaseFont() {
  increaseFont();
}
function onDecreaseFont() {
  decreaseFont();
}


