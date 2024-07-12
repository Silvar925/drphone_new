import styles from './PriceCard.module.scss';

export const PriceCard = ({text, price}) => {
  return (
    <div className={styles.priceCard}>
      <p className={styles.text}>{text}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
};
