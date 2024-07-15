import styles from "./IconSocial.module.scss"

export const IconSocial = ({img, alt, className}) => {
    return (
        <div className={`${styles.icon} ${className}`}>
            <img src={img} alt={alt}/>
        </div>
    )
}