import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './DesktopSlider.module.scss';
import { SwiperButton } from '../../../../../shared/swiper/swiperButton/index.js';
import { useState } from 'react';


const DesktopSlider = ({ product, setImage }) => {
  const [swiper, setSwiper] = useState(null);

  return (
    <div className={styles.sliderContainer}>
      <SwiperButton orientation="left" onClick={() => swiper.slidePrev()} />

      <Swiper
        className={styles.sliderBox}
        spaceBetween={50}
        slidesPerView={3}
        onSwiper={setSwiper}
      >
        {product.images.map((image, index) => (
          <SwiperSlide
            key={index}
            className={styles.slide}
            onClick={() => setImage(image.image)}
          >
            <img src={image.image} alt="#" />
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperButton orientation="right" onClick={() => swiper.slideNext()} />
    </div>
  );
};

export default DesktopSlider;
