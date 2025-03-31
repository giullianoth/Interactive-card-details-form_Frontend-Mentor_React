import { useEffect, useState } from "react"
import ValidateName from "../../../services/validate-name"
import CardFormField from "../CardFormField"

export interface CardFormNameProps {
    setName: Function
    setNotValidName: Function
}

const CardFormName = ({ setName, setNotValidName }: CardFormNameProps) => {
    const [nameValue, setNameValue] = useState("")
    const { validName, nameError, nameIsValid, nameErrorMessage, validateName, validateNameOnFocusOut } = ValidateName()

    useEffect(() => {
        setName(validName)
        setNotValidName(nameError)
    }, [nameValue, nameError])

    const handleValidateName = (mode: string, value: string) => {
        setNameValue(value)

        if (mode === "change") {
            validateName(value)
        }

        if (mode === "focusout") {
            validateNameOnFocusOut(value)
            setNotValidName(nameError)
        }
    }

    return (
        <CardFormField
            id="name"
            label="Cardholder Name"
            placeholder="e.g. Jane Appleseed"
            value={nameValue}
            validate={handleValidateName}
            error={nameError}
            valid={nameIsValid}
            message={nameErrorMessage} />
    )
}

export default CardFormName