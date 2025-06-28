import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button2 from './Button2';
import './PortfolioPage.css';

import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';

const posterProjects = [
  { id: 1, title: "Prime Brand Campaign", description: "Premium brand poster design emphasizing luxury and exclusivity", image: p1, tags: ["Branding", "Luxury", "Campaign"], year: "2024" },
  { id: 2, title: "25% Off Sale - Fashion Edition", description: "Eye-catching promotional poster for fashion retail sale campaign", image: p2, tags: ["Sale", "Fashion", "Promotional"], year: "2024" },
  { id: 3, title: "25% Off Sale - Electronics", description: "Tech-focused promotional design with modern geometric elements", image: p3, tags: ["Electronics", "Tech", "Geometric"], year: "2024" },
  { id: 4, title: "25% Off Sale - Lifestyle", description: "Lifestyle-oriented sale poster with vibrant colors and dynamic composition", image: p4, tags: ["Lifestyle", "Vibrant", "Dynamic"], year: "2024" },
  { id: 5, title: "Festive Celebration Poster", description: "Colorful festive poster celebrating cultural traditions and community spirit", image: p5, tags: ["Festive", "Cultural", "Celebration"], year: "2025" },
  { id: 6, title: "Art of Science Exhibition", description: "Sophisticated poster design merging artistic expression with scientific discovery", image: p6, tags: ["Science", "Art", "Exhibition"], year: "2025" }
];

const PosterPortfolio = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="portfolio-page">
      <div className="container">
        <div className="portfolio-header">
          <Button2 text="← Back to Our Work" onClick={() => navigate(-1)} />
          <h1 className="portfolio-title">Poster Design Portfolio</h1>
          <p className="portfolio-subtitle">
            Creating compelling visual narratives that capture attention and communicate messages effectively.
          </p>
        </div>

        <div className="portfolio-grid">
          {posterProjects.map((project) => (
            <div className="portfolio-item" key={project.id}>
              <div
                className="portfolio-image-container"
                onClick={() => setSelectedImage(project.image)}
                style={{ cursor: "zoom-in" }}
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <span className="close-modal" onClick={closeModal}>&times;</span>
          <img src={selectedImage} alt="Full View" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default PosterPortfolio;
