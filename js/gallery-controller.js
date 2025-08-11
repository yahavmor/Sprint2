'use strict';

const gImgs = [
      { imgId: 1, url: 'img/1.jpg', keyWords: ['funny', 'ugly'] },
      { imgId: 2, url: 'img/2.jpg', keyWords: ['cute', 'animal'] },
      { imgId: 3, url: 'img/3.jpg', keyWords: ['sad', 'emotional'] },
      { imgId: 4, url: 'img/4.jpg', keyWords: ['happy', 'smile'] },
      { imgId: 5, url: 'img/5.jpg', keyWords: ['angry', 'meme'] },
      { imgId: 6, url: 'img/6.jpg', keyWords: ['baby', 'adorable'] },
      { imgId: 7, url: 'img/7.jpg', keyWords: ['cat', 'funny'] },
      { imgId: 8, url: 'img/8.jpg', keyWords: ['dog', 'cute'] },
      { imgId: 9, url: 'img/9.jpg', keyWords: ['politics', 'serious'] },
      { imgId: 10, url: 'img/10.jpg', keyWords: ['sports', 'action'] },
      { imgId: 11, url: 'img/11.jpg', keyWords: ['movie', 'actor'] },
      { imgId: 12, url: 'img/12.jpg', keyWords: ['cartoon', 'kids'] },
      { imgId: 13, url: 'img/13.jpg', keyWords: ['nature', 'beautiful'] },
      { imgId: 14, url: 'img/14.jpg', keyWords: ['space', 'science'] },
      { imgId: 15, url: 'img/15.jpg', keyWords: ['food', 'delicious'] },
      { imgId: 16, url: 'img/16.jpg', keyWords: ['technology', 'cool'] },
      { imgId: 17, url: 'img/17.jpg', keyWords: ['random', 'weird'] },
      { imgId: 18, url: 'img/18.jpg', keyWords: ['classic', 'vintage'] }
    ];
    
var gMeme = {
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

function getImgs() {
  return gImgs;
}

function setImg(id) {
  gMeme.selectedImgId = id;
  gMeme.selectedLineIdx = 0;
  gMeme.lines = [
    {
      txt: '',
      size: 40,
      color: 'white',
      stroke: 'black',
      x: 250,
      y: 50,
      align: 'center',
    },
  ];
}

function getMeme() {
  return gMeme;
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
  }
}

function addLine() {
  if (gMeme.lines.length === 1) {
    gMeme.lines.push({
      txt: '',
      size: 40,
      color: 'white',
      stroke: 'black',
      x: 250,
      y: 450,
      align: 'center',
    });
    gMeme.selectedLineIdx = 1;
  }
}

function increaseFont() {
  gMeme.lines[gMeme.selectedLineIdx].size += 5;
}

function decreaseFont() {
  gMeme.lines[gMeme.selectedLineIdx].size = Math.max(
    10,
    gMeme.lines[gMeme.selectedLineIdx].size - 5
  );
}


function renderGallery() {
  const imgs = getImgs();
  const elContainer = document.querySelector('.img-container');
  let strHTML = '';
  imgs.forEach((img) => {
    strHTML += `<img src="${img.url}" class="gallery-img" onclick="onImgSelect(${img.id})" />`;
  });
  elContainer.innerHTML = strHTML;
}

function onImgSelect(imgId) {
  setImg(imgId);
  showEditor();
  renderMeme();
}

function showEditor() {
  document.querySelector('.gallery').classList.add('hidden');
  document.querySelector('.editor').classList.remove('hidden');
}

function showGallery() {
  document.querySelector('.gallery').classList.remove('hidden');
  document.querySelector('.editor').classList.add('hidden');
}

