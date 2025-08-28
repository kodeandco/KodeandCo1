import React from 'react';
import { motion as motion } from 'framer-motion';

import './About.css';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { delay, duration: 0.8, ease: 'easeOut' },
    }),
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { delay, duration: 0.8, ease: 'easeOut' },
    }),
  };

  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <motion.h1
          className="about-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          Who Are We?
        </motion.h1>

        <motion.p
          className="about-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.2}
        >
          Kode &'Co is a team of passionate developers driven by innovation and excellence. 
          We specialize in creating cutting-edge digital solutions that bridge the gap between 
          complex technology and seamless user experiences.
        </motion.p>

        {/* Founders Section */}
        <div className="founders-section">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
          >
            Meet Our Founders
          </motion.h2>

          <div className="founders-grid">
            <motion.div
              className="founder-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              custom={0.4}
            >
              <div className="founder-image-placeholder">
                {/* Image placeholder for Maanvi */}
                <div className="image-placeholder">
                  <span>Maanvi's Photo</span>
                </div>
              </div>
              <div className="founder-info">
                <h3>Maanvi</h3>
                <p className="founder-title">Co-Founder & Engineering Lead</p>
                <p className="founder-description">
                  With a strong engineering background, Maanvi brings technical expertise 
                  and innovative problem-solving approaches to every project. Her passion 
                  for clean code and scalable solutions drives our technical excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="founder-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              custom={0.6}
            >
              <div className="founder-image-placeholder">
                {/* Image placeholder for Sharon */}
                <div className="image-placeholder">
                  <span>Sharon's Photo</span>
                </div>
              </div>
              <div className="founder-info">
                <h3>Sharon</h3>
                <p className="founder-title">Co-Founder & Strategy Director</p>
                <p className="founder-description">
                  Sharon combines engineering precision with business acumen, creating 
                  the perfect blend of technical innovation and market strategy. Her 
                  analytical mindset ensures every solution is both robust and profitable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Our Approach Section */}
        <motion.div
          className="approach-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.8}
        >
          <h2 className="section-title">Our Unique Approach</h2>
          <p className="approach-description">
            With our combined engineering backgrounds, we have developed a knack for understanding 
            both technology and business. This dual expertise allows us to create solutions that 
            are not only technically sound but also strategically valuable. We excel at breaking 
            down complex problems and building elegant, scalable solutions that drive real results.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="about-highlights">
          {[
            {
              title: 'Innovation',
              description: 'We stay ahead of tech trends and combine cutting-edge technologies with proven engineering principles to deliver groundbreaking solutions.',
              icon: '🚀'
            },
            {
              title: 'Problem-Solving',
              description: 'Our engineering mindset helps us dissect complex challenges and architect solutions that address root causes, not just symptoms.',
              icon: '🧩'
            },
            {
              title: 'Tech-Business Fusion',
              description: 'We bridge the gap between technical possibilities and business objectives, ensuring every solution drives measurable value.',
              icon: '⚡'
            }
          ].map((highlight, i) => (
            <motion.div
              className="highlight-card"
              key={highlight.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={1.0 + i * 0.2}
            >
              <div className="highlight-icon">{highlight.icon}</div>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="cta-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1.6}
        >
          <h2>Ready to Build Something Amazing?</h2>
          <p>Let's combine our engineering expertise with your vision to create exceptional digital experiences.</p>
        </motion.div>
      </div>
    </div>
  );
}