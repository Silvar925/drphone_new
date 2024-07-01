import styles from './ServiceProductCard.module.scss'

export const ServiceProductCard = ({img, alt, title, url}) => {
    return (
        <article className={styles.card}>
            <img src={img} alt={alt}/>

            <header>
                <h2>{title}</h2>
            </header>

        </article>
    )
}