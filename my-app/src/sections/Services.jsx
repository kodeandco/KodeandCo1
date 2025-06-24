import React from 'react';
import './Services.css';
const services = [
  {
    title: 'Branding',
    description: 'Strategic brand development to establish identity, build trust, and leave a lasting impression.'
  },
  {
    title: 'Websites',
    description: 'Custom, responsive websites optimized for performance, engagement, and conversion.'
  },
  {
    title: 'Automation',
    description: 'Automated workflows that save time, reduce errors, and streamline your business operations.'
  },
  {
    title: 'Inventory Systems',
    description: 'Robust inventory management systems to monitor stock levels, track movement, and improve logistics.'
  },
  {
    title: 'Feedback Analysis',
    description: 'Intelligent systems that gather, analyze, and visualize customer feedback for data-driven decisions.'
  },
  {
   title: 'Social Media & Advertising',
    description: 'Integrated strategies for managing social presence and running high-impact ad campaigns across digital platforms.'
  },
  
  
];


const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">Crafting excellence through tailored digital solutions</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
