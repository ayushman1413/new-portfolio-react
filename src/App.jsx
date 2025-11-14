import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import MobileMenu from './components/MobileMenu/MobileMenu';
import './styles/App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="app-container">
      <Sidebar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme}
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
