import { useState } from 'react'
import './App.css'
import CardTemplate from './components/page/CardTemplate'
// import Confirmed from './components/page/Confirmed'
import Footer from './components/page/Footer'
import { CardInterface } from './interfaces/card'
import CardForm from './components/page/CardForm'

function App() {
  const [cardTemplateData, setCardTemplateData] = useState<CardInterface>({
    name: "---",
    number: "---- ---- ---- ----",
    expDate: {
      month: "",
      year: ""
    },
    cvc: 0
  })

  const [valueIsNotValid, setValueIsNotValid] = useState(false)

  const setName = (value: string) => {
    const newData = {
      name: value,
      number: cardTemplateData.number,
      expDate: cardTemplateData.expDate,
      cvc: cardTemplateData.cvc
    }

    setCardTemplateData(newData)
  }

  const setNumber = (value: string) => {
    const newData = {
      name: cardTemplateData.name,
      number: value,
      expDate: cardTemplateData.expDate,
      cvc: cardTemplateData.cvc
    }

    setCardTemplateData(newData)
  }

  const setExpdateMonth = (value: string) => {
    const newData = cardTemplateData
    newData.expDate.month = value
    setCardTemplateData(newData)
  }

  const setExpdateYear = (value: string) => {
    const newData = cardTemplateData
    newData.expDate.year = value
    setCardTemplateData(newData)
  }

  const setCvc = (value: string) => {
    const newData = cardTemplateData
    newData.cvc = Number(value)
    setCardTemplateData(newData)
  }

  const setNotValidValue = (notValid: boolean) => {
    setValueIsNotValid(notValid)

    setTimeout(() => {
      setValueIsNotValid(false)
    }, 300)
  }

  return (
    <div className='app'>
      <header className="header">
        <h1>Interactive card details form</h1>
      </header>

      <CardTemplate
        animateCardFront={valueIsNotValid}
        cardName={cardTemplateData.name}
        cardNumber={String(cardTemplateData.number)} />

      <main>
        <div className="register">

          <CardForm
            setName={setName}
            setNotValidName={setNotValidValue}
            setNumber={setNumber}
            setNotValidNumber={setNotValidValue} />

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
