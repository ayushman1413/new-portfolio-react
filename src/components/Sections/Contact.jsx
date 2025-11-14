import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/sections/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_ayush',
        'template_yzgd8em',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'CxJGUxwe0g66GRkCI'
      );
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-contact">
      <div className="section-title">
        <h2>Contact Me</h2>
        <div className="title-line"></div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-text">
              <h3>Location</h3>
              <p>East Delhi, 110092, DELHI</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-text">
              <h3>Email</h3>
              <p>
                <a href="mailto:ayushman1413@gmail.com">ayushman1413@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-text">
              <h3>Phone</h3>
              <p>
                <a href="tel:+918887340368">+91 8887340368</a>
              </p>
            </div>
          </div>

          <div className="contact-social">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://github.com/ayushman1413" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ayushman01" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/ayushman__01" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/qr/DLA6TIZZUVKUL1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Sending...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i> Send Message
              </>
            )}
          </button>

          {status && (
            <p className={`form-status ${status.includes('successfully') ? 'success' : 'error'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
