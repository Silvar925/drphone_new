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
                    <MethodsObtainingCard img={truck} alt="truck"/>
                </li>
                <hr/>

                <li>
                    <MethodsObtainingCard img={bag} alt="bag"/>
                </li>
            </ul>
        </WhiteBox>
    )
}


