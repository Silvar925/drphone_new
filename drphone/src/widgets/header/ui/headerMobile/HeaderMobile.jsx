import styles from "./HeaderMobile.module.scss"
import React, { useState } from "react";
import { Link } from "react-router-dom";

import drPhone from "../../../../shared/asset/logo.svg"
import list from "../../../../shared/asset/header/list.svg"
import basket from "../../../../shared/asset/header/basket.svg"

export const HeaderMobile = () => {
    const [isOpenList, setIsOpenList] = useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.inputBox}>
                <button onClick={() => setIsOpenList(!isOpenList)}><img src={list} alt="menu" className={styles.icon} /></button>
                <input />
                <button><img src={basket} alt="basket" className={styles.icon} /></button>
            </div>

            {
                isOpenList === true &&
                <ul>
                    <li>
                        <Link to="/service-products/phones">Телефоны</Link>
                    </li>
                    <li>
                        <Link to="/map">Карта</Link>
                    </li>
                    <li>
                        <Link to="/service-products/accessories">Аксессуары</Link>
                    </li>
                    <li>
                        <Link to="/service-products/usedDevices">БУ Устройства</Link>
                    </li>
                    <li>
                        <Link to="/repair">Ремонт</Link>
                    </li>
                    <li>
                        <Link to="/device-protection">Защита устройства 360</Link>
                    </li>
                    <li>
                        <Link to="/service-products/covers">Чехлы</Link>
                    </li>
                    <li>
                        <Link to="/service-products/iMac">I MAC</Link>
                    </li>
                </ul>
            }

            <img src={drPhone} alt="drphonelogo" />
        </header>
    )
}