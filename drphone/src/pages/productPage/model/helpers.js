import axios from 'axios';
import { cyrillicMap } from '../../../shared/untiles/cyrillicMap';
import { BASE_URL } from '../../../app/setting';
import { huesas } from './temp';


export const updateProductParams = async (idProduct, color, id) => {
  // console.log('asd: ', idProduct)
  let tempUrl = idProduct.split('-');
  // console.log('tempUrl: ', tempUrl)

  tempUrl[id] = slugify(color);
  let updateUrl = tempUrl.join('-');

  // console.log('id: ', typeof(id))

  let result;
  typeof(id) === 'number' ? result = await search(updateUrl, id) : (
    result = await huesas(updateUrl, id, color)
  )

  // console.log('tempFunction: ', result);

  return result;
};

export const slugify = (text) => {
  console.log('text: ', text)
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

const search = async (id, support) => {
  const response = (
    await axios.get(`${BASE_URL}/api/Core/phones-options-list/`)
  ).data;
  let productList = convertUniqueId(response);

  if (productList.includes(id)) {
    return id;
  } else {
    let ret = getNearestId(productList, id, support);
    // console.log('ret: ', ret);
    return ret;
  }
};

export const getAttributesProduct = (url) => {
  const partUrls = url.split('-');
  // console.assert('partUrls: ', partUrls)

  return {
    color: partUrls[2],
    memory: partUrls[3],
    sim: `${partUrls[4]} + ${partUrls[6]}`,
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

const getNearestId = (productList, id, support) => {
  let temp;
  let tempColor = id.split('-')[support];

  for (let key in productList) {
    temp = productList[key].split('-');
    // console.log('123: ', temp[support], tempColor)
    if (temp[support] === tempColor) {
      // console.log('getNearestID: ', temp.join('-'));
      return temp.join('-');
    }
  }
};