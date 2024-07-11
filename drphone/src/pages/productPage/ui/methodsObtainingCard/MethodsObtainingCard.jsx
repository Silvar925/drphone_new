import styles from "./MethodsObtainingCard.module.scss"

export const MethodsObtainingCard = ({img, alt, title, subtitle}) => {
    return (
        <article className={`${styles.card} ${title === "Доставка по всей России" ? styles.cardDelivery : ""}`}>
            <img src={img} alt={alt}/>
            <div className={styles.cardInfo}>
                <p className={styles.title}>{title}</p>
                <p className={styles.text}>{subtitle}</p>
            </div>
        </article>
    )
}