import styles from './HeaderDesktop.module.scss';
import { useState, useEffect, useRef } from 'react';
import {
  MenuButton,
  ListButton,
} from '../../../../shared/Header/buttons/index.js';
import { Link } from 'react-router-dom';
import logo from '../../../../shared/asset/logo.svg';
import { pages } from '../../../../shared/untiles/helpers.js';
import { useParams, useLocation } from 'react-router-dom';

export const HeaderDesktop = () => {
  const [isOpenList, setIsOpenList] = useState(false);
  const listRef = useRef(null);
  const location = useLocation().pathname;
  const { productList } = useParams();
  console.log('productList: ', productList)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setIsOpenList(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.mainHeader}>
      <MenuButton url="/service-products" />
      <div className={styles.logoBox}>
        <Link to="/">
          <img src={logo} alt="drphone_logo" />
        </Link>
        <h2>{ productList === undefined ? pages[location] : pages[productList]}</h2>
      </div>
      <ListButton onClick={() => setIsOpenList(!isOpenList)} />

      <ul
        ref={listRef}
        className={`${styles.menuList} ${
          isOpenList ? styles.menuListOpen : ''
        }`}
      >
        <li>
          <Link to="/service-products/phones">Телефоны</Link>
        </li>
        <li>
          <Link to="/map">Карта</Link>
        </li>
        <li>
          <Link to="/service-products/accessories">Аксессуары</Link>
        </li>
        <li>
          <Link to="/service-products/used-devices">БУ Устройства</Link>
        </li>
        <li>
          <Link to="/repair">Ремонт</Link>
        </li>
        <li>
          <Link to="/device-protection">Защита устройства 360</Link>
        </li>
        <li>
          <Link to="/service-products/cases">Чехлы</Link>
        </li>
        <li>
          <Link to="/service-products/imac">I MAC</Link>
        </li>
      </ul>
    </header>
  );
};
