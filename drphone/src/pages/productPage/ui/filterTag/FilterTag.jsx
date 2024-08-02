import axios from 'axios';
import styles from './FilterTag.module.scss';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { availableMemory, availableSim, extractBaseUrl, updateProductParams } from '../../model/helpers';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../../../app/setting';
import { dictionary } from '../../../../shared/untiles/helpers';

export const FilterTag = ({ title, tagList, type, active, device }) => {
  const [phoneList, setPhoneList] = useState([]);
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const { productPage } = useParams();

  const type2 = location.split('/')[2];

  const clickTagHandler = async (memory) => {
    let id = title === 'Память' ? 3 : [4, 5, 6];
    let newUrl = await updateProductParams(productPage, memory, id, device);
    navigate(`${extractBaseUrl(location)}${newUrl}`);
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${dictionary[type2]}`)
      .then((response) => {
        setPhoneList(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных пользователя:', error);
      });
  }, [type2]); // Added dependency array

  let tagListFiler;

  if (title === 'Память') {
    tagListFiler = availableMemory(phoneList, productPage.split('-')[1]);
  } else {
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