import styles from './AltProtectCard.module.scss';

export const AltProtectCard = ({ title, text }) => {
  return (
    <article className={styles.card}>
      <header>
        <h2>{title}</h2>
      </header>
      <p>{text}</p>
    </article>
  );
};
