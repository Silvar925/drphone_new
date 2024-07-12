export const convetProductInfo = (phone) => {
    console.log('phone: ', phone)
    return { name: phone.name, price: phone.price, image: phone.images[0].image }; // Лучше использовать объект, а не массив
  };
  