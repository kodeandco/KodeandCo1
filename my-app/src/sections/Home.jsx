import React, { useState, useEffect } from 'react';
import { Camera, Monitor, Instagram, Smartphone, Palette, Code, Zap, Star, Heart, Play, Layers, Cpu, Globe, Aperture } from 'lucide-react';
import './Home.css';

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

  // Carefully positioned icons to avoid overlap with main content
  const floatingIcons = [
    // Left side icons
    { Icon: Camera, position: { top: '15%', left: '5%' }, delay: 0, size: 28, orbit: 'small' },
    { Icon: Palette, position: { top: '35%', left: '8%' }, delay: 2, size: 24, orbit: 'medium' },
    { Icon: Code, position: { top: '55%', left: '6%' }, delay: 4, size: 26, orbit: 'small' },
    { Icon: Heart, position: { bottom: '25%', left: '10%' }, delay: 6, size: 22, orbit: 'large' },
    
    // Right side icons
    { Icon: Monitor, position: { top: '20%', right: '7%' }, delay: 1, size: 30, orbit: 'medium' },
    { Icon: Instagram, position: { top: '40%', right: '5%' }, delay: 3, size: 26, orbit: 'small' },
    { Icon: Smartphone, position: { top: '60%', right: '9%' }, delay: 5, size: 24, orbit: 'large' },
    { Icon: Star, position: { bottom: '20%', right: '6%' }, delay: 7, size: 28, orbit: 'medium' },
    
    // Top floating icons (avoiding title area)
    { Icon: Zap, position: { top: '8%', left: '25%' }, delay: 1.5, size: 20, orbit: 'small' },
    { Icon: Globe, position: { top: '12%', right: '30%' }, delay: 3.5, size: 22, orbit: 'medium' },
    { Icon: Layers, position: { top: '6%', left: '60%' }, delay: 5.5, size: 24, orbit: 'large' },
    
    // Bottom floating icons (avoiding stats area)
    { Icon: Play, position: { bottom: '8%', left: '20%' }, delay: 2.5, size: 26, orbit: 'medium' },
    { Icon: Cpu, position: { bottom: '12%', right: '25%' }, delay: 4.5, size: 24, orbit: 'small' },
    { Icon: Aperture, position: { bottom: '6%', left: '70%' }, delay: 6.5, size: 28, orbit: 'large' }
  ];

  // K letters positioned in safe zones
  const kLetters = [
    { position: { top: '18%', left: '15%' }, delay: 1, size: '2.2rem' },
    { position: { top: '25%', right: '18%' }, delay: 3, size: '1.8rem' },
    { position: { bottom: '35%', left: '12%' }, delay: 2, size: '2.5rem' },
    { position: { bottom: '28%', right: '15%' }, delay: 4, size: '2rem' },
    { position: { top: '65%', left: '85%' }, delay: 5, size: '1.9rem' },
    { position: { top: '75%', right: '85%' }, delay: 6, size: '2.3rem' }
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
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-circle bg-circle-3"></div>
          <div className="bg-circle bg-circle-4"></div>
        </div>

        <div className="floating-elements">
          {/* Floating Brand Icons */}
          {floatingIcons.map(({ Icon, position, delay, size, orbit }, index) => (
            <div 
              key={`icon-${index}`}
              className={`floating-icon orbit-${orbit}`}
              style={{
                ...position,
                animationDelay: `${delay}s`
              }}
            >
              <Icon size={size} />
            </div>
          ))}
          
          {/* K Letters in safe zones */}
          {kLetters.map(({ position, delay, size }, index) => (
            <div 
              key={`k-${index}`}
              className="floating-k"
              style={{
                ...position,
                fontSize: size,
                animationDelay: `${delay}s`
              }}
            >
              K
            </div>
          ))}
        </div>
        
        <div className="hero-content-wrapper">
          <div 
            className="hero-content" 
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: `translateY(${isLoaded ? 0 : 50}px)`
            }}
          >
            <div className="hero-title-container">
              <h1 className="hero-title">
                Create
                <br />
                <span className="hero-subtitle">anything</span>
              </h1>
            </div>
            
            <div className="hero-description-container">
              <p className="hero-description">
                Digital experiences that drive results and transform your business vision into reality
              </p>
            </div>
            
            <div className="stats-container">
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
        </div>
      </div>
    </div>
  );
};

export default Home;