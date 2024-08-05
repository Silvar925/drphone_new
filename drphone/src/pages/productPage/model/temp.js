import axios from 'axios';
import { convertUniqueId } from './helpers';
import { BASE_URL } from '../../../app/setting';
import { dictionary } from '../../../shared/untiles/helpers';

export const huesas = (url, id, param, device, phone) => {
  let newUrl = url.split('-');
  let newParam = param.split(' ');
  newUrl[id[0]] = newParam[0];
  newUrl[id[2]] = newParam[2];
  newParam = newUrl.join('-');

  return getNearestId(newParam, param, device, phone);
  // return newParam
};

const getNearestId = async (url, param, device, phone) => {
  const response = (
    await axios.get(`${BASE_URL}/${dictionary[device]}`)
  ).data;

  console.log('response: ', response, device);

  let productList = convertUniqueId(response, phone);

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
    console.log('topas: ', list[key])
    let value = getMemory(list[key]);
    console.log('newItem === value: ', newItem, value)
    if (newItem === value) {
      console.log('listKey: ', list[key])
      return list[key];
    } else {
      console.log('TOPAS: ', newItem, value);
    }
  }
};

const getMemory = (item) => {
  let memory = [];
  let newItem = item.split('-');

  // console.log('newItem: ', newItem);

  // console.log('1', newItem[4]);
  // console.log('2', newItem[5]); 
  // console.log('3', newItem[6]);

  memory.push(newItem[4]);
  // memory.push(newItem[5]);
  memory.push(newItem[6]);

  memory = memory.join('--');

  // console.log('me: ', memory)
  return memory;
};