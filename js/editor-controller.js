'use strict';

const elCanvas = document.querySelector('.meme-canvas');
const ctx = elCanvas.getContext('2d');
const elInput = document.getElementById('text-input');
const elColorPicker = document.getElementById('color-picker');
const elDownload = document.getElementById('download-btn');

let gFilter = '';

function onInit() {
  renderGallery();
  showGallery();
}


function onImgSelect(imgId) {
  setImg(imgId);
  showEditor();
  renderMeme();
}
function updateInputForSelectedLine() {
  const meme = getMeme();
  const line = meme.lines[meme.selectedLineIdx];
  elInput.value = line.txt;
  elColorPicker.value = rgbToHex(line.color);
}

function renderMeme() {
  const meme = getMeme();
  if (!meme.selectedImgId) return;

  const imgData = getImgs().find((img) => img.id === meme.selectedImgId);
  if (!imgData) return;

  const img = new Image();
  img.src = imgData.url;
  img.onload = () => {
    ctx.clearRect(0, 0, elCanvas.width, elCanvas.height);
    ctx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height);

    meme.lines.forEach((line, idx) => {
      ctx.font = `bold ${line.size}px Impact`;
      ctx.fillStyle = line.color;
      ctx.strokeStyle = line.stroke || 'black';
      ctx.lineWidth = 3;
      ctx.textAlign = line.align || 'center';

      ctx.fillText(line.txt, line.x, line.y);
      ctx.strokeText(line.txt, line.x, line.y);
    });
        updateDownloadLink(); 
  };
}

elInput.addEventListener('input', (ev) => {
  onSetLineTxt(ev.target.value);
});
elColorPicker.addEventListener('input', (ev) => {
  onSetLineColor(ev.target.value);
});
function updateDownloadLink() {
  const dataURL = elCanvas.toDataURL('image/jpeg');
  elDownload.href = dataURL;
}



function getMeme() {
  return gMeme;
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

