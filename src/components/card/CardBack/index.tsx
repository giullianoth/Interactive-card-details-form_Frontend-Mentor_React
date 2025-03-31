import styles from "./CardBack.module.css"
import cardTemplateBack from "/images/bg-card-back.png"

export interface CardBackProps {
  alertClassName: string
}

const CardBack = ({alertClassName}: CardBackProps) => {
  return (
    <div className={`${styles.cardBack} ${alertClassName}`}>
      <img src={cardTemplateBack} alt="Card Back" className={styles.card} />
      <p className={styles.cardBack__cvc}>---</p>
    </div>
  )
}

export default CardBack