import React from 'react';
import './Portfolio.css'; // we'll create this for custom styling

const workItems = [
  {
    title: "UI/UX",
    image: "https://i.pinimg.com/736x/a4/dc/8c/a4dc8c5692a9a405814e17302b6d8067.jpg"
  },
  
  {
    title: "Website Development",
    image: "https://i.pinimg.com/736x/00/5d/ef/005defa1ed9df07016f6e9f35641c88f.jpg"
  },
  {
    title: "Inventory Management System",
    image: "https://i.pinimg.com/736x/d0/6d/e4/d06de4008a611aea685ad75236aa2300.jpg"
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
