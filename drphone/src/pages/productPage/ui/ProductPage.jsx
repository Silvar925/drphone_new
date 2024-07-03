import styles from "./ProductPage.module.scss"
import {FilterColor} from "./filterColor/FilterColor.jsx";
import {useParams} from "react-router-dom";
import {getProduct} from "../../../entities/product/api/request.js";
import {useEffect, useState} from "react";

export const ProductPage = () => {
    const {productPage, productList} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (productList && productPage) {
            getProduct(productList, setProduct, productPage);
        }
    }, [productList, productPage]);


    if (!product) {
        return <div>...Loading</div>;
    }

    return (
        <section className={styles.productContainer}>
            <header>
                <h2>{product.phone.name}</h2>
            </header>

            <div className={styles.content}>
                <div className={styles.productInfo}>
                    <div className={styles.imageBox}>
                        <img src={product.images[0].image} alt={product.phone.name}/>

                        <div className={styles.sliderBox}>
                            {/* Add image slider implementation here */}
                        </div>
                    </div>
                    <div className={styles.filterBox}>
                        <FilterColor colorList={product.color}/>
                    </div>
                </div>
            </div>
        </section>
    );
};