import styles from "./MethodsObtaining.module.scss"
import {WhiteBox} from "../../../../shared/whiteBox/WhiteBox.jsx";
import {MethodsObtainingCard} from "../methodsObtainingCard/MethodsObtainingCard.jsx";

import truck from "../asset/truck.svg"
import bag from "../asset/bag.svg"

export const MethodsObtaining = () => {
    return (
        <WhiteBox className={styles.obtainingContainer}>
            <ul>
                <li>
                    <MethodsObtainingCard img={truck} alt="truck" title = "Доставка по России" subtitle="Сегодня бесплатно"/>
                </li>
                <hr/>

                <li>
                    <MethodsObtainingCard img={bag} alt="bag" title = "Самовывоз" subtitle="Сегодня бесплатно" />
                </li>
            </ul>
        </WhiteBox>
    )
}


