import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import GetStarted from './sections/GetStarted';
import Home from './sections/Home';
import OurWork from './components/OurWork';
import Services from './sections/Services';
import Contact from './sections/Contact';
import UIUXPortfolio from './components/UIUXPortfolio';
import WebDevPortfolio from './components/WebDevPortfolio';
import PosterPortfolio from './components/PosterPortfolio';

// Main homepage component
const HomePage = () => {
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
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Main homepage route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Portfolio category routes */}
        <Route path="/portfolio/uiux" element={<UIUXPortfolio />} />
        <Route path="/portfolio/webdev" element={<WebDevPortfolio />} />
        <Route path="/portfolio/poster" element={<PosterPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;