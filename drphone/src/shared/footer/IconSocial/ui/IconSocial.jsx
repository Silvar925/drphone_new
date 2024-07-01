import styles from "./IconSocial.module.scss"

export const IconSocial = ({img, alt}) => {
    return (
        <div className={styles.icon}>
            <img src={img} alt={alt}/>
        </div>
    )
}