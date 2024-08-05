import axios from 'axios';
import styles from './FilterColor.module.scss';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { updateProductParams, extractBaseUrl, slugify, availableColors } from '../../model/helpers';
import { useState, useEffect } from 'react';
import { getProductList } from '../../../../entities/product/api/request';
import { BASE_URL } from '../../../../app/setting';
import { dictionary, abbreviatedSlag, abbreviatedSlag1 } from '../../../../shared/untiles/helpers';


export const FilterColor = ({ colorList, active, device }) => {
  const [phoneList, setPhoneList] = useState([]);
  const { productPage, productList } = useParams();
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const type = location.split('/')[2];

  let fullUrl
  let deviceSwitch
  let deviceDevice

  if (productList === 'usedDevices') {
    fullUrl = `${BASE_URL}/${abbreviatedSlag[productPage.split('-')[0]]}`
    deviceSwitch = abbreviatedSlag1[productPage.split('-')[0]]

  } else {
    fullUrl = `${BASE_URL}/${dictionary[type]}`
    deviceSwitch = productList

  }

  const colorClickHandler = async (color) => {
    // console.log('topas: ', productPage, color, 2, device)
    let newUrl = await updateProductParams(productPage, color, 2, deviceSwitch, deviceSwitch);
    navigate(`${extractBaseUrl(location)}${newUrl}`);
  };
  
  useEffect(() => {
    axios
      .get(fullUrl)
      .then((response) => {
        setPhoneList(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных пользователя:', error);
      });
  }, []);

  let colorListFilter;

  if (phoneList) {
    colorListFilter = availableColors(phoneList, productPage.split('-')[1]);
  }

  // phoneList && console.log('productPage: ', productPage)

  return (
    <fieldset className={styles.fieldset}>
      <legend>Цвет</legend>
      <ul className={styles.colorList}>
        {colorListFilter.map((item, index) => {
          return (
            <li key={`${index}|${item.codeColor}`} className={slugify(item.name) === active ? styles.active : ''}>
              <div
                className={styles.btnColor}
                onClick={() => colorClickHandler(item.name)}
                style={{
                  backgroundColor: item.codeColor,
                  display: 'inline-block',
                }}
              ></div>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
};
