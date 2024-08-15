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
                        <Link to="/service-products/phones" onClick={() => setIsOpenList(false)}>Телефоны</Link>
                    </li>
                    <li>
                        <Link to="/map" onClick={() => setIsOpenList(false)}>Карта</Link>
                    </li>
                    <li>
                        <Link to="/service-products/accessories" onClick={() => setIsOpenList(false)}>Аксессуары</Link>
                    </li>
                    <li>
                        <Link to="/service-products/usedDevices" onClick={() => setIsOpenList(false)}>БУ Устройства</Link>
                    </li>
                    <li>
                        <Link to="/repair" onClick={() => setIsOpenList(false)}>Ремонт</Link>
                    </li>
                    <li>
                        <Link to="/device-protection" onClick={() => setIsOpenList(false)}>Защита устройства 360</Link>
                    </li>
                    <li>
                        <Link to="/service-products/covers" onClick={() => setIsOpenList(false)}>Чехлы</Link>
                    </li>
                    <li>
                        <Link to="/service-products/iMac" onClick={() => setIsOpenList(false)}>I MAC</Link>
                    </li>
                </ul>
            }

            <img src={drPhone} alt="drphonelogo" />
        </header>
    )
}