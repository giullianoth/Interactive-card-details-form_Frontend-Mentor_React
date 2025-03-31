import CardBack from "../../card/CardBack"
import CardFront from "../../card/CardFront"
import styles from "./CardTemplate.module.css"

export interface CardTemplateProps {
  animateCardFront?: boolean
  animateCardBack?: boolean
  cardName: string
}

const CardTemplate = ({ animateCardFront, animateCardBack, cardName }: CardTemplateProps) => {
  return (
    <aside className={styles.cardTemplate}>
      <div className={styles.cardTemplate__container}>
        <CardBack alertClassName={animateCardBack ? styles.alert : ""} />

        <CardFront
          alertClassName={animateCardFront ? styles.alert : ""}
          cardName={cardName} />
      </div>
    </aside>
  )
}

export default CardTemplate