import styles from './Home.module.scss';
import HomeSlider from './homeSlider/HomeSlider';
import { IconSocial } from '../../../shared/footer/IconSocial';

import logo from '../../../shared/asset/logo.svg';
import instagram from '../../../shared/asset/socialNetworkIcon/instagram.svg';
import telegram from '../../../shared/asset/socialNetworkIcon/telegram.svg';
import whatsApp from '../../../shared/asset/socialNetworkIcon/whatsApp.svg';
import alazarStudioLight from '../../../shared/asset/alazarStudioLight.png';

import circles from './assets/circles.svg';
import drPhone from './assets/drPhone.svg';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <ul>
          <li>Доставка по всей России</li>
          <li>Как нас найти</li>
          <li>89383499996</li>
        </ul>
      </div>

      <div className={styles.content}>
        <HomeSlider />

        <div className={styles.animationContainer}>
          <div className={styles.animationBox}>
            <img src={drPhone} alt="drPhone" className={styles.bounce} />
            <img src={circles} alt="circles" className={styles.circles} />
            <button>Написать в телеграм</button>
          </div>

          <div className={styles.glowBox}>
            <div className={`${styles.glow} ${styles.leftGlow}`}></div>
            <div className={`${styles.glow} ${styles.leftGlow}`}></div>
            <div className={`${styles.glow} ${styles.rightGlow}`}></div>
            <div className={`${styles.glow} ${styles.rightGlow}`}></div>
          </div>
        </div>
      </div>

      <div className={styles.socialNetworkBox}>
        <IconSocial
          img={instagram}
          alt="instagramIcon"
          className={styles.icon}
        />
        <IconSocial img={telegram} alt="telegramIcon" className={styles.icon} />
        <IconSocial img={whatsApp} alt="whatsAppIcon" className={styles.icon} />
      </div>
    </div>
  );
};

export default Home;
