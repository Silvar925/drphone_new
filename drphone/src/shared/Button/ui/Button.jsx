import styles from "./Button.module.scss"

export const Button = ({children, className, onClick}) => {
    return (
        <button className={`${styles.button} ${className}`} onClick={onClick}>{children}</button>
    )
}