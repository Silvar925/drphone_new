import styles from './FilterTag.module.scss';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { extractBaseUrl, updateProductParams } from '../../model/helpers';
import { useEffect } from 'react';

export const FilterTag = ({ title, tagList, type, active, device }) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const { productPage } = useParams();

  const clickTagHandler = async (memory) => {
    let id; title === 'Память' ? id = 3 : id = [4, 5, 6];
    let newUrl = await updateProductParams(productPage, memory, id, device);
    navigate(`${extractBaseUrl(location)}${newUrl}`);
  };

  

  return (
    tagList !== undefined &&
    <fieldset className={styles.fieldset}>
      <legend>{title}</legend>
      <ul>
        {tagList.map((item, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => clickTagHandler(item[type])}
                className={`${styles.btnColor} ${
                  active === item[type] ? styles.active : ''
                }`}
              >
                {item[type]}
              </button>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
};
