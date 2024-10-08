import styles from './ServicesProducts.module.scss';
import { ServiceProductCard } from '../../../features/serviceProductCard/index.js';
import { useParams, Outlet } from 'react-router-dom';

import phones from './assets/serviceProductCardImages/phone.png';
import usedPhones from './assets/serviceProductCardImages/usedPhones.png';
import accessories from './assets/serviceProductCardImages/accessories.png';
import repair from './assets/serviceProductCardImages/repair.png';
import deviceProtect from './assets/serviceProductCardImages/deviceProtection.png';
import appleMacPro from './assets/serviceProductCardImages/appleMacPro.png';
import covers from './assets/serviceProductCardImages/covers.png';

export const ServicesProducts = () => {
  const { productList } = useParams();

  if (productList !== undefined) {
    return (<Outlet />);
  }

  console.log('productList: ', productList);

  return (
    <section className={styles.container}>
      <div className={styles.serviceList}>
        <div className={styles.row}>
          <ServiceProductCard img={phones} alt="iphone-pro-max" title="Телефоны" url="phones" />
          <ServiceProductCard img={usedPhones} alt="iphone-list" title="БУ устройства" url="usedDevices"/>
          <ServiceProductCard img={accessories} alt="accessories" title="Аксессуары" url="accessories"/>
          <ServiceProductCard img={repair} alt="repair" title="Ремонт" url="/repair"/>
        </div>

        <div className={styles.row}>
          <ServiceProductCard img={deviceProtect} alt="device-protect" title="Защита устройств 360" url="/device-protection"/>
          <ServiceProductCard img={appleMacPro} alt="appleMac" title="I MAC" url="iMac"/>
          <ServiceProductCard img={covers} alt="covers" title="Чехлы" url="covers"/>
        </div>

      </div>
    </section>
  );

};