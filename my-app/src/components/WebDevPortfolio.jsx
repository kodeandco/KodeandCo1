import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button2 from './Button2';
import './PortfolioPage.css';

// Import your WebDev images
import wd1 from '../assets/wd1.png'; // Coffee website
import wd2 from '../assets/wd2.png'; // Coffee website
import wd3 from '../assets/wd3.png'; // Coffee website
import wd4 from '../assets/wd4.png'; // Coffee website
import wd5 from '../assets/wd5.png'; // Wardrobe website (dress selection)
import wd6 from '../assets/wd6.jpg'; // E-commerce Kalakshetra
import wd7 from '../assets/wd7.jpg'; // E-commerce Kalakshetra
import wd8 from '../assets/wd8.jpg'; // E-commerce Kalakshetra
import wd9 from '../assets/wd9.jpg'; // Campus Crave - College Canteen Automation
import wd10 from '../assets/wd10.jpg'; // Campus Crave - College Canteen Automation
import wd11 from '../assets/wd11.jpg'; // Campus Crave - College Canteen Automation
import wd12 from '../assets/wd12.png';
// import wd13 from '../assets/wd13.png';
import wd15 from '../assets/wd15.png'; 
import wd16 from '../assets/wd16.png'; 
import wd17 from '../assets/wd17.png'; 
import wd18 from '../assets/wd18.png'; 
const webdevProjects = [
  {
    id: 1,
    title: "Coffee House Website - Landing",
    description: "Premium coffee shop website with rich visual storytelling and brand experience",
    image: wd1,
    tags: ["React", "Coffee Shop", "Landing Page"],
    year: "2024"
  },
  {
    id: 2,
    title: "Coffee House - Menu System",
    description: "Interactive menu system with dynamic pricing and customization options",
    image: wd2,
    tags: ["Menu System", "Interactive", "Food Service"],
    year: "2024"
  },
  {
    id: 3,
    title: "Coffee House - Order Management",
    description: "Complete order management system with real-time tracking and payment integration",
    image: wd3,
    tags: ["Order System", "Payment", "Real-time"],
    year: "2024"
  },
  {
    id: 4,
    title: "Coffee House - Mobile Experience",
    description: "Responsive mobile-first design optimized for on-the-go coffee ordering",
    image: wd4,
    tags: ["Mobile", "Responsive", "PWA"],
    year: "2024"
  },
  {
    id: 5,
    title: "Wardrobe Fashion Platform",
    description: "AI-powered dress selection platform with virtual styling recommendations",
    image: wd5,
    tags: ["Fashion", "AI", "E-commerce"],
    year: "2024"
  },
  {
    id: 6,
    title: "Kalakshetra E-commerce - Frontend",
    description: "Cultural arts e-commerce platform showcasing traditional crafts and artworks",
    image: wd6,
    tags: ["E-commerce", "Cultural Arts", "React"],
    year: "2025"
  },
  {
    id: 7,
    title: "Kalakshetra - Product Catalog",
    description: "Comprehensive product catalog with advanced filtering and cultural storytelling",
    image: wd7,
    tags: ["Catalog", "Cultural", "MongoDB"],
    year: "2025"
  },
  {
    id: 8,
    title: "Kalakshetra - Artist Marketplace",
    description: "Multi-vendor marketplace connecting traditional artists with global audiences",
    image: wd8,
    tags: ["Marketplace", "Artists", "Multi-vendor"],
    year: "2025"
  },
  {
    id: 9,
    title: "Campus Crave - Canteen Automation",
    description: "Smart college canteen management system with automated ordering and inventory",
    image: wd9,
    tags: ["Automation", "College", "Food Service"],
    year: "2025"
  },
  {
    id: 10,
    title: "Campus Crave - Student Portal",
    description: "Student-focused interface for easy food ordering and meal planning",
    image: wd10,
    tags: ["Student Portal", "Food Planning", "Campus"],
    year: "2025"
  },
  {
    id: 11,
    title: "Campus Crave - Admin Dashboard",
    description: "Comprehensive admin dashboard for canteen operations and analytics",
    image: wd11,
    tags: ["Admin Dashboard", "Analytics", "Operations"],
    year: "2025"
  },
  {
    id: 12,
    title: "Kalakshetra - Homepage",
    description: "Showcasing the rich cultural heritage of India through a modern web experience",
    image: wd12,
    tags: ["Cultural", "Heritage", "React"],
    year: "2025"
  },
  // {
  //   id: 13,
  //   title: "Campus Crave - Admin Dashboard",
  //   description: "Comprehensive admin dashboard for canteen operations and analytics",
  //   image: wd13,
  //   tags: ["Admin Dashboard", "Analytics", "Operations"],
  //   year: "2025"
  // },
 
   {
    id: 17,
    title: "Kalakshetra- Shop Now",
    description: "Explore and shop for traditional Indian crafts and artworks",
    image: wd17,
    tags: ["Cultural", "Heritage", "Shop"],
    year: "2025"
  },
   {
    id: 15,
    title: "Kalakshetra - Cart",
    description: "Shopping cart functionality for managing selected traditional crafts",
    image: wd15,
    tags: ["E-commerce", "Cart", "Cultural"],
    year: "2025"
  }, 
    {
    id: 16,
    title: "Kalakshetra - Checkout",
    description: "Seamless checkout experience for purchasing traditional crafts",
    image: wd16,
    tags: ["E-commerce", "Checkout", "Cultural"],
    year: "2025"
  },
  
    {
    id: 18,
    title: "Kalakshetra - Product Description",
    description: "Detailed product descriptions highlighting the craftsmanship and cultural significance of each item",
    image: wd18,
    tags: ["Product Description", "Cultural", "E-commerce"],
    year: "2025"
  }
];

const WebDevPortfolio = () => {
    const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null);

   return (
    <div className="portfolio-page">
      <div className="container">
        <div className="portfolio-header">
          <Button2 text="← Back to Our Work" onClick={() => navigate(-1)} />
          <h1 className="portfolio-title">Web Development Portfolio</h1>
          <p className="portfolio-subtitle">
            Building robust, scalable web solutions that drive business growth and user engagement.
          </p>
        </div>

        <div className="portfolio-grid">
          {webdevProjects.map((project) => (
            <div className="portfolio-item" key={project.id}>
              <div
                className="portfolio-image-container"
                onClick={() => setModalImage(project.image)}
              >
                <img src={project.image} alt={project.title} className="portfolio-image" />
                <div className="portfolio-overlay">
                  <div className="portfolio-year">{project.year}</div>
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-item-title">{project.title}</h3>
                <p className="portfolio-item-desc">{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div className="image-modal" onClick={() => setModalImage(null)}>
          <span className="close-modal">&times;</span>
          <img src={modalImage} alt="Full view" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default WebDevPortfolio;