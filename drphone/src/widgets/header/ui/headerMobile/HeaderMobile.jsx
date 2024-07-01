import styles from "./HeaderMobile.module.scss"

import drphone from "../../../../shared/asset/logo.svg"
import list from "../../../header/"

export const HeaderMobile = () => {
    return (
        <header>
            <div className={styles.inputBox}>
                <button>Список</button>
                <input placeholder="asdasd"/>
                <button>Корзина</button>
            </div>

            <img src={drphone} alt="drphonelogo"/>
        </header>
    )
}