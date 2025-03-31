import { useEffect, useState } from "react"
import ValidateNumber from "../../../services/validate-number"
import CardFormField from "../CardFormField"

export interface CardFormNumberProps {
    setNumber: Function
    setNotValidNumber: Function
}

const CardFormNumber = ({ setNumber, setNotValidNumber }: CardFormNumberProps) => {
    const [numberValue, setNumberValue] = useState("")
    const { validNumber, numberError, numberIsValid, numberErrorMessage, validateNumber, validateNumberOnFocusOut, filteredNumber } = ValidateNumber()

    useEffect(() => {
        setNumber(validNumber)
        setNotValidNumber(numberError)
    }, [numberValue, numberError])

    const handleValidateNumber = (mode: string, value: string) => {
        setNumberValue(filteredNumber(value))

        if (mode === "change") {
            validateNumber(value)
        }

        if (mode === "focusout") {
            validateNumberOnFocusOut(value)
            setNotValidNumber(numberError)
        }
    }

    return (
        <CardFormField
            id="number"
            label="Card Number"
            placeholder="e.g. 1234 5678 9123 0000"
            value={numberValue}
            validate={handleValidateNumber}
            error={numberError}
            valid={numberIsValid}
            message={numberErrorMessage} />
    )
}

export default CardFormNumber