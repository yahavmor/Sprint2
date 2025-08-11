'use strict';


const elCanvas = document.querySelector('.meme-canvas');
const ctx = elCanvas.getContext('2d');
const elInput = document.getElementById('text-input');
const elColorPicker = document.getElementById('color-picker');
const elDownload = document.getElementById('download-btn');

function onInit() {
  renderGallery();
}


function renderMeme() {
  const meme = getMeme();
  const img = new Image();
  const imgData = getImgs().find((img) => img.id === meme.selectedImgId);

  if (!imgData) return;

  img.src = imgData.url;
  img.onload = () => {
    ctx.clearRect(0, 0, elCanvas.width, elCanvas.height);
    ctx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height);

    meme.lines.forEach((line, idx) => {
      ctx.font = `bold ${line.size}px Impact`;
      ctx.fillStyle = line.color;
      ctx.strokeStyle = line.stroke;
      ctx.lineWidth = 3;
      ctx.textAlign = line.align;

      ctx.fillText(line.txt, line.x, line.y);
      ctx.strokeText(line.txt, line.x, line.y);

      if (idx === meme.selectedLineIdx) {
        const textWidth = ctx.measureText(line.txt).width;
        const padding = 10;
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 2;
        ctx.strokeRect(
          line.x - textWidth / 2 - padding,
          line.y - line.size,
          textWidth + padding * 2,
          line.size + 10
        );
      }
    });

    const selectedLine = meme.lines[meme.selectedLineIdx];
    elInput.value = selectedLine.txt;
    elColorPicker.value = rgbToHex(selectedLine.color);
  };
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
  renderMeme();
  updateInputForSelectedLine();
}

function onSwitchLine() {
  switchLine();
  renderMeme();
  updateInputForSelectedLine();
}

function onIncreaseFont() {
  increaseFont();
  renderMeme();
}

function onDecreaseFont() {
  decreaseFont();
  renderMeme();
}

function updateInputForSelectedLine() {
  const meme = getMeme();
  const line = meme.lines[meme.selectedLineIdx];
  elInput.value = line.txt;
  elColorPicker.value = rgbToHex(line.color);
}

function rgbToHex(rgb) {
  const colors = {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    blue: '#0000ff',
    green: '#008000',
    yellow: '#ffff00',
  };
  return colors[rgb.toLowerCase()] || '#ffffff';
}

elDownload.addEventListener('click', (ev) => {
  ev.preventDefault();
  const dataURL = elCanvas.toDataURL('image/jpeg');
  elDownload.href = dataURL;
});

