import styles from "./Basket.module.scss"
import BasketCard from "./basketCard/BasketCard";

const Basket = () => {
    return (
        <div className={styles.basketContainer}>
            <section className={styles.basketBox}>
                <header>
                    <h2>Корзина</h2>
                </header>

                <hr />

                <ul>
                    <li><BasketCard img="#" alt="#" name="Apple iPhone 15"/></li>
                    <li><BasketCard img="#" alt="#" name="Apple iPhone 15"/></li>
                    <li><BasketCard img="#" alt="#" name="Apple iPhone 15"/></li>
                </ul>

            </section>
        </div>
    )
}

export default Basket;