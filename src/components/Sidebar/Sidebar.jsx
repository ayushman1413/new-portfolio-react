import React from 'react';
import '../../styles/Sidebar.css';

function Sidebar({ isDarkMode, toggleTheme, activeSection, onNavClick }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About Me', icon: 'fas fa-user' },
    { id: 'portfolio', label: 'Projects', icon: 'fas fa-briefcase' },
    { id: 'services', label: 'Services', icon: 'fas fa-laptop-code' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-code' },
    { id: 'resume', label: 'Resume', icon: 'fas fa-file' },
    { id: 'testimonials', label: 'Testimonials', icon: 'fas fa-comments' },
    { id: 'certificates', label: 'Certificates', icon: 'fas fa-certificate' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' },
  ];

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <div className="profile-img">
          <img src="/public/Profilepicture.png" alt="Ayushman Vishwakarma" />
        </div>
        <h2 className="profile-name">Ayushman Vishwakarma</h2>
        <p className="profile-title">Full Stack Developer</p>
        
        <div className="social-icons">
          <a href="https://github.com/ayushman1413" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ayushman01" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/ayushman__01" target="_blank" rel="noopener noreferrer" title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/qr/DLA6TIZZUVKUL1" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/share/19VLd527yQ/" target="_blank" rel="noopener noreferrer" title="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => onNavClick(item.id)}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="theme-toggle-section">
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
          <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
