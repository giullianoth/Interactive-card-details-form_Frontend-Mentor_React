import { useState } from "react";
import { accentuation, cardData, specialChars } from "../definitions/variables";

export default function ValidateName() {
    const [validName, setValidName] = useState("---")
    const [nameErrorMessage, setNameErrorMessage] = useState("")
    const [nameError, setNameError] = useState(false)
    const [nameIsValid, setNameIsValid] = useState(false)
    const cardNameMaxLength = 25

    const validateName = (nameValue: string) => {
        setNameIsValid(false)

        if (nameError) {
            setNameError(false)
            setNameErrorMessage("")
        }

        const length = nameValue.length

        if (length === 0) {
            setNameErrorMessage("Can't be blank")
            setNameError(true)
        }

        if (length <= cardNameMaxLength) {
            let newValue = length
                ? nameValue
                    .normalize("NFD")
                    .replace(accentuation, "")
                    .replace(specialChars, "")
                    .toUpperCase()
                    .trim()
                : "---"

            if (newValue.length === 0) {
                newValue = "---"
            }

            setValidName(newValue)
        }
    }

    const validateNameOnFocusOut = (nameValue: string) => {
        let valid = true

        const currentValue = nameValue
            .normalize("NFD")
            .replace(accentuation, "")
            .replace(specialChars, "")
            .toUpperCase()
            .trim()

        const length = nameValue.length

        if (length === 0) {
            setNameErrorMessage("Can't be blank")
            setNameError(true)
            valid = false
        }

        if (length > 0 && !currentValue) {
            setNameErrorMessage("Wrong format, can't use special characters")
            setNameError(true)
            valid = false
        }

        if (valid) {
            setNameIsValid(true)
            cardData.name = validName

            console.log(cardData);
        }
    }

    return { validateName, validateNameOnFocusOut, validName, nameErrorMessage, nameError, nameIsValid }
}