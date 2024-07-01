import styles from './ListButton.module.scss'

import listIcon from "./asset/list.svg"

export const ListButton = () => {
    return (
        <button className={styles.button}>
            <img src={listIcon} alt="listIcon"/>
        </button>
    )
}