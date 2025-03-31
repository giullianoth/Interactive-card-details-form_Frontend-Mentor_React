export interface CardInterface {
    name: string
    number: number | string
    expDate: {
        month: string
        year: string
    }
    cvc: number | string
}