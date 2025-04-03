import { useEffect, useState } from "react"
import ValidateNumber from "../../../services/validate-number"
import CardFormField from "../CardFormField"
import { pureNumber } from "../../../definitions/variables"

export interface CardFormNumberProps {
    setNumber: Function
    setNotValidNumber: Function
}

const CardFormNumber = ({ setNumber, setNotValidNumber }: CardFormNumberProps) => {
    const [numberValue, setNumberValue] = useState("")
    const { validNumber, numberError, numberIsValid, numberErrorMessage, validateNumber, validateNumberOnFocusOut, filteredNumber, cardNumberMaxLength } = ValidateNumber()

    useEffect(() => {
        setNumber(validNumber)
        setNotValidNumber(numberError)
    }, [numberValue])

    const handleValidateNumber = (type: string, value: string) => {
        const currentValue = pureNumber(value).length > cardNumberMaxLength
            ? pureNumber(value).substring(0, pureNumber(value).length - 1)
            : pureNumber(value)

        setNumberValue(filteredNumber(currentValue))

        if (type === "change") {
            validateNumber(pureNumber(currentValue))
            setNumber(validNumber)
        }

        if (type === "blur") {
            validateNumberOnFocusOut(pureNumber(currentValue))
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