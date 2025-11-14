import React, { useState } from 'react';
import './ThemeSelector.css';

function ThemeSelector({ currentTheme, onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'dark', name: 'Dark', icon: '🌙', color: '#6366f1' },
    { id: 'blue', name: 'Blue', icon: '🔵', color: '#3b82f6' },
    { id: 'purple', name: 'Purple', icon: '🟣', color: '#8b5cf6' },
    { id: 'orange', name: 'Orange', icon: '🟠', color: '#f97316' },
    { id: 'neon', name: 'Neon', icon: '⚡', color: '#00ff88' },
    { id: 'minimal-white', name: 'Minimal', icon: '⚪', color: '#000000' },
  ];

  const handleThemeSelect = (themeId) => {
    onThemeChange(themeId);
    setIsOpen(false);
  };

  const currentThemeData = themes.find(theme => theme.id === currentTheme) || themes[0];

  return (
    <div className="theme-selector">
      <button
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Change Theme"
      >
        <span className="theme-icon">{currentThemeData.icon}</span>
        <span className="theme-name">{currentThemeData.name}</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>

      {isOpen && (
        <div className="theme-dropdown">
          {themes.map((theme) => (
            <button
              key={theme.id}
              className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
              onClick={() => handleThemeSelect(theme.id)}
            >
              <span className="theme-option-icon">{theme.icon}</span>
              <span className="theme-option-name">{theme.name}</span>
              {currentTheme === theme.id && (
                <i className="fas fa-check"></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ThemeSelector;
