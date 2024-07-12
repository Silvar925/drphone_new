import styles from './Repair.module.scss';
import { PriceCard } from './priceCard/PriceCard';
import { priceLsit } from '../../../shared/untiles/helpers';

import repair from './asset/repair.png';
import { useIsMobile } from '../../../shared/hooks/useIsMobile';

export const Repair = () => {
  const mobile = useIsMobile();

  return (
    <div className={styles.repairContainer}>
      <section className={styles.videoBox}>
        <header>
          <h2>Ремонт</h2>
        </header>
        <video width="100%" height={mobile ? 'auto' : '570px'} controls>
          <source src="phoneRepairsVideo.mp4" />
        </video>
      </section>

      <aside className={styles.warningBox}>
        <p>
          <span>Внимание ! </span>
          На сайте указаны только примерные расценки на ремонтные услуги,
          финальная стоимость складывается для каждого клиента индивидуально и
          зависит от сложности ремонта.
        </p>
      </aside>

      <section className={styles.listBox}>
        <ul>
            {
                priceLsit.map((item, index) => {
                  return <li key={index}><PriceCard text={item.name} price={item.price} /></li>
                })
            }
        </ul>

        <img src={repair} alt="repair" />
      </section>
    </div>
  );
};
