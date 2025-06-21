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
          className="about-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.2}
        >
          Kode &'Co is a team of passionate developers...
        </motion.p>

        <motion.p
          className="about-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0.4}
        >
          From developing dynamic web platforms...
        </motion.p>

        <div className="about-highlights">
          {['Innovation', 'Simplicity', 'Collaboration'].map((title, i) => (
            <motion.div
              className="highlight-card"
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.6 + i * 0.2}
            >
              <h3>✨ {title}</h3>
              <p>
                {title === 'Innovation'
                  ? 'We combine tech trends...'
                  : title === 'Simplicity'
                  ? 'Minimal, powerful...'
                  : 'We build strong relationships.'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
