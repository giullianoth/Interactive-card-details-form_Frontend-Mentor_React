import CardBack from "../../card/CardBack"
import CardFront from "../../card/CardFront"
import styles from "./CardTemplate.module.css"

export interface CardTemplateProps {
  animateCardFront?: boolean
  animateCardBack?: boolean
  cardName: string
  cardNumber: string
  cardCvc: string
}

const CardTemplate = ({ animateCardFront, animateCardBack, cardName, cardNumber, cardCvc }: CardTemplateProps) => {
  return (
    <aside className={styles.cardTemplate}>
      <div className={styles.cardTemplate__container}>
        <CardBack
          alertClassName={animateCardBack ? styles.alert : ""}
          cardCvc={cardCvc} />

        <CardFront
          alertClassName={animateCardFront ? styles.alert : ""}
          cardName={cardName}
          cardNumber={cardNumber} />
      </div>
    </aside>
  )
}

export default CardTemplate