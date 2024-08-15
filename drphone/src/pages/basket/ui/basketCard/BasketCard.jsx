import styles from "./BasketCard.module.scss"


const BasketCard = ({ img, alt, name, price, onClick }) => {
    return (
        <article className={styles.basketCard}>
            <div className={styles.infoBox}>
                <img src={img} alt={alt} />

                <div className={styles.info}>
                    <p>{name}</p>
                    <button onClick={onClick}>Удалить</button>
                </div>

            </div>

            <div className={styles.priceBox}>
                <h2>{price}</h2>
            </div>
        </article>
    )
}

export default BasketCard