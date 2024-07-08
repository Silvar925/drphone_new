import styles from "./ProductPage.module.scss"
import {FilterColor} from "./filterColor/FilterColor.jsx";
import {useParams} from "react-router-dom";
import {getProduct} from "../../../entities/product/api/request.js";
import {FilterTag} from "./filterTag/FilterTag.jsx";
import {PriceBox} from "./priceBox/PriceBox.jsx";
import {MethodsObtaining} from "./methodsObtaining/MethodsObtaining.jsx";
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';


export const ProductPage = () => {
    const {productPage, productList} = useParams();
    const [product, setProduct] = useState(null);

    console.log(product)

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

                            <Swiper
                                className={styles.slider}
                                spaceBetween={50}
                                slidesPerView={3}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                {
                                   product.images.map((image, index) => (
                                       <SwiperSlide><img src={image.image} alt="#"/></SwiperSlide>
                                   ))
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div className={styles.filterBox}>
                        <FilterColor colorList={product.phone.allColors}/>
                        <FilterTag tagList={product.phone.allMemory} type="size" title="Память"/>
                        <FilterTag tagList={product.phone.allSim} type="type" title="SIM"/>
                    </div>
                </div>
                <ul className={styles.infoBox}>
                    <li><PriceBox price={product.price} oldPrice={product.discountedPrice}/></li>
                    <li><MethodsObtaining/></li>
                </ul>
            </div>
        </section>
    );
};