import React from 'react';
import './OurVision.css';

const OurVision = () => {
  return (
    <section className="vision-section">
      <div className="vision-container">
        {/* LEFT SIDE - Placeholder Image */}
        <div className="vision-left">
          <img
            src="https://via.placeholder.com/600x400?text=Vision+Image"
            alt="Vision Placeholder"
            className="vision-img"
          />
        </div>

        {/* RIGHT SIDE - Text Content */}
        <div className="vision-right">
          <h2 className="vision-heading">OUR VISION</h2>
          <div className="vision-line"></div>
          <p className="vision-desc">
            We are a forward-thinking digital agency dedicated to pushing the boundaries of what's possible in the digital realm. Our mission is to create experiences that not only meet today's standards but anticipate tomorrow's needs.
          </p>

          <ul className="vision-points">
            <li>Innovation-driven approach</li>
            <li>Client-centric solutions</li>
            <li>Cutting-edge technology</li>
          </ul>

          <button className="vision-btn">Learn more about us</button>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
