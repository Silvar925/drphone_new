import styles from "./ContactCard.module.scss"

export const ContactCard = ({img, alt, title, text, className}) => {
    return (
        <article className={`${styles.card} ${className}`}>
            <img src={img} alt={alt}/>

            <div className={styles.content}>
                <p>{title}</p>
                <p>{text}</p>
            </div>

        </article>
    )
}