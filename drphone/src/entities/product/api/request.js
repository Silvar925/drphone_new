import axios from 'axios';
import { BASE_URL } from '../../../app/setting.js';
import { dictionary } from '../../../shared/untiles/helpers.js';

export const getProductList = (url, setData) => {
  axios
    .get(`${BASE_URL}/${dictionary[url]}`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error('Ошибка при получении данных пользователя:', error);
    });
};

export const getProduct = async (url, setData, productId) => {
  try {
    const fullUrl = `${BASE_URL}/${dictionary[url]}?unique_id=${productId}`;
    const response = await axios.get(fullUrl);
    setData(response.data[0]);
  } catch (error) {
    if (error.response) {
      // Сервер вернул ответ с ошибочным статусом
      console.error(
        'Ошибка при получении данных пользователя:',
        error.response.status,
        error.response.data
      );
      if (error.response.status === 404) {
        console.error('Ресурс не найден (404)');
      } else {
        console.error('Ошибка на сервере:', error.response.status);
      }
    } else if (error.request) {
      // Запрос был сделан, но ответа не получено
      console.error('Запрос был сделан, но ответа не получено', error.request);
    } else {
      // Что-то пошло не так при настройке запроса
      console.error('Ошибка при настройке запроса', error.message);
    }
  }
};

export const getAllMemoryProduct = async (url) => {
  console.log(`${BASE_URL}/${url}`);
  axios
    .get(`${BASE_URL}/${url}`)
    .then((response) => {
      console.log('res: ', response.data);
    })
    .catch((error) => {
      console.error('Ошибка при получении данных пользователя:', error);
    });
};
