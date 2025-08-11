
const elCanvas = document.querySelector('.my-canvas')
const ctx = elCanvas.getContext('2d');

function onInit() {
    renderImges();
}

function showGallery() {
    document.querySelector('.gallery').classList.remove('hidden');
    document.querySelector('.editor').classList.add('hidden');
}

function showEditor() {
    document.querySelector('.editor').classList.remove('hidden');
    document.querySelector('.gallery').classList.add('hidden');
}

function editImage(elImage){
    showEditor()
    const img = new Image();
    img.src = elImage.src;
    img.onload = function() {
        ctx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height);
    };
}
function writeTxtBox(elInput){
    const value = elInput.value
    

}