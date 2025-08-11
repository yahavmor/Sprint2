'use strict';

var gQueryOptions ={
      filterKeywords:null
  }
const gImgs = [
      { imgId: makeId(), imgURL: 'img/1.jpg', keyWords: ['funny', 'ugly'] },
      { imgId: makeId(), imgURL: 'img/2.jpg', keyWords: ['cute', 'animal'] },
      { imgId: makeId(), imgURL: 'img/3.jpg', keyWords: ['sad', 'emotional'] },
      { imgId: makeId(), imgURL: 'img/4.jpg', keyWords: ['happy', 'smile'] },
      { imgId: makeId(), imgURL: 'img/5.jpg', keyWords: ['angry', 'meme'] },
      { imgId: makeId(), imgURL: 'img/6.jpg', keyWords: ['baby', 'adorable'] },
      { imgId: makeId(), imgURL: 'img/7.jpg', keyWords: ['cat', 'funny'] },
      { imgId: makeId(), imgURL: 'img/8.jpg', keyWords: ['dog', 'cute'] },
      { imgId: makeId(), imgURL: 'img/9.jpg', keyWords: ['politics', 'serious'] },
      { imgId: makeId(), imgURL: 'img/10.jpg', keyWords: ['sports', 'action'] },
      { imgId: makeId(), imgURL: 'img/11.jpg', keyWords: ['movie', 'actor'] },
      { imgId: makeId(), imgURL: 'img/12.jpg', keyWords: ['cartoon', 'kids'] },
      { imgId: makeId(), imgURL: 'img/13.jpg', keyWords: ['nature', 'beautiful'] },
      { imgId: makeId(), imgURL: 'img/14.jpg', keyWords: ['space', 'science'] },
      { imgId: makeId(), imgURL: 'img/15.jpg', keyWords: ['food', 'delicious'] },
      { imgId: makeId(), imgURL: 'img/16.jpg', keyWords: ['technology', 'cool'] },
      { imgId: makeId(), imgURL: 'img/17.jpg', keyWords: ['random', 'weird'] },
      { imgId: makeId(), imgURL: 'img/18.jpg', keyWords: ['classic', 'vintage'] }
    ];
    

    function renderImges(filterKeyword) {
      const elImgContainer = document.querySelector('.img-container');
      let strHTML = '';
  
      const imgsToRender = gImgs.filter(img => {
          if (!filterKeyword) return true;
          return img.keyWords.some(keyword => keyword.toLowerCase().includes(filterKeyword));
      });
  
      imgsToRender.forEach(img => {
          strHTML += `<img class="gallery-img" onclick="editImage(this)" src="${img.imgURL}">`;
      });
  
      elImgContainer.innerHTML = strHTML;
  }
  


function makeId() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const defaultLength = 8;
      let result = '';
      for (let i = 0; i < defaultLength; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
}

function onSearch(elInput){
      const value = elInput.value.toLowerCase()
      gQueryOptions.filterKeywords = value
      renderImges(gQueryOptions.filterKeywords)
}



