'use strict';
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
};

function setImg(id) {
  gMeme.selectedImgId = id;
  gMeme.selectedLineIdx = 0;
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
  ];
}

function rgbToHex(color) {
  const colors = {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    blue: '#0000ff',
    green: '#008000',
    yellow: '#ffff00',
  };
  return colors[color.toLowerCase()] || '#ffffff';
}
function setLineTxt(txt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function setLineColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color;
}

function switchLine() {
  if (gMeme.lines.length > 1) {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length;
    updateInputForSelectedLine();
    renderMeme();
  }
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
    });
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
    updateInputForSelectedLine();
    renderMeme();
  } else {
    alert('You can only add up to 2 lines!');
  }
}

function onDeleteLine() {
  if (gMeme.lines.length > 1) {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    gMeme.selectedLineIdx = 0;
    updateInputForSelectedLine();
    renderMeme();
  } else {
    alert('You need at least one line!');
  }
}

function increaseFont() {
  gMeme.lines[gMeme.selectedLineIdx].size += 5;
  renderMeme();
}

function decreaseFont() {
  const line = gMeme.lines[gMeme.selectedLineIdx];
  line.size = Math.max(10, line.size - 5);
  renderMeme();
}

function onAlign(alignType) {
  gMeme.lines[gMeme.selectedLineIdx].align = alignType;
  renderMeme();
}
