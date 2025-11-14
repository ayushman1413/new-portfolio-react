import React from 'react';
import '../../styles/sections/Resume.css';

function Resume() {
  const education = [
    {
      degree: 'Bachelor of Computer Application',
      period: '2024 - 2027',
      institution: 'St. Andrews Institute of Technology and Management, Gurugram',
    },
    {
      degree: 'Intermediate (PCM)',
      period: '2023',
      institution: 'R.M.S Inter College, Bikapur, Ayodhya',
    },
    {
      degree: 'High School',
      period: '2021',
      institution: 'R.M.S Inter College, Bikapur, Ayodhya',
    },
  ];

  const experience = [
    {
      title: 'Web Developer',
      period: 'Present',
      highlights: [
        'Lead development of web applications and interactive features',
        'Manage multiple projects with excellent time management',
        'Collaborate with design and product teams',
        'Implement responsive and performance-optimized solutions',
      ],
    },
    {
      title: 'Web Developer',
      period: '2025',
      highlights: [
        'Developed marketing programs and promotional materials',
        'Created and maintained company website',
        'Designed new website with modern technologies',
        'Implemented SEO optimization strategies',
      ],
    },
    {
      title: 'Intern',
      period: '2024',
      highlights: [
        'Assisted in web and mobile app development',
        'Participated in team meetings and project discussions',
        'Learned various web technologies and frameworks',
        'Worked on projects under senior developer guidance',
      ],
    },
  ];

  return (
    <section className="section-resume">
      <div className="section-title">
        <h2>Resume</h2>
        <div className="title-line"></div>
      </div>

      <a href="/resume.pdf" download className="btn btn-primary download-btn">
        <i className="fas fa-download"></i> Download Resume
      </a>

      <div className="resume-content">
        <div className="resume-column">
          <h3 className="resume-section-title">
            <i className="fas fa-graduation-cap"></i> Education
          </h3>
          <div className="resume-items">
            {education.map((item, index) => (
              <div key={index} className="resume-item">
                <h4>{item.degree}</h4>
                <p className="period">{item.period}</p>
                <p className="institution">{item.institution}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-column">
          <h3 className="resume-section-title">
            <i className="fas fa-briefcase"></i> Experience
          </h3>
          <div className="resume-items">
            {experience.map((item, index) => (
              <div key={index} className="resume-item">
                <h4>{item.title}</h4>
                <p className="period">{item.period}</p>
                <ul className="highlights">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
