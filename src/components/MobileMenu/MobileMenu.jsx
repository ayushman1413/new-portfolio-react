import React from 'react';
import '../../styles/MobileMenu.css';

function MobileMenu({ isOpen, onToggle, activeSection, onNavClick }) {
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
    <>
      <button className={`mobile-menu-toggle ${isOpen ? 'active' : ''}`} onClick={onToggle}>
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => onNavClick(item.id)}
                >
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MobileMenu;
