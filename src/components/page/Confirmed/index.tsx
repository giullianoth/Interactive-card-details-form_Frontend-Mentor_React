import styles from "./Confirmed.module.css"
import iconComplete from "/images/icon-complete.svg"

const Confirmed = () => {
  return (
    <div className={styles.confirmed}>
      <img src={iconComplete} alt="Confirmed" />
      <p className={styles.confirmed__title}>Thank you!</p>
      <p className={styles.confirmed__subtitle}>We've added your card details<br />(view in browser console)</p>
      <button onClick={() => window.location.reload()}>Continue</button>
    </div>
  )
}

export default Confirmed