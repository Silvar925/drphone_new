import 'swiper/css';
import styles from './HomeSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperButton } from '../../../../shared/swiper/swiperButton';
import { ProductCard } from '../../../productList/ui/productCard/ProductCard';
import { ServiceProductCard } from '../../../../features/serviceProductCard/index.js';

import phones from '../../../ServicesProducts/ui/assets/serviceProductCardImages/phone.png';
import usedPhones from '../../../ServicesProducts/ui/assets/serviceProductCardImages/usedPhones.png';
import accessories from '../../../ServicesProducts/ui/assets/serviceProductCardImages/accessories.png';
import repair from '../../../ServicesProducts/ui/assets/serviceProductCardImages/repair.png';
import deviceProtect from '../../../ServicesProducts/ui/assets/serviceProductCardImages/deviceProtection.png';
import appleMacPro from '../../../ServicesProducts/ui/assets/serviceProductCardImages/appleMacPro.png';
import covers from '../../../ServicesProducts/ui/assets/serviceProductCardImages/covers.png';

const HomeSlider = () => {
  return (
    <div className={styles.container}>
      <SwiperButton orientation="left" />
      <Swiper slidesPerView={3} spaceBetween={68}>
        <SwiperSlide>
          <ServiceProductCard
            page="home"
            img={phones}
            alt="iphone-pro-max"
            title="Телефоны"
            url="phones"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceProductCard
            page="home"
            img={usedPhones}
            alt="iphone-list"
            title="БУ устройства"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceProductCard
            page="home"
            img={accessories}
            alt="accessories"
            title="Аксессуары"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceProductCard
            page="home"
            img={deviceProtect}
            alt="device-protect"
            title="Защита устройств 360"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceProductCard
            page="home"
            img={appleMacPro}
            alt="appleMac"
            title="I MAC"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceProductCard
            page="home"
            img={covers}
            alt="covers"
            title="Чехлы"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceProductCard
            page="home"
            img={repair}
            alt="repair"
            title="Ремонт"
          />{' '}
        </SwiperSlide>
      </Swiper>
      <SwiperButton orientation="right" />
    </div>
  );
};

export default HomeSlider;
