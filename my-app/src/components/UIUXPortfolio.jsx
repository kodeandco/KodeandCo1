
// UIUXPortfolio.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button2 from './Button2';
import './PortfolioPage.css';

// Import your UI/UX images
import u1 from '../assets/u1.png'; // Menu of cheesecake
import u2 from '../assets/u2.png'; // Furniture
import u3 from '../assets/u3.png'; // Dog adoption
import u5 from '../assets/u5.png'; // Fike grocery app
import u6 from '../assets/u6.png'; // Thrive website
import u7 from '../assets/u7.png'; // Castellan website (rectangle)
import u8 from '../assets/u8.png'; // Castellan website (rectangle)
import u9 from '../assets/u9.png'; // Castellan website (rectangle)

const uiuxProjects = [
  {
    id: 1,
    title: "Cheesecake Menu Design",
    description: "Elegant menu interface design with focus on visual hierarchy and appetizing presentation",
    image: u1,
    tags: ["Menu Design", "Food & Beverage", "UI Design"],
    year: "2024"
  },
  {
    id: 2,
    title: "Furniture Showcase Platform",
    description: "Modern furniture catalog interface with immersive product visualization",
    image: u2,
    tags: ["E-commerce", "Product Design", "Furniture"],
    year: "2024"
  },
  {
    id: 3,
    title: "Dog Adoption App",
    description: "Heartwarming adoption platform connecting pets with loving families",
    image: u3,
    tags: ["Mobile App", "Social Impact", "Pet Care"],
    year: "2024"
  },
  {
    id: 4,
    title: "Fike Grocery App",
    description: "Streamlined grocery shopping experience with smart recommendations",
    image: u5,
    tags: ["Mobile App", "Grocery", "E-commerce"],
    year: "2024"
  },
  {
    id: 5,
    title: "Thrive Wellness Website",
    description: "Health and wellness platform promoting holistic lifestyle choices",
    image: u6,
    tags: ["Web Design", "Health", "Wellness"],
    year: "2023"
  },
  {
    id: 6,
    title: "Castellan Business Suite",
    description: "Professional business management interface with comprehensive dashboard",
    image: u7,
    tags: ["Business", "Dashboard", "Enterprise"],
    year: "2023"
  },
  {
    id: 7,
    title: "Castellan Analytics Platform",
    description: "Data visualization platform for business intelligence and reporting",
    image: u8,
    tags: ["Analytics", "Data Viz", "Business"],
    year: "2023"
  },
  {
    id: 8,
    title: "Castellan CRM System",
    description: "Customer relationship management system with intuitive workflow design",
    image: u9,
    tags: ["CRM", "Enterprise", "Workflow"],
    year: "2023"
  }
];

const UIUXPortfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="portfolio-page">
      <div className="container">
        <div className="portfolio-header">
          <Button2 text="← Back to Our Work" onClick={() => navigate(-1)} />
          <h1 className="portfolio-title">UI/UX Design Portfolio</h1>
          <p className="portfolio-subtitle">
            Creating exceptional user experiences through thoughtful design and research-driven solutions.
          </p>
        </div>

        <div className="portfolio-grid">
          {uiuxProjects.map((project) => (
            <div className="portfolio-item" key={project.id}>
              <div className="portfolio-image-container">
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
    </div>
  );
};

export default UIUXPortfolio;

