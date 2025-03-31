import styles from "./CardFront.module.css"
import cardTemplateFront from "/images/bg-card-front.png"
import cardLogo from "/images/card-logo.svg"

export interface CardFrontProps {
  alertClassName: string
  cardName: string
}

const CardFront = ({ alertClassName, cardName }: CardFrontProps) => {
  return (
    <div className={`${styles.cardFront} ${alertClassName}`}>
      <img src={cardTemplateFront} alt="Card Front" className={styles.card} />

      <div className={styles.cardFront__logo}>
        <img src={cardLogo} alt="Card Logo" />
      </div>

      <div className={styles.cardFront__wrapper}>
        <p className={styles.cardFront__number}>---- ---- ---- ----</p>
        <p className={styles.cardFront__name}>{cardName}</p>
        <p className={styles.cardFront__expDate}>--/--</p>
      </div>
    </div>
  )
}

export default CardFront