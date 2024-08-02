import axios from 'axios';
import { BASE_URL } from '../../../app/setting.js';
import { dictionary, abbreviatedSlag } from '../../../shared/untiles/helpers.js';

export const getProductList = (url, setData) => {
  // console.log('URL: ', `${BASE_URL}/${dictionary[url]}`)
  axios
    .get(`${BASE_URL}/${dictionary[url]}`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      // console.log('Full Url: ', `${BASE_URL}/${dictionary[url]}`);
      // console.log('Url-end: ', url);
      console.error('Ошибка при получении данных пользователя:', error);
    });
};

export const getProduct = async (url, setData, productId) => {
  const basePath = url !== 'usedDevices' ? dictionary[url] : abbreviatedSlag[productId.split('-')[0]];


  // console.log('fullURL: ', `${BASE_URL}/${basePath}?unique_id=${productId}`)

  try {
    const fullUrl = `${BASE_URL}/${basePath}?unique_id=${productId}`;
    const response = await axios.get(fullUrl);
    setData(response.data[0]);


  } catch (error) {
    if (error.response) {
      console.error(
        'Ошибка при получении данных товаров:',
        error.response.status,
        error.response.data,
      );
      if (error.response.status === 404) {
        console.error('Ресурс не найден (404)');
      } else {
        console.error('Ошибка на сервере:', error.response.status);
      }
    } else if (error.request) {
      console.error('Запрос был сделан, но ответа не получено', error.request);
    } else {
      console.error('Ошибка при настройке запроса', error.message);
    }
  }
};

export const getAllMemoryProduct = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`);
    return response.data; // Возвращаем данные из ответа
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error; // Пробрасываем ошибку дальше, если нужно обработать в вызывающем коде
  }
};