import styles from "./FilterTag.module.scss"
import { Link } from "react-router-dom";

export const FilterTag = ({ title, tagList, type }) => {
    return (
        <fieldset className={styles.fieldset}>
            <legend>{title}</legend>
            <ul>
                {
                    tagList.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={styles.btnColor}>
                                    {item[`${type}`]}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </fieldset>
    )
}
