import React, { useState } from 'react';
import PortfolioModal from '../Portfolio/PortfolioModal';
import '../../styles/sections/Portfolio.css';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'Ecolearners',
      category: 'web',
      description: 'A platform for learning about the environment and how to save it.',
      image: '/ecolearners-platform.jpg',
      url: 'https://ecolearner.netlify.app/',
      year: 'September 2025',
      technologies: ['React', 'CSS3', 'API'],
    },
    {
      id: 2,
      title: 'CareerGuide',
      category: 'web',
      description: 'Career advisory platform for students finding the best career options.',
      image: '/career-guidance-app.jpg',
      url: 'https://carrerguidpro.netlify.app/',
      year: 'September 2025',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Smart Attendance',
      category: 'web',
      description: 'Facial recognition-based attendance management system for schools.',
      image: '/face-recognition-attendance.jpg',
      url: 'https://face-smart-attendance-system.netlify.app/',
      year: 'May 2025',
      technologies: ['React', 'Face API', 'JavaScript'],
    },
    {
      id: 4,
      title: 'SAITM Chatbot',
      category: 'web',
      description: 'AI chatbot providing college information via text and voice queries.',
      image: '/chatbot-interface.png',
      url: 'https://saitm-chatboat.netlify.app/',
      year: 'May 2025',
      technologies: ['React', 'AI', 'Voice API'],
    },
    {
      id: 5,
      title: 'Fitplus Watch',
      category: 'web',
      description: 'E-commerce website for premium watches with reviews and features.',
      image: '/smartwatch-ecommerce.jpg',
      url: 'https://fitpulselandingpage.netlify.app/',
      year: 'July 2025',
      technologies: ['React', 'Stripe', 'CSS'],
    },
    {
      id: 6,
      title: 'Blog Platform',
      category: 'web',
      description: 'Full-featured blog UI where users can read and publish articles.',
      image: '/blog-website-concept.png',
      url: 'https://ayush-blog-ui.netlify.app/',
      year: 'July 2025',
      technologies: ['React', 'Markdown', 'Node.js'],
    },
    {
      id: 7,
      title: 'Weather App',
      category: 'app',
      description: 'Real-time weather app providing forecasts for any location worldwide.',
      image: '/weather-application.png',
      url: 'https://ayush01-weather-app.netlify.app/',
      year: 'April 2025',
      technologies: ['React', 'Weather API', 'Geolocation'],
    },
    {
      id: 8,
      title: 'SAITM College Website',
      category: 'web',
      description: 'Responsive college website with integrated chatbot support.',
      image: '/college-website-design.jpg',
      url: 'https://saitm-college.netlify.app/',
      year: 'May 2025',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      id: 9,
      title: 'Weight Converter',
      category: 'app',
      description: 'Utility app for converting between different weight units.',
      image: '/unit-converter-tool.jpg',
      url: 'https://weight-converter2.netlify.app/',
      year: '2025',
      technologies: ['React', 'JavaScript'],
    },
    {
      id: 10,
      title: 'Restaurant Website',
      category: 'design',
      description: 'Modern restaurant website with menu and reservation features.',
      image: '/restaurant-website-design.png',
      url: 'https://restaurent-webpage.netlify.app/',
      year: 'November 2024',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      id: 11,
      title: 'Age Calculator',
      category: 'app',
      description: 'Simple yet accurate age calculation web application.',
      image: '/calculator-tool.jpg',
      url: 'https://ayush-agecalculator.netlify.app/',
      year: '2025',
      technologies: ['React', 'JavaScript'],
    },
    {
      id: 12,
      title: 'Food Express',
      category: 'web',
      description: 'Food ordering platform with real-time user authentication.',
      image: '/food-delivery-app-screen.png',
      url: 'https://food-express-webpage.netlify.app/',
      year: 'April 2025',
      technologies: ['React', 'Firebase', 'Stripe'],
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section className="section-portfolio">
      <div className="section-title">
        <h2>Projects</h2>
        <div className="title-line"></div>
      </div>

      <div className="portfolio-filters">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
          onClick={() => setActiveFilter('web')}
        >
          Web
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'app' ? 'active' : ''}`}
          onClick={() => setActiveFilter('app')}
        >
          App
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`}
          onClick={() => setActiveFilter('design')}
        >
          Design
        </button>
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="portfolio-card"
            onClick={() => setSelectedProject(project)}
          >
            <div className="portfolio-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
              <div className="portfolio-overlay">
                <button className="portfolio-btn">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <PortfolioModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Portfolio;
