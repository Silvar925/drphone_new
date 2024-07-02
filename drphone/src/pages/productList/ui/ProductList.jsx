import styles from "./ProductList.module.scss"
import {ProductCard} from "./productCard/ProductCard.jsx";

export const ProductList = () => {
    return (
        <div className={styles.container}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    )
}