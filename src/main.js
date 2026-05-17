import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const input = document.querySelector('input[name="search-text"]');
const form = document.querySelector('.form');
const loadMore = document.querySelector('.js-load-more');

let page = 1;
let currentQuery = '';
let totalPages = 0;

form.addEventListener('submit', handleSubmit);
loadMore.addEventListener('click', onLoadMore);

hideLoader();
hideLoadMoreButton();

async function handleSubmit(event) {
  event.preventDefault();

  currentQuery = input.value.trim();

  if (!currentQuery) {
    iziToast.error({
      message: 'Search field cannot be empty',
      position: 'topRight',
      color: '#EF4040',
      messageColor: '#FAFAFB',
    });
    return;
  }
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  getImagesByQuery(currentQuery, page)
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

      totalPages = Math.ceil(data.totalHits / 15);

      createGallery(data.hits);

      if (page < totalPages) {
        showLoadMoreButton();
      } else {
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
      }
    })
    .catch(error => {
      iziToast.error({
        message: error.message,
        position: 'topRight',
      });
    })
    .finally(() => {
      form.reset();
      hideLoader();
    });
}

async function onLoadMore() {
  page += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    createGallery(data.hits);

    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideloader();
  }
}
