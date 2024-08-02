import styles from "./HomeMobile.module.scss";
import { Link } from "react-router-dom";

import circles from '../assets/circles.svg';
import drPhone from '../assets/drPhone.svg';
import telegram from '../../../../shared/asset/socialNetworkIcon/telegram.svg';

import iMac from '../assets/iMac.svg';
import phone from '../assets/phone.svg';
import truck from '../assets/truck.svg';

import phones from '../assets/phone.png';
import usedPhones from '../assets/usedPhones.png';
import accessories from '../assets/accessories.png';
import repair from '../assets/repair.png';
import deviceProtect from '../assets/deviceProtection.png';
import appleMacPro from '../assets/appleMacPro.png';
import covers from '../assets/covers.png';

import { ServiceProductCard } from "../../../../features/serviceProductCard";

const HomeMobile = () => {
    return (
        <main className={styles.container}>
            <section className={styles.mainSection}>
                <div className={styles.animationBox}>
                    <img src={drPhone} alt="drPhone" className={styles.bounce} />
                    <img src={circles} alt="circles" className={styles.circles} />
                </div>
                <Link to="/map">
                    <img src={telegram} alt="#" />
                    <p>Написать в телеграм</p>
                </Link>
            </section>

            <section className={styles.infoBox}>
                <ul>
                    <li>
                        <Link to="">
                            <img src={truck} alt="#" />
                            <p>Доставка по России</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/map">
                            <img src={iMac} alt="#" />
                            <p>Как нас найти</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <img src={phone} alt="#" />
                            <p>89383499996</p>
                        </Link>
                    </li>
                </ul>
            </section>

            <section className={styles.serviceListBox}>
                <ul className={styles.mainGrid}>
                    <li><ServiceProductCard img={phones} alt="iphone-pro-max" title="Телефоны" url="phones" /></li>
                    <li><ServiceProductCard img={usedPhones} alt="iphone-list" title="БУ устройства" url="usedDevices" /></li>
                    <li><ServiceProductCard img={accessories} alt="accessories" title="Аксессуары" url="accessories" /></li>
                    <li><ServiceProductCard img={repair} alt="repair" title="Ремонт" url="/repair" /></li>
                    <li><ServiceProductCard img={deviceProtect} alt="device-protect" title="Защита устройств 360" url="/device-protection" /></li>
                    <li><ServiceProductCard img={appleMacPro} alt="appleMac" title="I MAC" url="iMac" /></li>

                </ul>

                <ul style={{
                    marginTop: '35px',
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <li style={{
                        width: '50%'
                    }}><ServiceProductCard img={covers} alt="covers" title="Чехлы" url="covers" /></li>
                </ul>
            </section>

        </main>
    )
}

export default HomeMobile