import './App.css'
import CardTemplate from './components/page/CardTemplate'
import CardForm from './components/page/CardForm'
import Confirmed from './components/page/Confirmed'
import Footer from './components/page/Footer'

function App() {
  return (
    <div className='app'>
      <header className="header">
        <h1>Interactive card details form</h1>
      </header>

      <CardTemplate />

      <main>
        <section className="register">
          <CardForm />
          {/* <Confirmed /> */}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
