import styles from './ProductPage.module.scss';
import { FilterColor } from './filterColor/FilterColor.jsx';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../entities/product/api/request.js';
import { FilterTag } from './filterTag/FilterTag.jsx';
import { PriceBox } from './priceBox/PriceBox.jsx';
import { MethodsObtaining } from './methodsObtaining/MethodsObtaining.jsx';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAttributesProduct } from '../model/helpers.js';
import { useIsMobile } from '../../../shared/hooks/useIsMobile.jsx';
import DesktopSlider from './slider/desktopSlider/DesktopSlider.jsx';
import MobileSlider from './slider/mobileSlider/MobileSlider.jsx';

export const ProductPage = () => {
  const { productPage, productList } = useParams();
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState(null);
  const location = useLocation().pathname;
  let mobile = useIsMobile();

  useEffect(() => {
    if (productList && productPage) {
      getProduct(productList, setProduct, productPage);
    }
  }, [productList, productPage]);

  const attributesProduct = getAttributesProduct(location);

  return product ? (
    <section className={styles.productContainer}>
      <header>
        <h2>{product.name}</h2>
      </header>

      <div className={styles.content}>
        <div className={styles.productInfo}>
          {mobile !== true ? (
            <div className={styles.imageBox}>
              <div className={styles.imgBox}>
                <img
                  src={image === null ? product.images[0].image : image}
                  alt={product.device.name}
                />
              </div>
              <DesktopSlider product={product} setImage={setImage} />
            </div>
          ) : (
            <MobileSlider product={product} />
          )}

          <div className={styles.filterBox}>
            <FilterColor
              colorList={product.device.allColors}
              active={attributesProduct.color}
              device = {productList}
            />
            <FilterTag
              tagList={product.device.allMemory}
              type="size"
              title="Память"
              active={attributesProduct.memory}
              device = {productList}
            />
            <FilterTag
              tagList={product.device.allSim}
              type="type"
              title="SIM"
              active={attributesProduct.sim}
              device = {productList}
            />
          </div>
        </div>
        <ul className={styles.infoBox}>
          <li>
            <PriceBox
              price={product.price}
              oldPrice={product.discountedPrice}
              phoneInfo={product}
            />
          </li>
          <li>
            <MethodsObtaining />
          </li>
        </ul>
      </div>
    </section>
  ) : (
    <div className={styles.loading}>Товара нет в наличии</div>
  );
};
