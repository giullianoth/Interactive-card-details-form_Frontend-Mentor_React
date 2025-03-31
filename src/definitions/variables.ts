import { CardInterface } from "../interfaces/card"

export const accentuation = /[\u0300-\u036f]/g
export const specialChars = /[^a-zA-Z 0-9]+/g
export const numbers = /[0-9]/
export const onlyNumbers = /^[0-9]+$/

export const pureNumber = (value: any) => value.normalize("NFD").replaceAll(" ", "")
export const isValidNumber = (value: string) => pureNumber(value).match(onlyNumbers)

export const cardData: CardInterface = {
    name: "",
    number: 0,
    expDate: {
        month: "",
        year: ""
    },
    cvc: 0
}