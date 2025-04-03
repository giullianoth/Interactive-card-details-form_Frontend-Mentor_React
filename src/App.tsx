import { useState } from 'react'
import './App.css'
import CardTemplate from './components/page/CardTemplate'
// import Confirmed from './components/page/Confirmed'
import Footer from './components/page/Footer'
import CardForm from './components/page/CardForm'

function App() {
  const [name, setName] = useState("---")
  const [number, setNumber] = useState("---- ---- ---- ----")
  const [expdateMonth, setExpdateMonth] = useState("--")
  const [expdateYear, setExpdateMYear] = useState("--")
  const [cvc, setCvc] = useState("---")

  const [valueInFrontIsNotValid, setValueInFrontIsNotValid] = useState(false)
  const [valueInBackIsNotValid, setValueInBackIsNotValid] = useState(false)

  const handleSetName = (value: string) => setName(value)
  const handleSetNumber = (value: string) => setNumber(value)
  const handleSetExpdateMonth = (value: string) => setExpdateMonth(value)
  const handleSetExpdateYear = (value: string) => setExpdateMYear(value)
  const handleSetCvc = (value: string) => setCvc(value)

  const setNotValidValueInFront = (notValid: boolean) => {
    setValueInFrontIsNotValid(notValid)

    setTimeout(() => {
      setValueInFrontIsNotValid(false)
    }, 300)
  }

  const setNotValidValueInBack = (notValid: boolean) => {
    setValueInBackIsNotValid(notValid)

    setTimeout(() => {
      setValueInBackIsNotValid(false)
    }, 300)
  }

  return (
    <div className='app'>
      <header className="header">
        <h1>Interactive card details form</h1>
      </header>

      <CardTemplate
        animateCardFront={valueInFrontIsNotValid}
        animateCardBack={valueInBackIsNotValid}
        cardName={name}
        cardNumber={number}
        cardExpdateMonth={expdateMonth}
        cardExpdateYear={expdateYear}
        cardCvc={cvc} />

      <main>
        <div className="register">

          <CardForm
            setName={handleSetName}
            setNotValidName={setNotValidValueInFront}
            setNumber={handleSetNumber}
            setNotValidNumber={setNotValidValueInFront}
            setExpdateMonth={handleSetExpdateMonth}
            setNotValidExpdateMonth={setNotValidValueInFront}
            setExpdateYear={handleSetExpdateYear}
            setNotValidExpdateYear={setNotValidValueInFront}
            setCvc={handleSetCvc}
            setNotValidCvc={setNotValidValueInBack} />

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
