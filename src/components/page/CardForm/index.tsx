import CardFormCvc from "../../formFields/CardFormCvc"
import CardFormExpdate from "../../formFields/CardFormExpdate"
import CardFormName from "../../formFields/CardFormName"
import CardFormNumber from "../../formFields/CardFormNumber"
import styles from "./CardForm.module.css"

export interface CardFormProps {
  setName: Function
  setNotValidName: Function
  setNumber: Function
  setNotValidNumber: Function
  setExpdateMonth: Function
  setNotValidExpdateMonth: Function
  setExpdateYear: Function
  setNotValidExpdateYear: Function
  setCvc: Function
  setNotValidCvc: Function
}

const CardForm = ({ setName, setNotValidName, setNumber, setNotValidNumber, setExpdateMonth, setNotValidExpdateMonth, setExpdateYear, setNotValidExpdateYear, setCvc, setNotValidCvc }: CardFormProps) => {
  return (
    <form className={styles.cardForm} autoComplete="off">
      <CardFormName setName={setName} setNotValidName={setNotValidName} />
      <CardFormNumber setNumber={setNumber} setNotValidNumber={setNotValidNumber} />

      <CardFormExpdate
        setExpdateMonth={setExpdateMonth}
        setExpdateYear={setExpdateYear}
        setNotValidExpdateMonth={setNotValidExpdateMonth}
        setNotValidExpdateYear={setNotValidExpdateYear} />

      <CardFormCvc setCvc={setCvc} setNotValidCvc={setNotValidCvc} />

      <div className={styles.cardForm__row}>
        <button type="submit">Confirm</button>
      </div>
    </form>
  )
}

export default CardForm