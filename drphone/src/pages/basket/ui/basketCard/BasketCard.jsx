import styles from "./BasketCard.module.scss"


const BasketCard = ({ img, alt, name }) => {
    return (
        <article className={styles.basketCard}>
            <div className={styles.infoBox}>
                <img src={img} alt={alt} />

                <div className={styles.info}>
                    {name}
                    <button>Удалить</button>
                </div>

            </div>

            <div className={styles.priceBox}>
                <h2>90000</h2>
            </div>
        </article>
    )
}

export default BasketCard