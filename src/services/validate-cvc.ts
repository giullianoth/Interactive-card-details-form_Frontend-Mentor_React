import { useEffect, useState } from "react";
import { cardData, isValidNumber, pureNumber } from "../definitions/variables";

export default function ValidateCvc() {
    const [validCvc, setValidCvc] = useState("---")
    const [cvcErrorMessage, setCvcErrorMessage] = useState("")
    const [cvcError, setCvcError] = useState(false)
    const [cvcIsValid, setCvcIsValid] = useState(false)
    const cardCvcMaxLength = 3

    useEffect(() => {
        setCvcIsValid(false)
    }, [cvcError])

    const cvcTemplate = (num: string) => {
        let numArray = pureNumber(num).split("")
        let template = "---".split("")
    
        numArray.forEach((digit: string, index: number) => template[index] = digit)
    
        return template.join("")
    }

    const validateCvc = (cvcValue: string) => {
        const length = cvcValue.length

        if (cvcError) {
            setCvcErrorMessage("")
            setCvcError(false)
        }

        if (length === 0) {
            setCvcErrorMessage("Can't be blank")
            setCvcError(true)
        }

        if (length > 0 && !isValidNumber(cvcValue)) {
            setCvcErrorMessage("Wrong format, numbers only")
            setCvcError(true)
        }

        if (length <= cardCvcMaxLength) {
            const newCvcValue = cvcTemplate(cvcValue)
            setValidCvc(newCvcValue)
        }
    }

    const validateCvcOnFocusOut = (cvcValue: string) => {
        let valid = true
        const length = cvcValue.length

        if (length === 0) {
            setCvcErrorMessage("Can't be blank")
            setCvcError(true)
            valid = false
        }

        if (length > 0 && !isValidNumber(cvcValue)) {
            setCvcErrorMessage("Wrong format, numbers only")
            setCvcError(true)
            valid = false
        }

        if (length > 0 && isValidNumber(cvcValue) && length < cardCvcMaxLength) {
            setCvcErrorMessage(`Can't be less than ${cardCvcMaxLength} digits`)
            setCvcError(true)
            valid = false
        }

        if (isValidNumber(cvcValue) && length > cardCvcMaxLength) {
            setCvcErrorMessage(`Can't be more than ${cardCvcMaxLength} digits`)
            setCvcError(true)
            valid = false
        }

        if (valid) {
            setCvcIsValid(true)
            cardData.cvc = Number(pureNumber(validCvc))
            console.log(cvcError);
        }
    }

    return { cvcTemplate, validateCvc, validateCvcOnFocusOut, validCvc, cvcErrorMessage, cvcError, cvcIsValid, cardCvcMaxLength }
}