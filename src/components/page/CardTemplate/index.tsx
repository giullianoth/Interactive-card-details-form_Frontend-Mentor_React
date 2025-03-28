import CardBack from "../../CardBack"
import CardFront from "../../CardFront"
import styles from "./CardTemplate.module.css"

export interface CardTemplateProps {
  nameTemplate: string
  animateCard: boolean
}

const CardTemplate = ({ nameTemplate, animateCard }: CardTemplateProps) => {
  return (
    <aside className={styles.cardTemplate}>
      <div className={styles.cardTemplate__container}>
        <CardBack />

        <CardFront
          nameTemplate={nameTemplate}
          alertClassName={animateCard ? styles.alert : ""} />
      </div>
    </aside>
  )
}

export default CardTemplate