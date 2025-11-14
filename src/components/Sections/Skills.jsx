import React, { useState, useEffect } from 'react';
import '../../styles/sections/Skills.css';

function Skills() {
  const [animateSkills, setAnimateSkills] = useState(false);

  const skillsData = [
    { name: 'HTML', percentage: 100 },
    { name: 'CSS', percentage: 100 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'React', percentage: 90 },
    { name: 'Node.js', percentage: 80 },
    { name: 'MongoDB', percentage: 85 },
    { name: 'TypeScript', percentage: 70 },
    { name: 'Python', percentage: 60 },
  ];

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimateSkills(true);
  }, []);

  return (
    <section className="section-skills">
      <div className="section-title">
        <h2>My Skills</h2>
        <div className="title-line"></div>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <h3 className="skill-name">{skill.name}</h3>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div className="skill-bar">
              <div
                className={`skill-progress ${animateSkills ? 'animate' : ''}`}
                style={{ '--percentage': skill.percentage }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="skills-summary">
        <h3>Technical Expertise</h3>
        <p>
          Proficient in modern web development technologies including HTML5, CSS3, and JavaScript ES6+. 
          Strong experience with React for building dynamic user interfaces, Node.js for backend development, 
          and databases like MongoDB. Continuously expanding knowledge in TypeScript, web performance optimization, 
          and emerging technologies.
        </p>
      </div>
    </section>
  );
}

export default Skills;
