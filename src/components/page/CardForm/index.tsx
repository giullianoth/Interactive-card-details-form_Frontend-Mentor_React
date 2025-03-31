import CardFormName from "../../formFields/CardFormName"
import CardFormNumber from "../../formFields/CardFormNumber"
import styles from "./CardForm.module.css"

export interface CardFormProps {
  setName: Function
  setNotValidName: Function
  setNumber: Function
  setNotValidNumber: Function
}

const CardForm = ({ setName, setNotValidName, setNumber, setNotValidNumber }: CardFormProps) => {
  return (
    <form className={styles.cardForm} autoComplete="off">
      <CardFormName setName={setName} setNotValidName={setNotValidName} />
      <CardFormNumber setNumber={setNumber} setNotValidNumber={setNotValidNumber} />
      
      {/* <div className={styles.cardForm__row}>
        <label htmlFor="name" className={styles.cardForm__label}>Cardholder Name</label>

        <input
          type="text"
          id="name"
          placeholder="e.g. Jane Appleseed"
          value={""}
          onChange={event => {}}
          onBlur={event => {}}
          className={(false ? styles.error : "") + (false ? styles.valid : "")} />

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
      </div> */}

      <div className={styles.cardForm__row}>
        <button type="submit">Confirm</button>
      </div>
    </form>
  )
}

export default CardForm