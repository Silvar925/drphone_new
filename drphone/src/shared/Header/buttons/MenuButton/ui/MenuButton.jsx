import styles from "./MenuButton.module.scss"
import {Link} from "react-router-dom";

import menuIcon from "./asset/menu.svg"

export const MenuButton = ({url}) => {
    return (
        <Link to={url} className={styles.button}>
            <img src={menuIcon} alt="menu"/>
        </Link>
    )
}