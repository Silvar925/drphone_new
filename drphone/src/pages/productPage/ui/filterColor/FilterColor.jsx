import styles from "./FilterColor.module.scss"
import {Link} from 'react-router-dom'

export const FilterColor = ({ colorList, onClick }) => {
    return (
        <fieldset className={styles.fieldset}>
            <legend>Цвет</legend>
            <ul className={styles.colorList} >
                {
                    colorList.map((item, index) => {
                        return (
                            <li key={`${index}|${item.codeColor}`}>
                                <Link
                                    className={styles.btnColor}
                                    style={{ backgroundColor: item.codeColor, display: 'inline-block' }}
                                >
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </fieldset>
    )
}
