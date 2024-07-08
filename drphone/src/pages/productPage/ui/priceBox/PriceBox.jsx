import styles from "./PriceBox.module.scss"
import {WhiteBox} from "../../../../shared/whiteBox/WhiteBox.jsx";
import {Button} from "../../../../shared/Button/index.js";

export const PriceBox = ({oldPrice, price}) => {
    return (
        <WhiteBox className={styles.priceContainer}>
            <div className={styles.priceBox}>
                <p className={styles.oldPrice}>{oldPrice}</p>
                <p className={styles.price}>{price}</p>
            </div>
            <Button>Купить</Button>
        </WhiteBox>
    )
}