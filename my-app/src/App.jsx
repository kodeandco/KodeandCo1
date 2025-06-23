import './App.css'
import Navbar from './components/Navbar'
import GetStarted from './sections/GetStarted'
import Home from './sections/Home'
import OurWork from './sections/Portfolio'
import Services from './sections/Services'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <div id="services">
        <Services/>
      </div>
      <div id="portfolio">
        <OurWork/>
      </div>
      <div id="about">
        <GetStarted/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </>
  )
}

export default App