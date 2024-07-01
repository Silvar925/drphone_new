import styles from "./ContactBox.module.scss"
import {Button} from "../../../../shared/Button/index";

import phone from "../assets/pinkPhone.png"
import gps from "../assets/gpsPink.png"

export const ContactBox = () => {
    return (
        <aside className={styles.contactBox}>
            <header>
                <h2>Контакты</h2>
            </header>

            <ul className={styles.contactList}>
                <li>
                    <img src={phone} alt="phone"/>
                    <div className={styles.list}>
                        <p className={styles.title}>Телефон</p>
                        <p className={styles.text}>89383499996</p>
                    </div>
                </li>

                <li>
                    <img src={gps} alt="gps"/>
                    <div className={styles.list}>
                        <p className={styles.title}>Наш адрес</p>
                        <p className={styles.text}>г. Черкесск</p>
                    </div>
                </li>
            </ul>

            <Button>Проложить маршрут</Button>

        </aside>
    )
}