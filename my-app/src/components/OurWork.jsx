import React from 'react';
import './OurWork.css'; // we'll create this for custom styling

const workItems = [
  {
    title: "Web Development",
    description: "Custom websites that blend creativity with functionality.",
    image: "https://placehold.co/400x250?text=Web+Development"
  },
  {
    title: "Mobile Apps",
    description: "Intuitive and scalable applications for all platforms.",
    image: "https://placehold.co/400x250?text=Mobile+Apps"
  },
  {
    title: "Data Dashboards",
    description: "Visual, real-time dashboards to track your metrics.",
    image: "https://placehold.co/400x250?text=Dashboards"
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
