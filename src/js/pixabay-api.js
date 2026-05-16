import axios from 'axios';

const API_KEY = '55828489-8fa9c2e53a806421b815e9240';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  }).then(({ data }) => data);
}
