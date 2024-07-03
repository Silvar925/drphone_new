import styles from "./ProductList.module.scss"
import {ProductCard} from "./productCard/ProductCard.jsx";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {getProductList} from "../../../entities/product/api/request.js";
import {Outlet} from "react-router-dom";


export const ProductList = () => {
    const [products, setProducts] = useState([])
    const {productList, productPage} = useParams()
    getProductList(productList, setProducts, productList)

    return productPage === undefined ? (
        <div className={styles.container}>
            {
                products.map((item, index) => {
                    return (
                        <ProductCard key={index}
                                     img={item.images[0].image}
                                     alt="iPhone 15 Pro"
                                     title={item.phone.name}
                                     url={item.unique_id}
                                     price={item.price}
                                     oldPrice={item.discountedPrice}
                        />
                    )
                })
            }
        </div>
    ) : (<Outlet/>)
}