import { useState } from "react";
import { cardData, isValidNumber, pureNumber } from "../definitions/variables";

export default function ValidateExpdate() {
    const [validExpdateMonth, setValidExpdateMonth] = useState("--")
    const [expdateMonthError, setExpdateMonthError] = useState(false)
    const [expdateMonthIsValid, setExpdateMonthIsValid] = useState(false)

    const [validExpdateYear, setValidExpdateYear] = useState("--")
    const [expdateYearError, setExpdateYearError] = useState(false)
    const [expdateYearIsValid, setExpdateYearIsValid] = useState(false)

    const [expdateErrorMessage, setExpdateErrorMessage] = useState("")
    const cardExpdateMaxLength = 2

    const isValidDate = (month: string, year: string) => {
        let date = new Date(`20${year}-${month}`)
        return String(date) !== "Invalid Date"
    }

    const isNotPastDate = (month: string, year: string) => {
        let date = new Date(`20${year}-${month}`)
        let currentDate = new Date()

        return date.getTime() > currentDate.getTime()
    }

    const dateTemplate = (num: string) => {
        let numArray = pureNumber(num).split("")
        let template = "--".split("")

        numArray.forEach((digit: string, index: number) => template[index] = digit)

        return template.join("")
    }

    const validateExpdateMonth = (expdateMonthValue: string) => {
        setExpdateMonthIsValid(false)

        if (expdateMonthError) {
            setExpdateMonthError(false)
            setExpdateErrorMessage("")
        }

        const length = expdateMonthValue.length

        if (length === 0) {
            setExpdateErrorMessage("Can't be blank")
            setExpdateMonthError(true)
        }

        if (length > 0 && !isValidNumber(expdateMonthValue)) {
            setExpdateErrorMessage("Wrong format, numbers only")
            setExpdateMonthError(true)
        }

        const newValue = dateTemplate(expdateMonthValue)
        setValidExpdateMonth(newValue)
    }

    const validateExpdateYear = (expdateYearValue: string) => {
        setExpdateYearIsValid(false)

        if (expdateYearError) {
            setExpdateYearError(false)
            setExpdateErrorMessage("")
        }

        const length = expdateYearValue.length

        if (length === 0) {
            setExpdateErrorMessage("Can't be blank")
            setExpdateYearError(true)
        }

        if (length > 0 && !isValidNumber(expdateYearValue)) {
            setExpdateErrorMessage("Wrong format, numbers only")
            setExpdateYearError(true)
        }

        const newValue = dateTemplate(expdateYearValue)
        setValidExpdateYear(newValue)
    }

    const validateExpdateMonthOnFocusOut = (expdateMonthValue: string) => {
        const currentValue = expdateMonthValue.length === 1
            ? `0${expdateMonthValue}`
            : expdateMonthValue

        let valid = true
        const length = expdateMonthValue.length

        if (length === 0) {
            setExpdateErrorMessage("Can't be blank")
            setExpdateMonthError(true)
            valid = false
        }

        if (length > 0 && !isValidNumber(expdateMonthValue)) {
            setExpdateErrorMessage("Wrong format, numbers only")
            setExpdateMonthError(true)
            valid = false
        }

        if (length > 0 && isValidNumber(expdateMonthValue) && length < cardExpdateMaxLength) {
            setValidExpdateMonth(currentValue)
        }

        if (isValidNumber(expdateMonthValue) && length > cardExpdateMaxLength) {
            setExpdateErrorMessage(`Month can't be more than ${cardExpdateMaxLength} digits`)
            setExpdateMonthError(true)
            valid = false
        }

        if (isValidNumber(expdateMonthValue) && length === cardExpdateMaxLength && expdateYearIsValid) {
            if (!isValidDate(currentValue, validExpdateYear)) {
                setExpdateErrorMessage("Invalid date")
                setExpdateMonthError(true)
                valid = false
            }

            if (isValidDate(currentValue, validExpdateYear) && !isNotPastDate(currentValue, validExpdateYear)) {
                setExpdateErrorMessage("Can't be past date")
                setExpdateMonthError(true)
                valid = false
            }
        }

        if (valid) {
            setExpdateMonthIsValid(true)

            if (expdateYearIsValid) {
                cardData.expDate = `${validExpdateMonth}/${validExpdateYear}`

                console.log(cardData);
            }
        }
    }

    const validateExpdateYearOnFocusOut = (expdateYearValue: string) => {
        let valid = true
        const length = expdateYearValue.length

        if (length === 0) {
            setExpdateErrorMessage("Can't be blank")
            setExpdateYearError(true)
            valid = false
        }

        if (length > 0 && !isValidNumber(expdateYearValue)) {
            setExpdateErrorMessage("Wrong format, numbers only")
            setExpdateYearError(true)
            valid = false
        }

        if (length > 0 && isValidNumber(expdateYearValue) && length < cardExpdateMaxLength) {
            setExpdateErrorMessage(`Year can't be less than ${cardExpdateMaxLength} digits`)
            setExpdateYearError(true)
            valid = false
        }

        if (isValidNumber(expdateYearValue) && length > cardExpdateMaxLength) {
            setExpdateErrorMessage(`Year can't be more than ${cardExpdateMaxLength} digits`)
            setExpdateYearError(true)
            valid = false
        }

        if (isValidNumber(expdateYearValue) && length === cardExpdateMaxLength && expdateMonthIsValid) {
            if (!isValidDate(validExpdateMonth, expdateYearValue)) {
                setExpdateErrorMessage("Invalid date")
                setExpdateYearError(true)
                valid = false
            }

            if (isValidDate(validExpdateMonth, expdateYearValue) && !isNotPastDate(validExpdateMonth, expdateYearValue)) {
                setExpdateErrorMessage("Can't be past date")
                setExpdateYearError(true)
                valid = false
            }
        }

        if (valid) {
            setExpdateYearIsValid(true)

            if (expdateMonthIsValid) {
                cardData.expDate = `${validExpdateMonth}/${validExpdateYear}`

                console.log(cardData);
            }
        }
    }

    return { dateTemplate, validateExpdateMonth, validateExpdateYear, validateExpdateMonthOnFocusOut, validateExpdateYearOnFocusOut, validExpdateMonth, validExpdateYear, expdateErrorMessage, expdateMonthError, expdateYearError, expdateMonthIsValid, expdateYearIsValid, cardExpdateMaxLength }
}