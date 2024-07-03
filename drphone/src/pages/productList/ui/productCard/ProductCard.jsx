import styles from "./ProductCard.module.scss"
import {Button} from "../../../../shared/Button/index.js";
import {useNavigate} from "react-router-dom";

export const ProductCard = ({img, alt, title, oldPrice, price, url}) => {
    const navigate = useNavigate();

    return (
        <article className={styles.card}>
            <img src={img} alt={alt}/>

            <div className={styles.info}>
                <h2>{title}</h2>

                <div className={styles.priceBox}>
                    {oldPrice === null && <p className={styles.oldPrice}>{oldPrice}</p>}
                    <p className={styles.price}>{price}</p>
                </div>
                <Button onClick={() => navigate(url)}>Купить</Button>
            </div>
        </article>
    )
}