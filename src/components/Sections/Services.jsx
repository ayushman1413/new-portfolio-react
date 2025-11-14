import React from 'react';
import '../../styles/sections/Services.css';

function Services() {
  const servicesData = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Custom website development with modern technologies and responsive design for optimal user experience.',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Creating websites that work flawlessly across all devices, from desktops to smartphones.',
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces that enhance the overall user experience.',
    },
    {
      icon: 'fas fa-database',
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs to power your web applications.',
    },
    {
      icon: 'fas fa-search',
      title: 'SEO Optimization',
      description: 'Improving your website\'s visibility in search engines to attract more organic traffic.',
    },
    {
      icon: 'fas fa-cogs',
      title: 'Website Maintenance',
      description: 'Regular updates, security patches, and performance optimization to keep your website running smoothly.',
    },
  ];

  return (
    <section className="section-services">
      <div className="section-title">
        <h2>My Services</h2>
        <div className="title-line"></div>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
