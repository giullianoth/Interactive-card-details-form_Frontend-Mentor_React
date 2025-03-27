import styles from "./CardBack.module.css"
import cardTemplateBack from "/images/bg-card-back.png"

const CardBack = () => {
  return (
    <div className={styles.cardBack}>
      <img src={cardTemplateBack} alt="Card Back" className={styles.card} />
      <p className={styles.cardBack__cvc}>---</p>
    </div>
  )
}

export default CardBack