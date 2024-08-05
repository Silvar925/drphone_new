import styles from './ProductList.module.scss';
import { ProductCard } from './productCard/ProductCard.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductList } from '../../../entities/product/api/request.js';
import { Outlet } from 'react-router-dom';


export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { productList, productPage } = useParams();

  const [phones, setPhones] = useState([]);
  const [imacList, setImacList] = useState([]);
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    // console.log('useEffect called with productList:', productList);
    if (productList !== 'usedDevices') {
      getProductList(productList, setProducts, productList);
    } else {
      // console.log('Fetching used devices');
      getProductList('phones', setPhones, 'phones');
      getProductList('iMac', setImacList, 'iMac');
      getProductList('accessories', setAccessories, 'accessories');
    }
  }, [productList]);

  const renderProductCards = (items) => {
    return items.map((item, index) => {
      if (item.used === true) {
        return (
          <ProductCard key={index}
            img={item.images[0].image}
            alt="Product Image"
            title={item.device.name}
            url={item.unique_id}
            price={item.price}
            oldPrice={item.discountedPrice}
          />
        );
      } else {
        return null;
      }
    });
  };

  if (productList !== 'usedDevices') {
    return productPage === undefined ? (
      <div className={styles.container}>
        {products.map((item, index) => {
          if (item.used === false) {
            return (
              <ProductCard key={index}
                img={item.images[0].image}
                alt="iPhone 15 Pro"
                title={item.device.name}
                url={item.unique_id}
                price={item.price}
                oldPrice={item.discountedPrice}
              />

            );
          } else {
            return null;
          }
        })}
      </div>
    ) : (<Outlet />);
  } else {
    return productPage === undefined ? (
      <div className={styles.container}>
        {renderProductCards(phones)}
        {renderProductCards(imacList)}
        {renderProductCards(accessories)}
      </div>
    ) : (<Outlet />);
  }
};