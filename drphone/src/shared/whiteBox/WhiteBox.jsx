import styles from "./WhiteBox.module.scss"

export const WhiteBox = ({children, className}) => {
    return (
        <aside className={`${styles.card} ${className}`}>
            {children}
        </aside>
    )
}