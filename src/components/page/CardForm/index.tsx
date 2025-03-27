import styles from "./CardForm.module.css"

const CardForm = () => {
  return (
    <form className={styles.cardForm} autoComplete="off">
      <div className={styles.cardForm__row}>
        <label htmlFor="name" className={styles.cardForm__label}>Cardholder Name</label>
        <input type="text" id="name" placeholder="e.g. Jane Appleseed" />
        <p className={styles.cardForm__message}></p>
      </div>

      <div className={styles.cardForm__row}>
        <label htmlFor="number" className={styles.cardForm__label}>Card Number</label>
        <input type="text" id="number" placeholder="e.g. 1234 5678 9123 0000" />
        <p className={styles.cardForm__message}></p>
      </div>

      <div className={`${styles.cardForm__row} ${styles.half} ${styles.cardForm__expDate}`}>
        <label htmlFor="exp-date-month" className={styles.cardForm__label}>Exp. Date (MM/YY)</label>
        <input type="text" id="exp-date-month" placeholder="MM" />
        <input type="text" id="exp-date-year" placeholder="YY" />
        <p className={styles.cardForm__message}></p>
      </div>

      <div className={`${styles.cardForm__row} ${styles.half} ${styles.cardForm__cvc}`}>
        <label htmlFor="cvc" className={styles.cardForm__label}>CVC</label>
        <input type="text" id="cvc" placeholder="e.g. 123" />
        <p className={styles.cardForm__message}></p>
      </div>

      <div className={styles.cardForm__row}>
        <button type="submit">Confirm</button>
      </div>
    </form>
  )
}

export default CardForm