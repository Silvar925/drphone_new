import styles from './DeviceProtection.module.scss';
import { ProtectCard } from './protectCard/ProtectCard';
import { AltProtectCard } from './altProtectCard/AltProtectCard';

import touch from './assets/touch.svg';
import shield from './assets/shield.svg';
import deviceProtect from './assets/deviceProtect.svg';
import protect from './assets/protect.png';

export const DeviceProtection = () => {
  return (
    <div className={styles.deviceProtectionContainer}>
      <section className={styles.mainAdvantagesBox}>
        <img src={protect} alt="mnepohui" />

        <ul>
          <li>
            <ProtectCard
              img={touch}
              alt="touch"
              text="Не ухудшает чувсвительность сенсора и не влияет на цветопередачу!"
            />
          </li>
          <li>
            <ProtectCard
              img={shield}
              alt="shield"
              text="Комплект из одной пленки для защиты 360"
            />
          </li>
          <li>
            <ProtectCard
              img={deviceProtect}
              alt="защита устройства 360"
              text="Надежная защита телефона от ударов и царапин"
            />
          </li>
        </ul>
      </section>

      <section className={styles.altAdvantagesBox}>
        <ul>
          <li>
            <AltProtectCard
              title="01"
              text="Прочный полимерный материал обеспечивает надежную защиту от царапин и падений."
            />
          </li>
          <li>
            <AltProtectCard
              title="02"
              text="Практически не заметна на экране."
            />
          </li>
          <li>
            <AltProtectCard
              title="03"
              text="Пленка повторяет геометрию и вырезы именно вашего смартфона."
            />
          </li>
          <li>
            <AltProtectCard title="04" text="Самовосстанавливается." />
          </li>
          <li>
            <AltProtectCard
              title="05"
              text="Не оставляет отпечатков, а так же очень просто очищается при загрязнениях."
            />
          </li>
          <li>
            <AltProtectCard
              title="06"
              text="Не пузырится, проста в поклейке."
            />
          </li>
        </ul>
      </section>
    </div>
  );
};
