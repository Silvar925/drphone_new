import axios from 'axios';
import { cyrillicMap } from '../../../shared/untiles/cyrillicMap';
import { BASE_URL } from '../../../app/setting';
import { huesas } from './temp';
import { dictionary } from '../../../shared/untiles/helpers';


export const updateProductParams = async (idProduct, color, id, device) => {
  // console.log('asd: ', idProduct)
  // console.log('params: ', idProduct, color, id, device)
  let tempUrl = idProduct.split('-');
  // console.log('tempUrl: ', tempUrl)

  tempUrl[id] = slugify(color);
  let updateUrl = tempUrl.join('-');

  // console.log('update: ', updateUrl, tempUrl)

  let phone = idProduct.split('-')[1]

  let result;
  if (typeof (id) === 'number') {
    result = await search(updateUrl, id, device, phone);
  } else {
    result = await huesas(updateUrl, id, color, device);
  }

  console.log('result: ', result)

  return result;
};

export const slugify = (text) => {
  return text
    .split('')
    .map((char) => cyrillicMap[char] || char)
    .join('');
};

export const extractBaseUrl = (url) => {
  let cleanUrl = url.split('?')[0];
  let parts = cleanUrl.split('/');
  parts.pop();
  let baseUrl = parts.join('/');
  if (!baseUrl.endsWith('/')) {
    baseUrl += '/';
  }
  return baseUrl;
};

const search = async (id, support, device, phone) => {
  console.log('search: ', dictionary[device], device)
  const response = (
    await axios.get(`${BASE_URL}/${dictionary[device]}`)
  ).data;

  let productList = convertUniqueId(response);

  // console.log('convert: ', productList)

  if (productList.includes(id)) {
    // console.log('include: ', id)
    return id;
  } else {
    let ret = getNearestId(productList, id, support, phone);
    // console.log('ret: ', ret);
    return ret;
  }
};

export const getAttributesProduct = (url) => {
  const partUrls = url.split('-');
  // console.assert('partUrls: ', partUrls)

  return {
    color: partUrls[3],
    memory: partUrls[4],
    sim: `${partUrls[5]} + ${partUrls[7]}`,
  };
};

export const convertMemoryList = (memoryList) => {
  let array = [];
  for (let key in memoryList) {
    array.push(memoryList[key].size);
  }
  return array;
};

export const convertUniqueId = (uniqueIdList) => {
  let arrat = [];
  for (let key in uniqueIdList) {
    arrat.push(uniqueIdList[key].unique_id);
  }

  return arrat;
};

const getNearestId = (productList, id, support, phone) => {
  // console.log('parametr: ', productList, id, support)
  console.log('phone: ', phone)

  let temp;
  let tempColor = id.split('-')[support];

  for (let key in productList) {
    console.log('productList[key]: ',)

    if (productList[key].split('-')[1] === phone) {
      temp = productList[key].split('-');

      // console.log('temp: ', temp)

      // console.log('two: ', temp[support], tempColor)

      if (temp[support] === tempColor) {
        // console.log('getNearestID: ', temp.join('-'));
        return temp.join('-');
      }
    }

  }
};