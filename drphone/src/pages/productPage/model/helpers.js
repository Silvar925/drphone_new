import axios from 'axios';
import { cyrillicMap } from '../../../shared/untiles/cyrillicMap';
import { BASE_URL } from '../../../app/setting';
import { huesas } from './temp';
import { dictionary } from '../../../shared/untiles/helpers';


export const updateProductParams = async (idProduct, color, id, device) => {
  let tempUrl = idProduct.split('-');
  console.log('device: ', device)
console.log('idProduct: ', idProduct.split("-")[idProduct.split("-").length - 1])

  tempUrl[id] = slugify(color);
  let updateUrl = tempUrl.join('-');

  // console.log('update: ', updateUrl, tempUrl)
  let phone = idProduct.split('-')[1]

  let result;
  if (typeof (id) === 'number') {
    // console.log('topas: ', true, used)
    result = await search(updateUrl, id, device, phone, device);
  } else {
    console.log('topas: ', false)
    result = await huesas(updateUrl, id, color, device, idProduct.split("-")[1]);
  }

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
  // console.log('search: ', used)
  const response = (
    await axios.get(`${BASE_URL}/${dictionary[device]}`)
  ).data;

  let productList = convertUniqueId2(response);

  console.log('convert: ', productList)

  if (productList.includes(id)) {
    console.log('include: ', id)
    return id;
  } else {
    let ret = getNearestId(productList, id, support, phone);
    console.log('ret: ', ret);
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

export const convertUniqueId = (uniqueIdList, phone) => {
  let arrat = [];
  console.log('phone: ', phone)
  for (let key in uniqueIdList) {
    console.log('123: ', uniqueIdList[key].unique_id.split('-')[1], phone)
    if (uniqueIdList[key].unique_id.split('-')[1] === phone) {
      arrat.push(uniqueIdList[key].unique_id);
    }
  }

  return arrat;
};

export const convertUniqueId2 = (uniqueIdList, phone) => {
  let arrat = [];
  console.log('phone: ', phone)
  for (let key in uniqueIdList) {
    arrat.push(uniqueIdList[key].unique_id);
  }

  return arrat;
};

const getNearestId = (productList, id, support, phone) => {
  // console.log('parametr: ', productList, id, support)
  // console.log('used: ', used)

  let temp;
  let tempColor = id.split('-')[support];

  for (let key in productList) {
    // productList[key].split('-')[productList[key].split('-').length-1]
    if (productList[key].split('-')[1] === phone) {
      temp = productList[key].split('-');

      // console.log('temp: ', temp)

      // console.log('two: ', temp[support], tempColor)

      if (temp[support] === tempColor) {
        console.log('getNearestID: ', temp.join('-'));
        return temp.join('-');
      }
    }

  }
};


export const availableColors = (phoneList, phone) => {
  let colorSet = new Set();
  if (phoneList.length > 0) {
    for (let key in phoneList) {
      if (phoneList[key].unique_id.split('-')[1] === phone) {
        colorSet.add(JSON.stringify(phoneList[key].color));
      }
    }
  }
  let uniqueColors = Array.from(colorSet).map(item => JSON.parse(item));
  return uniqueColors;
}


export const availableMemory = (phoneList, phone) => {
  let memorySet = new Set();
  if (phoneList.length > 0) {
    for (let key in phoneList) {
      if (phoneList[key].unique_id.split('-')[1] === phone) {
        memorySet.add(JSON.stringify(phoneList[key].memory));
      }
    }
  }
  let uniqueMemory = Array.from(memorySet).map(item => JSON.parse(item));
  return uniqueMemory;
}

export const availableSim = (phoneList, phone) => {
  let simSet = new Set();
  if (phoneList.length > 0) {
    for (let key in phoneList) {
      if (phoneList[key].unique_id.split('-')[1] === phone) {
        simSet.add(JSON.stringify(phoneList[key].sim));
      }
    }
  }
  let uniqueSim = Array.from(simSet).map(item => JSON.parse(item));
  return uniqueSim;
}