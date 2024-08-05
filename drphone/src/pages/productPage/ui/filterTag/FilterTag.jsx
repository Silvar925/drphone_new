import axios from 'axios';
import styles from './FilterTag.module.scss';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { availableMemory, availableSim, extractBaseUrl, updateProductParams } from '../../model/helpers';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../../../app/setting';
import { dictionary, abbreviatedSlag, abbreviatedSlag1 } from '../../../../shared/untiles/helpers';

export const FilterTag = ({ title, tagList, type, active, device }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [phoneList, setPhoneList] = useState([]);
  const { productPage, productList } = useParams();

  let type2
  let fullUrl
  let deviceSwitch

  if (productList === 'usedDevices') {
    type2 = abbreviatedSlag[productPage.split('-')[0]]
    fullUrl = `${BASE_URL}/${abbreviatedSlag[productPage.split('-')[0]]}`
    deviceSwitch = abbreviatedSlag1[productPage.split('-')[0]]
  } else {
    type2 = location.split('/')[2];
    fullUrl = `${BASE_URL}/${dictionary[type2]}`
    deviceSwitch = device
  }


  const clickTagHandler = async (memory) => {
    let id = title === 'Память' ? 3 : [4, 5, 6];
    console.log('device: ', device)
    let newUrl = await updateProductParams(productPage, memory, id, deviceSwitch, device);
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
  }, [type2])


  let tagListFiler;

  // phoneList && console.log('phoneList: ', phoneList)

  if (title === 'Память') {
    // console.log('Память: ', phoneList, productPage.split('-')[1])
    tagListFiler = availableMemory(phoneList, productPage.split('-')[1]);
  } else {
    // console.log('Не память: ', availableSim(phoneList, productPage.split('-')[1])) 
    tagListFiler = availableSim(phoneList, productPage.split('-')[1]);
  }

  return (
    tagListFiler &&
    <fieldset className={styles.fieldset}>
      <legend>{title}</legend>
      <ul>
        {tagListFiler.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => clickTagHandler(item[type])}
              className={`${styles.btnColor} ${active === item[type] ? styles.active : ''}`}
            >
              {item[type]}
            </button>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};