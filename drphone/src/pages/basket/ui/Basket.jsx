import { useEffect, useState } from 'react';
import styles from './Basket.module.scss';
import BasketCard from './basketCard/BasketCard';

const Basket = () => {
  const [basketList, setBasketList] = useState([]);

  useEffect(() => {
    const storedBasketList = JSON.parse(localStorage.getItem('basketList')) || [];
    setBasketList(storedBasketList);
  }, []);

  const deleteItemBasket = (item) => {
    const updatedBasketList = basketList.filter(basketItem => basketItem.name !== item.name);
    setBasketList(updatedBasketList);
    localStorage.setItem('basketList', JSON.stringify(updatedBasketList));
  }

  return (
    <div className={styles.basketContainer}>
      <section className={styles.basketBox}>
        <header>
          <h2>Корзина</h2>
        </header>

        <hr />

        <ul>
          {basketList.map((item, index) => (
            <li key={index}>
              <BasketCard img={item.image} alt="mnepohui" name={item.name} price={item.price} onClick={() => deleteItemBasket(item)} />
            </li>
          ))}
        </ul>

      </section>
    </div>
  );
};

export default Basket;