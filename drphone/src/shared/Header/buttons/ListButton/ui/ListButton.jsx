import styles from './ListButton.module.scss'

import listIcon from "./asset/list.svg"

export const ListButton = ({onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <img src={listIcon} alt="listIcon"/>
        </button>
    )
}