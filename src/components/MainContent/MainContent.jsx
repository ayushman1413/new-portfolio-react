import React from 'react';
import Home from '../Sections/Home';
import About from '../Sections/About';
import Portfolio from '../Sections/Portfolio';
import Services from '../Sections/Services';
import Skills from '../Sections/Skills';
import Resume from '../Sections/Resume';
import Testimonials from '../Sections/Testimonials';
import Certificates from '../Sections/Certificates';
import Contact from '../Sections/Contact';
import '../../styles/MainContent.css';

function MainContent({ activeSection, onNavClick }) {
  return (
    <main className="main-content">
      <div className={`section ${activeSection === 'home' ? 'active' : ''}`}>
        <Home onNavClick={onNavClick} />
      </div>
      <div className={`section ${activeSection === 'about' ? 'active' : ''}`}>
        <About />
      </div>
      <div className={`section ${activeSection === 'portfolio' ? 'active' : ''}`}>
        <Portfolio />
      </div>
      <div className={`section ${activeSection === 'services' ? 'active' : ''}`}>
        <Services />
      </div>
      <div className={`section ${activeSection === 'skills' ? 'active' : ''}`}>
        <Skills />
      </div>
      <div className={`section ${activeSection === 'resume' ? 'active' : ''}`}>
        <Resume />
      </div>
      <div className={`section ${activeSection === 'testimonials' ? 'active' : ''}`}>
        <Testimonials />
      </div>
      <div className={`section ${activeSection === 'certificates' ? 'active' : ''}`}>
        <Certificates />
      </div>
      <div className={`section ${activeSection === 'contact' ? 'active' : ''}`}>
        <Contact />
      </div>
    </main>
  );
}

export default MainContent;
