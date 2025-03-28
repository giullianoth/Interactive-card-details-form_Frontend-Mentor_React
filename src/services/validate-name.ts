import { useEffect, useState } from "react";
import { accentuation, cardData, specialChars } from "../definitions/variables";

export default function ValidateName() {
    const [validName, setValidName] = useState("")
    const [nameErrorMessage, setNameErrorMessage] = useState("")
    const [nameError, setNameError] = useState(false)
    const [nameIsValid, setNameIsValid] = useState(false)
    const [animeteCard, setAnimateCard] = useState(false)
    const cardNameMaxLength = 25

    useEffect(() => {
        setNameIsValid(false)
    }, [nameError])

    const validateName = (nameValue: string) => {
        const length = nameValue.length

        if (nameError) {
            setNameErrorMessage("")
            setNameError(false)
        }

        if (length === 0) {
            setAnimateCard(true)
            setNameErrorMessage("Can't be blank")
            setNameError(true)

            setTimeout(() => {
                setAnimateCard(false)
            }, 300)
        }

        if (length <= cardNameMaxLength) {
            const newNameValue = length > 0
                ? nameValue.normalize("NFD").replace(accentuation, "").replace(specialChars, "").toUpperCase()
                : "---"

            setValidName(newNameValue)
        }
    }

    const validateNameOnFocusOut = (nameValue: string) => {
        let valid = true
        const length = nameValue.length

        if (length === 0) {
            setAnimateCard(true)
            setNameErrorMessage("Can't be blank")
            setNameError(true)
            valid = false

            setTimeout(() => {
                setAnimateCard(false)
            }, 300)
        }

        if (valid) {
            setNameIsValid(true)
            cardData.name = validName
        }
    }

    return { validateName, validateNameOnFocusOut, validName, nameErrorMessage, nameError, nameIsValid, animeteCard }
}