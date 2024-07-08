import styles from "./MethodsObtainingCard.module.scss"

export const MethodsObtainingCard = ({img, alt}) => {
    return (
        <article className={styles.card}>
            <img src={img} alt={alt}/>
            <div className={styles.cardInfo}>
                <p className={styles.title}>Доставка по России</p>
                <p className={styles.text}>Сегодня, бесплатно</p>
            </div>
        </article>
    )
}