import styles from './MobileSlider.module.scss';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const MobileSlider = ({ product }) => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper spaceBetween={50} className={styles.sliderBox}>
        {product.images.map((image, index) => (
          <SwiperSlide key={index} className={styles.slider}>
            <img src={image.image} alt="#" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileSlider;
