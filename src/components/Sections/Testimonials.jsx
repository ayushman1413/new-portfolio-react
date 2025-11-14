import React, { useState, useEffect } from 'react';
import '../../styles/sections/Testimonials.css';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialData = [
    {
      id: 1,
      name: 'Client 1',
      title: 'CEO, Tech Solutions',
      image: '/professional-client-avatar.png',
      quote: 'Ayushman created an outstanding website for my business. His attention to detail and creative approach exceeded my expectations. Highly recommended!',
    },
    {
      id: 2,
      name: 'Client 2',
      title: 'Marketing Director, Innovate Inc.',
      image: '/professional-client-avatar.png',
      quote: 'Working with Ayushman was a pleasure. He delivered the project on time and was very responsive to all my requests and feedback. I\'ll definitely work with him again!',
    },
    {
      id: 3,
      name: 'Client 3',
      title: 'Founder, Digital Creatives',
      image: '/professional-client-avatar.png',
      quote: 'Ayushman\'s technical skills and creativity are impressive. He transformed our outdated website into a modern, user-friendly platform that has significantly improved our online presence.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonialData.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };

  return (
    <section className="section-testimonials">
      <div className="section-title">
        <h2>Testimonials</h2>
        <div className="title-line"></div>
        <p className="subtitle">Client Reviews</p>
      </div>

      <div className="testimonials-container">
        <div className="testimonials-slider">
          {testimonialData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="testimonial-content">
                <i className="fas fa-quote-left quote-icon"></i>
                <p className="quote-text">{testimonial.quote}</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="author-image" />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-controls">
          <button className="nav-btn prev" onClick={handlePrev}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="dots">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>

          <button className="nav-btn next" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
