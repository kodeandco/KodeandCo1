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
       <Services/>
       <OurWork/>
     <GetStarted/>
     <Contact/>

    </>
  )
}

export default App
