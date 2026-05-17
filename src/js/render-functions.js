import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.js-load-more');

const lightbox = new SimpleLightbox('.gallery .gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-card">
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-img" src="${webformatURL}" alt="${tags}" width="360" height="152"/>
            </a>
            <ul class="gallery-info">
                <li class="info-item">
                    <h3 class="info-title">Likes</h3>
                    <p class="info-qty">${likes}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-title">Views</h3>
                    <p class="info-qty">${views}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-title">Comments</h3>
                    <p class="info-qty">${comments}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-title">Downloads</h3>
                    <p class="info-qty">${downloads}</p>
                </li>
            </ul>
        </li>
      `
    )
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryList.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMore.classList.replace('load-more-hidden', 'load-more');
}

export function hideLoadMoreButton() {
  loadMore.classList.replace('load-more', 'load-more-hidden');
}
