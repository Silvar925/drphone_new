import styles from './Basket.module.scss';
import BasketCard from './basketCard/BasketCard';

const Basket = () => {
  let basketList = JSON.parse(localStorage.getItem('basketList'));
  return (
    <div className={styles.basketContainer}>
      <section className={styles.basketBox}>
        <header>
          <h2>Корзина</h2>
        </header>

        <hr />

        <ul>
          {basketList.map((item, index) => {
            console.log('item: ', item)
            return (
              <li>
                <BasketCard img={item.image} alt="mnepohui" name={item.name} price={item.price} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Basket;
