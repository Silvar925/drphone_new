import styles from './Map.module.scss';
import {ContactBox} from "./contactBox/ContactBox.jsx";
import {ContactBoxMobile} from "./contactBoxMobile/ContactBoxMobile.jsx";
import {useIsMobile} from "../../../shared/hooks/useIsMobile.jsx";

export const Map = () => {
    const isMobile = useIsMobile();

    return (
        <section className={styles.container} style={isMobile ? {marginTop: '24px'} : {}}>
            {
                isMobile === false ? <ContactBox/> : <ContactBoxMobile/>
            }

            <div style={{position: 'relative', overflow: 'hidden'}}>
                <a
                    href="https://yandex.ru/maps/1104/cherkessk/?utm_medium=mapframe&utm_source=maps"
                    style={{
                        color: '#eee',
                        fontSize: '12px',
                        position: 'absolute',
                        top: '0px',
                    }}
                >
                    Черкесск
                </a>
                <a
                    href="https://yandex.ru/maps/1104/cherkessk/house/prospekt_lenina_154/YEsYdgNjQUQDQFpufX5wcn9lZQ==/?ll=42.043814%2C44.213361&utm_medium=mapframe&utm_source=maps&z=17.06"
                    style={{
                        color: '#eee',
                        fontSize: '12px',
                        position: 'absolute',
                        top: '14px',
                    }}
                >
                    Проспект Ленина, 154 — Яндекс Карты
                </a>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=42.043814%2C44.213361&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozMzMyOTQ2NzA1EoAB0KDQvtGB0YHQuNGPLCDQmtCw0YDQsNGH0LDQtdCy0L4t0KfQtdGA0LrQtdGB0YHQutCw0Y8g0KDQtdGB0L_Rg9Cx0LvQuNC60LAsINCn0LXRgNC60LXRgdGB0LosINC_0YDQvtGB0L_QtdC60YIg0JvQtdC90LjQvdCwLCAxNTQiCg3cLChCFXzaMEI%2C&z=17.06"
                    width="100%"
                    height="742"
                    frameBorder="1"
                    allowFullScreen
                    style={{position: 'relative'}}
                ></iframe>
            </div>
            )
        </section>
    )
}