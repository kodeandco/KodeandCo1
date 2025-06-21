import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import './Contact.css';

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <div>
      
      <div id="contact" className="contact-container">
        <div className="contact-content">
          {/* Left Side: Heading */}
          <motion.div
            className="contact-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1>Want To Reach Out?</h1>
            <p>Drop us a message and we’ll get back to you soon!</p>
          </motion.div>

          {/* Right Side: Form */}
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="contact-form"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </motion.form>
        </div>

        {/* Contact Links */}
        <motion.div
          className="contact-links"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          <a
            href="https://linkedin.com/in/maanvishadakshari"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/maanvishadakshari"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://behance.net/maanvishadakshari"
            target="_blank"
            rel="noreferrer"
          >
            Behance
          </a>
        </motion.div>
      </div>
    </div>
  );
}
