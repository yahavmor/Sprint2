function getImgs() {
  return gImgs;
}


function onSearch(elInput) {
  gFilter = elInput.value;
  renderGallery();
}

function renderGallery() {
  let imgs = getImgs();
  if (gFilter) imgs = filteredImgs(imgs);

  const elContainer = document.querySelector('.img-container');
  elContainer.innerHTML = imgs
    .map(
      (img) =>
        `<img src="${img.url}" class="gallery-img" onclick="onImgSelect(${img.id})" />`
    )
    .join('');
}

function showGallery() {
  document.querySelector('.gallery').classList.add('active');
  document.querySelector('.editor').classList.remove('active');
}
function showEditor() {
  if (!gMeme.selectedImgId) {
    alert('Please select an image first from the gallery!');
    return;
  }
  document.querySelector('.gallery').classList.remove('active');
  document.querySelector('.editor').classList.add('active');
  renderMeme();
  updateInputForSelectedLine();
elInput.focus(); 

}
