import styles from "./ContactBoxMobile.module.scss"
import {ContactCard} from "../../../../shared/map/contactCard/ContactCard.jsx";
import {Button} from "../../../../shared/Button/index.js";
import phone from "../../../../shared/asset/pinkIcon/pinkPhone.png"
import gps from "../../../../shared/asset/pinkIcon/gpsPink.png"

export const ContactBoxMobile = () => {
    return (
        <article className={styles.contactBox}>
            <header>
                <h2>Контакты</h2>
            </header>

            <div className={styles.content}>
                <ul>
                    <li>
                        <ContactCard img={phone} alt="pinkPhone" title="Телефон" text="89383499996"
                                     className={styles.card}/>
                    </li>

                    <li>
                        <ContactCard img={gps} alt="pinkGPS" title="Наш адресс" text="г. Черкесск"
                                     className={styles.card}/>
                    </li>
                </ul>
                <Button className={styles.button}>Проложить маршрут</Button>
            </div>

        </article>
    )
}