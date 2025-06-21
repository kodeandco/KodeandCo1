import React from 'react';
import Navbar from '../components/Navbar';
import './Contact.css';

export default function Contact() {
  return (
    <div>
      <div id="contact" className="contact-container">
        <h1>Want To Reach Out?</h1>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="contact-form"
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
        </form>

        <div className="contact-links">
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
        </div>
      </div>
    </div>
  );
}