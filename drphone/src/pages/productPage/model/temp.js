import axios from 'axios';
import { convertUniqueId } from './helpers';
import { BASE_URL } from '../../../app/setting';

export const huesas = (url, id, param) => {
  let newUrl = url.split('-');
  let newParam = param.split(' ');
  newUrl[id[0]] = newParam[0];
  newUrl[id[2]] = newParam[2];
  newParam = newUrl.join('-');

  return getNearestId(newParam, param);
  // return newParam
};

const getNearestId = async (url, param) => {
  const response = (
    await axios.get(`${BASE_URL}/api/Core/phones-options-list/`)
  ).data;

  let productList = convertUniqueId(response);

  if (productList.includes(url)) {
    console.log(true);
  } else {
    return search(productList, param);
  }
};

const search = (list, item) => {
  let newItem = item.split(' ');
  newItem.splice(1, 1);
  newItem = newItem.join('--');

  console.log('newItem: ', newItem);

  for (let key in list) {
    let value = getMemory(list[key]);
    if (newItem === value) {
      return list[key];
    } else {
      console.log('TOPAS: ', newItem, value);
    }
  }
};

const getMemory = (item) => {
  let memory = [];
  let newItem = item.split('-');

  memory.push(newItem[5]);
  memory.push(newItem[6]);
  memory.push(newItem[7]);

  memory = memory.join('-');

  return memory;
};
