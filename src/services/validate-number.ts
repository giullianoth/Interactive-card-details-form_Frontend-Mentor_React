import { useEffect, useState } from "react";
import { accentuation, cardData, isValidNumber, pureNumber, specialChars } from "../definitions/variables";

export default function ValidateNumber() {
    const [validNumber, setValidNumber] = useState("---- ---- ---- ----")
    const [numberErrorMessage, setNumberErrorMessage] = useState("")
    const [numberError, setNumberError] = useState(false)
    const [numberIsValid, setNumberIsValid] = useState(false)
    const cardNumberMaxLength = 16

    useEffect(() => {
        setNumberIsValid(false)
    }, [numberError])

    const numberTemplate = (num: string) => {
        let numArray = pureNumber(num).split("")
        let template = "---- ---- ---- ----".split("")
    
        numArray.forEach((digit: string, index: number) => {
            if (index <= 3) {
                template[index] = digit
            }else if (index > 3 && index <= 7) {
                template[index + 1] = digit;
            } else if (index > 7 && index <= 11) {
                template[index + 2] = digit;
            } else if (index > 11 && index < 16) {
                template[index + 3] = digit;
            }
        })
    
        return template.join("")
    }

    const filteredNumber = (num: string) => {
        let numArray = pureNumber(num).split("")
        let template = [
            "", "", "", "", " ", "", "", "", "", " ", "", "", "", "", " ", "", "", "", "", 
        ]
    
        numArray.forEach((digit: string, index: number) => {
            if (index <= 3) {
                template[index] = digit
            }else if (index > 3 && index <= 7) {
                template[index + 1] = digit;
            } else if (index > 7 && index <= 11) {
                template[index + 2] = digit;
            } else if (index > 11 && index < 16) {
                template[index + 3] = digit;
            }
        })
    
        return template.join("").trim()
    }

    const validateNumber = (numberValue: string) => {
        const length = pureNumber(numberValue).length

        if (numberError) {
            setNumberErrorMessage("")
            setNumberError(false)
        }

        if (length === 0) {
            setNumberErrorMessage("Can't be blank")
            setNumberError(true)
        }

        if (length > 0 && !isValidNumber(numberValue)) {
            setNumberErrorMessage("Wrong format, numbers only")
            setNumberError(true)
        }

        if (length <= cardNumberMaxLength) {
            const newNumberValue = numberTemplate(numberValue)
            setValidNumber(newNumberValue)
        }
    }

    const validateNumberOnFocusOut = (numberValue: string) => {
        let valid = true
        const length = pureNumber(numberValue).length

        if (length === 0) {
            setNumberErrorMessage("Can't be blank")
            setNumberError(true)
            valid = false
        }

        if (length > 0 && !isValidNumber(numberValue)) {
            setNumberErrorMessage("Wrong format, numbers only")
            setNumberError(true)
            valid = false
        }

        if (length > 0 && length < cardNumberMaxLength) {
            setNumberErrorMessage(`Can't be less than ${cardNumberMaxLength} digits`)
            setNumberError(true)
            valid = false
        }

        if (length > cardNumberMaxLength) {
            setNumberErrorMessage(`Can't be more than ${cardNumberMaxLength} digits`)
            setNumberError(true)
            valid = false
        }

        if (valid) {
            setNumberIsValid(true)
            cardData.number = Number(pureNumber(validNumber))
        }
    }

    return { numberTemplate, filteredNumber, validateNumber, validateNumberOnFocusOut, validNumber, numberErrorMessage, numberError, numberIsValid }
}