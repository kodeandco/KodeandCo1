import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button1 from './Button1';
import './OurWork.css';
// Import images properly
import uiuxImage from '../assets/uiux.png';
import webImage from '../assets/web.png';
import postImage from '../assets/post.png';

const workCategories = [
  {
    id: 'uiux',
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning user experiences.",
    image: uiuxImage,
    route: '/portfolio/uiux'
  },
  {
    id: 'webdev',
    title: "Web Development",
    description: "Custom websites that blend creativity with functionality.",
    image: webImage,
    route: '/portfolio/webdev'
  },
  {
    id: 'poster',
    title: "Poster Design",
    description: "Eye-catching visual designs for marketing and branding.",
    image: postImage,
    route: '/portfolio/poster'
  }
];

const OurWork = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (route) => {
    navigate(route);
  };

  return (
    <section className="our-work-section">
      <div className="container">
        <h2 className="our-work-title">Our Work</h2>
        <p className="our-work-subtitle">Showcasing our digital craftsmanship across platforms.</p>
        
        <div className="work-grid">
          {workCategories.map((category, index) => (
            <div className="work-card" key={index}>
              <img src={category.image} alt={category.title} className="work-image" />
              <div className="work-content">
                <h3 className="work-title">{category.title}</h3>
                <p className="work-desc">{category.description}</p>
                <div className="work-button">
                  <Button1 
                    text="View Portfolio" 
                    onClick={() => handleCategoryClick(category.route)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;