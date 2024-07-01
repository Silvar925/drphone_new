import styles from "./HeaderDesktop.module.scss"
import {MenuButton, ListButton} from "../../../../shared/Header/buttons/index.js";
import {Link} from "react-router-dom";

import logo from "../../../../shared/asset/logo.svg"

export const HeaderDesktop = () => {
    return (
        <header className={styles.mainHeader}>
            <MenuButton/>
            <div className={styles.logoBox}>
                <Link to="/">
                    <img src={logo} alt="drphone_logo"/>
                </Link>
                {/*<h2>Что то там</h2>*/}
            </div>
            <ListButton/>
        </header>
    )
}