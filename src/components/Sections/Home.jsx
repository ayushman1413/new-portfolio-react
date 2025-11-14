import React, { useState, useEffect } from 'react';
import TypedText from '../TypedText/TypedText';
import '../../styles/sections/Home.css';

function Home({ onNavClick }) {
  return (
    <section className="section-home">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Ayushman</span>
          </h1>
          <div className="hero-subtitle">
            <span>I'm a </span>
            <TypedText />
          </div>
          <p className="hero-description">
            Building amazing web experiences with modern technologies and creative problem-solving
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => onNavClick('about')}>
              About Me
            </button>
            <button className="btn btn-secondary" onClick={() => onNavClick('contact')}>
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-content">
              <i className="fas fa-code"></i>
              <span>React</span>
            </div>
          </div>
          <div className="floating-card floating-card-2">
            <div className="card-content">
              <i className="fas fa-paint-brush"></i>
              <span>Design</span>
            </div>
          </div>
          <div className="floating-card floating-card-3">
            <div className="card-content">
              <i className="fas fa-server"></i>
              <span>Backend</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
