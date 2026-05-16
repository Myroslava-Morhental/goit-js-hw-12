import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const input = document.querySelector('input[name="search-text"]');
const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);
hideLoader();

function handleSubmit(event) {
  event.preventDefault();
  clearGallery();

  const inputValue = input.value.trim();

  if (!inputValue) {
    iziToast.error({
      message: 'Search field cannot be empty',
      position: 'topRight',
      color: '#EF4040',
      messageColor: '#FAFAFB',
    });
    return;
  }
  clearGallery();
  showLoader();

  getImagesByQuery(inputValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          color: '#EF4040',
          messageColor: '#FAFAFB',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      console.log('error', error.message);
    })
    .finally(() => {
      form.reset();
      hideLoader();
    });
}
