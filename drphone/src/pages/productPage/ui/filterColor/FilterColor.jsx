import styles from "./FilterColor.module.scss"

export const FilterColor = ({colorList}) => {
    console.log(colorList)
    return (
        <fieldset className={styles.fieldset}>
            <legend>Цвет</legend>
            <ul className={styles.colorList}>
                asd
            </ul>
        </fieldset>
    )
}