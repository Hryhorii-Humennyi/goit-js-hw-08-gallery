import {galleryItems } from './app.js'
const galery = document.querySelector('.gallery');
const modal = document.querySelector('.lightbox');

let rezStr = '';
galleryItems.forEach(elem => {
  rezStr += `<li class=\"galleryItem\" > <img  src=\"${elem.preview}\" alt=\"${elem.description}\" data-original=\"${elem.original}\"> </li>`;
});

galery.insertAdjacentHTML('afterbegin', rezStr);
galery.style.height = 'auto';

const galItem = document.querySelectorAll('.galleryItem');
galItem.forEach(elem => {
  elem.style.overflow = 'hidden';
});

const bigImg = document.querySelector('.lightbox__image');
const clickListener = e => {
  e.stopPropagation();
  modal.classList.add('is-open');
  if (e.target.nodeName === 'IMG') {
    bigImg.src = e.target.dataset.original;
    bigImg.alt = e.target.alt;
    const images= galery.querySelectorAll('img');
    let i = 0;
     galleryItems.forEach((elem) => {
       if (e.target.alt === galleryItems[i].description) {
         return i;
       }
        i++;
    })
    document.addEventListener('keydown', e => {
      switch (e.key) {
        case 'ArrowRight':
          i++;
           if (i === galleryItems.length) i = 0;
          bigImg.src = galleryItems[i].original;
          bigImg.alt = galleryItems[i].description;
          break;
        case 'ArrowLeft':
          if (i === 0) i = galleryItems.length;
          i--;
          bigImg.src = galleryItems[i].original;
          bigImg.alt = galleryItems[i].description;
          break;
        default:
          break;
      }
    });
  }
};
galery.addEventListener('click', clickListener);


const closeModal = e => {
  bigImg.src = '';
  bigImg.alt = '';
  modal.classList.remove('is-open');
};
const onCloseModalEscape = e => {
  if (e.key === 'Escape') {
    modal.classList.remove('is-open');
    bigImg.src = '';
    bigImg.alt = '';
  }
};
window.addEventListener('keyup', onCloseModalEscape, true);
window.removeEventListener('keyup', onCloseModalEscape);
const butClose = document.querySelector('.lightbox__button');
butClose.addEventListener('click', closeModal, true);
butClose.removeEventListener('click', closeModal);

const overlay = document.querySelector('.lightbox__overlay');
overlay.addEventListener('click', closeModal);
