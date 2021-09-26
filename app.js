  const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
    ];
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
          console.log('Нажата кнопка <-');
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
window.addEventListener('keyup', onCloseModalEscape);
const butClose = document.querySelector('.lightbox__button');
butClose.addEventListener('click', closeModal);

const overlay = document.querySelector('.lightbox__overlay');
overlay.addEventListener('click', closeModal);