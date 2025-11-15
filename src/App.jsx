import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import MobileMenu from './components/MobileMenu/MobileMenu';

import './styles/App.css';

function App() {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="app-container">
      <Sidebar
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
      <MainContent
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
      <MobileMenu
        isOpen={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />

    </div>
  );
}

export default App;
