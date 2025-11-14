import React from 'react';
import '../../styles/sections/About.css';

function About() {
  const personalInfo = [
    { label: 'Birthday', value: '22 Jan 2006' },
    { label: 'Age', value: '19' },
    { label: 'City', value: 'East Delhi, 110092' },
    { label: 'Email', value: 'ayushman1413@gmail.com' },
    { label: 'Phone', value: '+91 8887340368' },
    { label: 'Degree', value: 'Bachelor in Computer Application' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Website', value: 'www.ayush.com' },
  ];

  const socialLinks = [
    { label: 'GitHub', url: 'https://github.com/ayushman1413', icon: 'fab fa-github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ayushman01', icon: 'fab fa-linkedin-in' },
    { label: 'Instagram', url: 'https://www.instagram.com/ayushman__01', icon: 'fab fa-instagram' },
  ];

  return (
    <section className="section-about">
      <div className="section-title">
        <h2>About Me</h2>
        <div className="title-line"></div>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src="/professional-developer-portrait.png" alt="About Me" />
        </div>

        <div className="about-text">
          <h3>Web Developer & Designer</h3>
          <p>
            I am a passionate Web Developer and Designer with expertise in creating responsive, user-friendly websites 
            and applications. With a strong foundation in front-end and back-end technologies, I deliver high-quality 
            solutions that meet client needs and exceed expectations.
          </p>
          <p>
            My approach combines technical expertise with creative problem-solving to build digital experiences that 
            are both functional and visually appealing. I'm constantly learning and exploring new technologies to stay 
            at the forefront of web development trends.
          </p>

          <div className="personal-info-grid">
            {personalInfo.map((info, index) => (
              <div key={index} className="info-item">
                <span className="info-label">{info.label}:</span>
                <span className="info-value">{info.value}</span>
              </div>
            ))}
          </div>

          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className={link.icon}></i> {link.label}
              </a>
            ))}
          </div>

          <a href="/resume.pdf" download className="btn btn-primary">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
