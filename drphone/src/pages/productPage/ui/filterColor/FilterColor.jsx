import styles from './FilterColor.module.scss';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import {
  updateProductParams,
  extractBaseUrl,
  slugify,
} from '../../model/helpers';

export const FilterColor = ({ colorList, active }) => {
  const { productPage } = useParams();
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const colorClickHandler = async (color) => {
    let newUrl = await updateProductParams(productPage, color, 3);
    navigate(`${extractBaseUrl(location)}${newUrl}`);
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend>Цвет</legend>
      <ul className={styles.colorList}>
        {colorList.map((item, index) => {
          return (
            <li
              key={`${index}|${item.codeColor}`}
              className={slugify(item.name) === active ? styles.active : ''}
            >
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
