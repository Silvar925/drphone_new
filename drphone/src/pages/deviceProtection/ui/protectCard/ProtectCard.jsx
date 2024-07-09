import styles from "./ProtectCard.module.scss";

export const ProtectCard = ({img, alt, text}) => {
    return (
        <article className={styles.card}>
            <img src={img} alt={alt} />
            <div className={styles.info}>
                <p>{text}</p>
            </div>
        </article>
    )
}