import React, { useState, useEffect } from 'react';
import './Home.css';
import OurWork from '../sections/Portfolio';
import Services from '../sections/Services';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  

  const features = [
    "Human-Centered Design Approach",
  "Agile & Scalable Development",
  "Trusted by Global Startups & Brands"
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <div 
          className="cursor-glow" 
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            opacity: mousePosition.x || mousePosition.y ? 1 : 0
          }}
        />
        
        <div className="bg-elements">
          <div className="bg-circle"></div>
          <div className="bg-circle"></div>
          <div className="bg-circle"></div>
        </div>

        <div className="floating-elements">
          <div className="floating-shape shape-1">K</div>
          <div className="floating-shape shape-2">K</div>
          <div className="floating-shape shape-3">K</div>
          <div className="floating-shape shape-4">K</div>
          <div className="floating-shape shape-5">K</div>
          <div className="floating-shape shape-6">K</div>
        </div>
        
        <div className="hero-content" style={{
          opacity: isLoaded ? 1 : 0,
          transform: `translateY(${isLoaded ? 0 : 50}px)`
        }}>          
          <h1 className="hero-title">
            Create
            <br />
            <span className="hero-subtitle">anything</span>
          </h1>
          
          <p className="hero-description">
            Digital experiences that drive results and transform your business vision into reality
          </p>

          <div className="stats-section">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="stat-item"
                style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              >
                <div className="stat-text">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </div>


      

      {/* <div className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to transform your ideas?</h2>
          <p className="cta-description">Let's build something extraordinary together</p>
          <a href="#contact" className="cta-button">
            Start Your Project
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Home;