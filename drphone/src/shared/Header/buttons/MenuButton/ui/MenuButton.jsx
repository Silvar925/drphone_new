import styles from "./MenuButton.module.scss"

import menuIcon from "./asset/menu.svg"

export const MenuButton = () => {
    return (
        <button className={styles.button}>
            <img src={menuIcon} alt="menu"/>
        </button>
    )
}