'use strict';
function onInit(){
    loadGallery()
}
function showGallery(){
    var elGallery = document.querySelector('.gallery')
    elGallery.classList.remove('hidden')
    var elGallery = document.querySelector('.editor')
    elGallery.classList.add('hidden')
}
function showEditor(){
    var elGallery = document.querySelector('.editor')
    elGallery.classList.remove('hidden')
    var elGallery = document.querySelector('.gallery')
    elGallery.classList.add('hidden')
}
function loadGallery(){
    var elImgContainer = document.querySelector('.img-container')
    var strHTML = ''
}
function removeBook(bookId) {
    const bookIndex = gBooks.findIndex(book => book.id === bookId);
    gBooks.splice(bookIndex, 1);   
}

