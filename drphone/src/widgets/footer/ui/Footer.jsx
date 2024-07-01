import styles from "./Footer.module.scss"
import {IconSocial} from "../../../shared/footer/IconSocial/index.js";

import logo from "../../../shared/asset/logo.svg"
import instagram from "../../../shared/asset/socialNetworkIcon/instagram.svg"
import telegram from "../../../shared/asset/socialNetworkIcon/telegram.svg"
import whatsApp from "../../../shared/asset/socialNetworkIcon/whatsApp.svg"
import alazarStudioLight from  "../../../shared/asset/alazarStudioLight.png"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <img src={logo} alt="drphonelogo"/>
                <ul>
                    <li><span>Политика конфидециальности</span></li>
                    <li><span>Пользовательское соглашение</span></li>
                </ul>
            </div>

            <div className={styles.right}>
                <ul>
                    <li><IconSocial img={instagram} alt="instagramIcon"/></li>
                    <li><IconSocial img={telegram} alt="telegramIcon"/></li>
                    <li><IconSocial img={whatsApp} alt="whatsAppIcon"/></li>
                </ul>
                <img src={alazarStudioLight} alt="alazarStudioLogo"/>
            </div>

        </footer>
    )
}