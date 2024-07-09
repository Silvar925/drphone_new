import {cyrillicMap} from '../../../shared/untiles/cyrillicMap';

export const temp = (idProduct, color) => {
    let tempUrl = idProduct.split('-');
    tempUrl[3] = slugify(color);
    let updateUrl = tempUrl.join('-');

    search(updateUrl);

    return updateUrl;
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

const search = (url) => {
};

export const getAttributesProduct = (url) => {
    const partUrls = url.split("-")

    return {
        color: partUrls[4],
        memory: partUrls[5],
        sim: `${partUrls[6]} + ${partUrls[8]}`,
    }
}