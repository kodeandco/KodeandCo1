import React from 'react';
import './Services.css';

const services = [
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'User-centered design that converts visitors into customers'
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications'
  },
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies'
  },
  {
    icon: '🤖',
    title: 'Generative AI',
    description: 'AI-powered tools to accelerate and enhance your workflow'
  }
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
