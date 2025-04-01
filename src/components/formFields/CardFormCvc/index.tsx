import { useEffect, useState } from "react"
import CardFormField from "../CardFormField"
import ValidateCvc from "../../../services/validate-cvc"
import { pureNumber } from "../../../definitions/variables"

export interface CardFormCvcProps {
    setCvc: Function
    setNotValidCvc: Function
}


const CardFormCvc = ({ setCvc, setNotValidCvc }: CardFormCvcProps) => {
    const [cvcValue, setCvcValue] = useState("")
    const { validCvc, cvcError, cvcIsValid, cvcErrorMessage, validateCvc, validateCvcOnFocusOut, cardCvcMaxLength } = ValidateCvc()

    useEffect(() => {
        setCvc(validCvc)
        setNotValidCvc(cvcError)
    }, [cvcValue, cvcError])

    const handleValidateCvc = (mode: string, value: string) => {
        setCvcValue(
            value.length > cardCvcMaxLength ? value.substring(0, value.length - 1) : value
        )

        if (mode === "change") {
            validateCvc(pureNumber(value))
        }

        if (mode === "focusout") {
            validateCvcOnFocusOut(pureNumber(value))
            setNotValidCvc(cvcError)
        }
    }

    return (
        <CardFormField
            id="cvc"
            label="CVC"
            placeholder="e.g. 123"
            value={cvcValue}
            validate={handleValidateCvc}
            error={cvcError}
            valid={cvcIsValid}
            message={cvcErrorMessage}
            half
            alignRight />
    )
}

export default CardFormCvc