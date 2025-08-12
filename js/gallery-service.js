'use strict';

const gImgs = [
  { id: 1, url: 'img/1.jpg', keyWords: ['funny', 'ugly'] },
  { id: 2, url: 'img/2.jpg', keyWords: ['cute', 'animal'] },
  { id: 3, url: 'img/3.jpg', keyWords: ['sad', 'emotional'] },
  { id: 4, url: 'img/4.jpg', keyWords: ['happy', 'smile'] },
  { id: 5, url: 'img/5.jpg', keyWords: ['angry', 'meme'] },
  { id: 6, url: 'img/6.jpg', keyWords: ['baby', 'adorable'] },
  { id: 7, url: 'img/7.jpg', keyWords: ['cat', 'funny'] },
  { id: 8, url: 'img/8.jpg', keyWords: ['dog', 'cute'] },
  { id: 9, url: 'img/9.jpg', keyWords: ['politics', 'serious'] },
  { id: 10, url: 'img/10.jpg', keyWords: ['sports', 'action'] },
  { id: 11, url: 'img/11.jpg', keyWords: ['movie', 'actor'] },
  { id: 12, url: 'img/12.jpg', keyWords: ['cartoon', 'kids'] },
  { id: 13, url: 'img/13.jpg', keyWords: ['nature', 'beautiful'] },
  { id: 14, url: 'img/14.jpg', keyWords: ['space', 'science'] },
  { id: 15, url: 'img/15.jpg', keyWords: ['food', 'delicious'] },
  { id: 16, url: 'img/16.jpg', keyWords: ['technology', 'cool'] },
  { id: 17, url: 'img/17.jpg', keyWords: ['random', 'weird'] },
  { id: 18, url: 'img/18.jpg', keyWords: ['classic', 'vintage'] },
];

function filteredImgs(imgs) {
  return imgs.filter((img) =>
    img.keyWords.some((keyword) =>
      keyword.toLowerCase().includes(gFilter.toLowerCase())
    )
  );
}

