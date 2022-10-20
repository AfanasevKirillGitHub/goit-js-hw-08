import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const allGallery = document.querySelector('.gallery');
const itemMarkup = createNewCardGallery(galleryItems);

function createNewCardGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join('');
}
allGallery.insertAdjacentHTML('beforeend', itemMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// test =====================================================
lightbox.on('nextDone.simplelightbox', function () {
  console.log('This is next picture');
});

lightbox.on('change.simplelightbox', function () {
  console.log('We wait next picture');
});
// ===========================================================

console.log(galleryItems);
