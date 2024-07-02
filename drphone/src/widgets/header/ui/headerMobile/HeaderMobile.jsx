import styles from "./HeaderMobile.module.scss"
import React, {useState} from "react";
import {Link} from "react-router-dom";

import drPhone from "../../../../shared/asset/logo.svg"
import list from "../../../../shared/asset/header/list.svg"
import basket from "../../../../shared/asset/header/basket.svg"

export const HeaderMobile = () => {
    const [isOpenList, setIsOpenList] = useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.inputBox}>
                <button onClick={()=> setIsOpenList(!isOpenList)}><img src={list} alt="menu" className={styles.icon}/></button>
                <input />
                <button><img src={basket} alt="basket" className={styles.icon}/></button>
            </div>

            {
                isOpenList === true &&
                <ul>
                    <li><Link to="/phones">Телефоны</Link></li>
                    <li><Link to="/accessories">Аксессуары</Link></li>
                    <li><Link to="/used-devices">БУ Устройства</Link></li>
                    <li><Link to="/repair">Ремонт</Link></li>
                    <li><Link to="/360-protection">Защита устройства 360</Link></li>
                    <li><Link to="/cases">Чехлы</Link></li>
                    <li><Link to="/imac">I MAC</Link></li>
                </ul>
            }

            <img src={drPhone} alt="drphonelogo"/>
        </header>
    )
}