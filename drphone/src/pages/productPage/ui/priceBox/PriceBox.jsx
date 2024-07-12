import styles from './PriceBox.module.scss';
import { WhiteBox } from '../../../../shared/whiteBox/WhiteBox.jsx';
import { Button } from '../../../../shared/Button/index.js';
import { convetProductInfo } from '../../model/priceBox.js';

export const PriceBox = ({ oldPrice, price, phoneInfo }) => {
  const handleBuyButtonClick = () => {
    let basketList = JSON.parse(localStorage.getItem('basketList')) || [];
    basketList.push(convetProductInfo(phoneInfo));
    localStorage.setItem('basketList', JSON.stringify(basketList));
  };

  return (
    <WhiteBox className={styles.priceContainer}>
      <div className={styles.priceBox}>
        <p className={styles.oldPrice}>{oldPrice}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <Button onClick={handleBuyButtonClick}>Добавить в корзину</Button>
    </WhiteBox>
  );
};

