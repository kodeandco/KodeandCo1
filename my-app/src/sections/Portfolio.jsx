import React from 'react';
import './Portfolio.css'; // we'll create this for custom styling

const workItems = [
  {
    title: "UI/UX",
    image: "https://placehold.co/400x250?text=Website+Redesign"
  },
  
  {
    title: "Website Development",
    image: "https://placehold.co/400x250?text=Full+Website"
  },
  {
    title: "Inventory Management System",
    image: "https://placehold.co/400x250?text=Inventory+System"
  }
];





const OurWork = () => {
  return (
    <section className="our-work-section">
      <div className="container">
<h2 className="our-work-title">Our Work</h2>
<p className="our-work-subtitle">Showcasing our digital craftsmanship across platforms.</p>
        
        <div className="work-grid">
          {workItems.map((item, index) => (
            <div className="work-card" key={index}>
              <img src={item.image} alt={item.title} className="work-image" />
              <h3 className="work-title">{item.title}</h3>
              <p className="work-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
