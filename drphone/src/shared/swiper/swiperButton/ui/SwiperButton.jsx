import styles from "./SwiperButton.module.scss"

import left from "./asset/left.svg"
import right from "./asset/right.svg"

const SwiperButton = ({ onClick, orientation }) => {
    return (
        <div className={styles.swiperButton} onClick={onClick}>
            <div className={styles.swiperButtonContent} >
                {
                    orientation === "right" &&
                    <img src={right} alt="rightButton" />
                }

                {
                    orientation === "left" &&
                    <img src={left} alt="leftButton" />
                }
            </div>
        </div>
    )
}


export default SwiperButton;