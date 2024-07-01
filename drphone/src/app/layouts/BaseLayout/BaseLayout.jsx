import {Outlet} from "react-router-dom"
import styles from "./BaseLayout.module.scss"
import {Header} from "../../../widgets/header/index"
import {Footer} from "../../../widgets/footer/index.js";

export const BaseLayout = () => {
    return (
        <main className={styles.layout}>
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
    )
}