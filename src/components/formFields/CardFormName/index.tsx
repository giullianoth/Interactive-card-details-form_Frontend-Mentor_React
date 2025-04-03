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
    }, [nameValue])

    const handleValidateName = (type: string, value: string) => {
        setNameValue(value)

        if (type === "change") {
            validateName(value)
            setName(validName)
        }

        if (type === "blur") {
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