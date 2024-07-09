import React from 'react';
import styles from './FilterTag.module.scss';

export const FilterTag = ({ title, tagList, type, active }) => {
  return (
    <fieldset className={styles.fieldset}>
      <legend>{title}</legend>
      <ul>
        {tagList.map((item, index) => {
          return (
            <li key={index}>
              <button
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
