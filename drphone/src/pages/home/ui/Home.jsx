import styles from "./Home.module.scss";
import HomeSlider from "./homeSlider/HomeSlider";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <ul>
                    <li>Доставка по всей России</li>
                    <li>Как нас найти</li>
                    <li>89383499996</li>
                </ul>
            </div>

            <div className={styles.content}>
                <HomeSlider/>
            </div>

            <div className={styles.socialNetworkBox}>

            </div>

        </div>
    )
}

export default Home;