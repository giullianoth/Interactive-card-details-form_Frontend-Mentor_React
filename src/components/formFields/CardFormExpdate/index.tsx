import { useEffect, useState } from "react"
import CardFormField from "../CardFormField"
import ValidateExpdate from "../../../services/validate-expdate"
import { isValidNumber, pureNumber } from "../../../definitions/variables"

export interface CardFormExpdateProps {
    setExpdateMonth: Function
    setNotValidExpdateMonth: Function
    setExpdateYear: Function
    setNotValidExpdateYear: Function
}

const CardFormExpdate = ({ setExpdateMonth, setExpdateYear, setNotValidExpdateMonth, setNotValidExpdateYear }: CardFormExpdateProps) => {
    const [expdateMonthValue, setExpdateMonthValue] = useState("")
    const [expdateYearValue, setExpdateYearValue] = useState("")

    const {
        validExpdateMonth,
        validExpdateYear,
        expdateMonthError,
        expdateYearError,
        expdateMonthIsValid,
        expdateYearIsValid,
        expdateErrorMessage,
        validateExpdateMonth,
        validateExpdateYear,
        validateExpdateMonthOnFocusOut,
        validateExpdateYearOnFocusOut,
        cardExpdateMaxLength
    } = ValidateExpdate()

    useEffect(() => {
        setExpdateMonth(validExpdateMonth)
        setExpdateYear(validExpdateYear)
        setNotValidExpdateMonth(expdateMonthError)
        setNotValidExpdateYear(expdateYearError)
    }, [expdateMonthValue, expdateYearValue])

    const handleValidateExpdateMonth = (type: string, value: string) => {
        const currentValue = value.length > cardExpdateMaxLength ? value.substring(0, value.length - 1) : value

        if (type === "change") {
            setExpdateMonthValue(currentValue.trim())
            validateExpdateMonth(currentValue)
            setExpdateMonth(validExpdateMonth)
        }

        if (type === "blur") {
            setExpdateMonthValue(
                currentValue.length === 1 && isValidNumber(currentValue)
                    ? `0${currentValue.trim()}`
                    : currentValue.trim()
            )

            validateExpdateMonthOnFocusOut(currentValue)
            setNotValidExpdateMonth(expdateMonthError)
            setExpdateMonth(validExpdateMonth)
        }
    }

    const handleValidateExpdateYear = (type: string, value: string) => {
        const currentValue = value.length > cardExpdateMaxLength ? value.substring(0, value.length - 1) : value
        setExpdateYearValue(currentValue.trim())

        if (type === "change") {
            validateExpdateYear(currentValue)
            setExpdateYear(validExpdateYear)
        }

        if (type === "blur") {
            validateExpdateYearOnFocusOut(currentValue)
            setNotValidExpdateYear(expdateYearError)
        }
    }

    return (
        <CardFormField
            id="exp-date-month"
            label="Exp. Date (MM/YY)"
            placeholder="MM"
            value={expdateMonthValue}
            validate={handleValidateExpdateMonth}
            error={expdateMonthError}
            valid={expdateMonthIsValid}
            message={expdateErrorMessage}
            half
            alignRight
            double
            secondFieldProps={{
                label: "",
                id: "exp-date-year",
                placeholder: "YY",
                value: expdateYearValue,
                validate: handleValidateExpdateYear,
                error: expdateYearError,
                valid: expdateYearIsValid,
                message: "",
                alignRight: true
            }} />
    )
}

export default CardFormExpdate