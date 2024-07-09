import styles from "./ProductPage.module.scss"
import { FilterColor } from "./filterColor/FilterColor.jsx";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../entities/product/api/request.js";
import { FilterTag } from "./filterTag/FilterTag.jsx";
import { PriceBox } from "./priceBox/PriceBox.jsx";
import { MethodsObtaining } from "./methodsObtaining/MethodsObtaining.jsx";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SwiperButton } from "../../../shared/swiper/swiperButton/index.js";


export const ProductPage = () => {
    const { productPage, productList } = useParams();
    const [product, setProduct] = useState(null);
    const [swiper, setSwiper] = useState(null);
    const [image, setImage] = useState(null)

    useEffect(() => {
        if (productList && productPage) {
            getProduct(productList, setProduct, productPage);
        }
    }, [productList, productPage]);


    return product ? (
        <section className={styles.productContainer}>
            <header>
                <h2>{product.phone.name}</h2>
            </header>

            <div className={styles.content}>
                <div className={styles.productInfo}>
                    <div className={styles.imageBox}>
                        <div className={styles.imgBox}>
                            <img src={image === null ? product.images[0].image : image} alt={product.phone.name} />
                        </div>

                        <div className={styles.sliderContainer}>
                            <SwiperButton orientation="left" onClick={() => swiper.slidePrev()} />

                            <Swiper
                                className={styles.sliderBox}
                                spaceBetween={50}
                                slidesPerView={3}
                                onSwiper={setSwiper}
                            >
                                {product.images.map((image, index) => (
                                    <SwiperSlide key={index} className={styles.slide} onClick={() => setImage(image.image)}>
                                        <img src={image.image} alt="#" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <SwiperButton orientation="right" onClick={() => swiper.slideNext()} />
                        </div>
                    </div>
                    <div className={styles.filterBox}>
                        <FilterColor colorList={product.phone.allColors} />
                        <FilterTag tagList={product.phone.allMemory} type="size" title="Память" />
                        <FilterTag tagList={product.phone.allSim} type="type" title="SIM" />
                    </div>
                </div>
                <ul className={styles.infoBox}>
                    <li><PriceBox price={product.price} oldPrice={product.discountedPrice} /></li>
                    <li><MethodsObtaining /></li>
                </ul>
            </div>
        </section>
    ) : (
        <div className={styles.loading}>...Loading</div>
    )
};