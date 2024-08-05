import 'swiper/css';
import styles from './HomeSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperButton } from '../../../../shared/swiper/swiperButton';
import { ServiceProductCard } from '../../../../features/serviceProductCard/index.js';

import phones from '../../../ServicesProducts/ui/assets/serviceProductCardImages/phone.png';
import usedPhones from '../../../ServicesProducts/ui/assets/serviceProductCardImages/usedPhones.png';
import accessories from '../../../ServicesProducts/ui/assets/serviceProductCardImages/accessories.png';
import repair from '../../../ServicesProducts/ui/assets/serviceProductCardImages/repair.png';
import deviceProtect from '../../../ServicesProducts/ui/assets/serviceProductCardImages/deviceProtection.png';
import appleMacPro from '../../../ServicesProducts/ui/assets/serviceProductCardImages/appleMacPro.png';
import covers from '../../../ServicesProducts/ui/assets/serviceProductCardImages/covers.png';
import { useState } from 'react';

const HomeSlider = ({ className }) => {
  const [swiper, setSwiper] = useState(null)

  return (
    <div className={`${styles.container} ${className}`}>
      <SwiperButton orientation="left" onClick={() => swiper.slidePrev()} />

      <Swiper slidesPerView={3} spaceBetween={10} onSwiper={setSwiper}>
        <SwiperSlide className={styles.slide}>
          <ServiceProductCard
            page="home"
            img={phones}
            alt="iphone-pro-max"
            title="Телефоны"
            url="service-products/phones"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <ServiceProductCard
            page="home"
            img={usedPhones}
            alt="iphone-list"
            title="БУ устройства"
            url="service-products/usedDevices"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <ServiceProductCard
            page="home"
            img={accessories}
            alt="accessories"
            title="Аксессуары"
            url="service-products/accessories"
          />
        </SwiperSlide>
        {/* <SwiperSlide className={styles.slide}>
          <ServiceProductCard
            page="home"
            img={deviceProtect}
            alt="device-protect"
            title="Защита устройств 360"
          />
        </SwiperSlide> */}
        <SwiperSlide className={styles.slide}>
          <ServiceProductCard
            page="home"
            img={appleMacPro}
            alt="appleMac"
            title="I MAC"
            url="service-products/iMac"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <ServiceProductCard
            page="home"
            img={covers}
            alt="covers"
            title="Чехлы"
            url="service-products/covers"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <ServiceProductCard
            page="home"
            img={repair}
            alt="repair"
            title="Ремонт"
            url="repair"
          />
        </SwiperSlide>
      </Swiper>
      <SwiperButton orientation="right" onClick={() => swiper.slideNext()} />
    </div>
  );
};

export default HomeSlider;

