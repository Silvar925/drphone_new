import styles from "./ServicesProducts.module.scss"
import {ServiceProductCard} from "../../../features/serviceProductCard/index.js";
import {useParams, Outlet} from "react-router-dom";

import phones from "./assets/serviceProductCardImages/phone.png"
import usedPhones from "./assets/serviceProductCardImages/usedPhones.png"
import accessories from "./assets/serviceProductCardImages/accessories.png"
import repair from "./assets/serviceProductCardImages/repair.png"
import deviceProtect from "./assets/serviceProductCardImages/deviceProtection.png"
import appleMacPro from "./assets/serviceProductCardImages/appleMacPro.png"
import covers from "./assets/serviceProductCardImages/covers.png"
import React from "react";

export const ServicesProducts = () => {
    const {productList} = useParams();

    console.log(productList);

    if (productList === undefined) {
        return (
            <section className={styles.container}>
                <div className={styles.serviceList}>
                    <div className={styles.row}>
                        <ServiceProductCard img={phones} alt="iphone-pro-max" title="Телефоны" url="phones"/>
                        <ServiceProductCard img={usedPhones} alt="iphone-list" title="БУ устройства"/>
                        <ServiceProductCard img={accessories} alt="accessories" title="Аксессуары"/>
                        <ServiceProductCard img={repair} alt="repair" title="Ремонт"/>
                    </div>

                    <div className={styles.row}>
                        <ServiceProductCard img={deviceProtect} alt="device-protect" title="Защита устройств 360"/>
                        <ServiceProductCard img={appleMacPro} alt="appleMac" title="I MAC"/>
                        <ServiceProductCard img={covers} alt="covers" title="Чехлы"/>
                    </div>

                </div>
            </section>
        )
    } else {
        return (<Outlet/>)
    }
}