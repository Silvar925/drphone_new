import styles from './ServiceProductCard.module.scss'
import {useNavigate} from "react-router-dom";


export const ServiceProductCard = ({img, alt, title, url, page}) => {
    const navigate = useNavigate();

    return (
        <article className={`${styles.card} ${ page === 'home' ? styles.homePage : styles.producList}` } onClick={() => navigate(url)}>
            <img src={img} alt={alt}/>

            <header>
                <h2>{title}</h2>
            </header>

        </article>
    )
}