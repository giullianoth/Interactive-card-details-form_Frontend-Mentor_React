import './App.css'
import CardTemplate from './components/page/CardTemplate'
import CardForm from './components/page/CardForm'
// import Confirmed from './components/page/Confirmed'
import Footer from './components/page/Footer'
import { useEffect, useState } from 'react'
import ValidateName from './services/validate-name'

function App() {
  const [nameValue, setNameValue] = useState("")
  const [nameTemplateValue, setNameTemplateValue] = useState("---")

  const { validateName, validateNameOnFocusOut, nameIsValid, validName, animeteCard, nameError, nameErrorMessage } = ValidateName()

  const handleValidateName = (mode: string, value: string) => {
    setNameValue(value)

    if (mode === "input") {
      validateName(value)
    }

    if (mode === "focusout") {
      validateNameOnFocusOut(value)
    }
  }

  useEffect(() => {
    setNameTemplateValue(validName)
  }, [validName])

  return (
    <div className='app'>
      <header className="header">
        <h1>Interactive card details form</h1>
      </header>

      <CardTemplate
        nameTemplate={nameTemplateValue}
        animateCard={animeteCard} />

      <main>
        <section className="register">

          <CardForm
            nameValue={nameValue}
            validateName={handleValidateName}
            nameError={nameError}
            nameErrorMessage={nameErrorMessage}
            nameIsValid={nameIsValid} />

          {/* <Confirmed /> */}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
