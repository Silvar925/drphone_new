import 'swiper/css';
import styles from './Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeSlider = () => {
  return (
    <div className={styles.container}>
      <Swiper slidesPerView={3}>
        <SwiperSlide className={styles.slide}>asdasd</SwiperSlide>
        <SwiperSlide className={styles.slide}>asdasd</SwiperSlide>
        <SwiperSlide className={styles.slide}>asdasd</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
