import React from 'react';
import '../../styles/sections/Certificates.css';

function Certificates() {
  const certificatesData = [
    {
      id: 1,
      title: 'Certificate in Data Entry Operator',
      issuer: 'NIELIT',
      year: '2023',
      image: '/formal-certificate.png',
    },
    {
      id: 2,
      title: 'Codetantra Completion Certificate',
      issuer: 'Codetantra',
      year: '2025',
      image: '/formal-certificate.png',
    },
    {
      id: 3,
      title: 'Full Stack Development Training',
      issuer: 'College',
      year: '2024',
      image: '/formal-certificate.png',
    },
    {
      id: 4,
      title: 'Aptitude and Reasoning',
      issuer: 'College',
      year: '2025',
      image: '/formal-certificate.png',
    },
    {
      id: 5,
      title: 'Hackathon Participation - SamAi',
      issuer: 'College',
      year: '2024',
      image: '/formal-certificate.png',
    },
    {
      id: 6,
      title: 'Innoviz Competition',
      issuer: 'College',
      year: '2025',
      image: '/formal-certificate.png',
    },
  ];

  return (
    <section className="section-certificates">
      <div className="section-title">
        <h2>Certificates</h2>
        <div className="title-line"></div>
      </div>

      <div className="certificates-grid">
        {certificatesData.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="certificate-image">
              <img src={cert.image || "/placeholder.svg"} alt={cert.title} />
            </div>
            <div className="certificate-info">
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="year">{cert.year}</p>
              <a href="#" className="view-btn">View Certificate</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
