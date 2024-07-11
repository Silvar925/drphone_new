import styles from './FilterTag.module.scss';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { extractBaseUrl, updateProductParams } from '../../model/helpers';
import { getAllMemoryProduct } from '../../../../entities/product/api/request';


export const FilterTag = ({ title, tagList, type, active }) => {
  const location = useLocation().pathname
  const navigate = useNavigate()
  const { productPage } = useParams();

  const clickTagHandler = async (memory) => {
    let id;
    title === "Память" ? id = 4 : id = [5,6,7]
    let newUrl = await updateProductParams(productPage, memory, id);
    navigate(`${extractBaseUrl(location)}${newUrl}`);
  };

  return (
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
