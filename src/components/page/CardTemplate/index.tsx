import CardBack from "../../CardBack"
import CardFront from "../../CardFront"
import styles from "./CardTemplate.module.css"

const CardTemplate = () => {
  return (
    <aside className={styles.cardTemplate}>
        <div className={styles.cardTemplate__container}>
            <CardBack />
            <CardFront />
        </div>
    </aside>
  )
}

export default CardTemplate