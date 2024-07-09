import { cyrillicMap } from '../../../shared/untiles/cyrillicMap';
import {getAllMemoryProduct} from "../../../entities/product/api/request";

export const temp = (idProduct, color) => {
  let tempUrl = idProduct.split('-');
  tempUrl[3] = slugify(color);
  let updateUrl = tempUrl.join('-');

  search(updateUrl);

  return updateUrl;
};

const slugify = (text) => {
  const transliterated = text
    .split('')
    .map((char) => cyrillicMap[char] || char)
    .join('');
  return transliterated;
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

const search = (url) => {
  getAllMemoryProduct(url)
};
