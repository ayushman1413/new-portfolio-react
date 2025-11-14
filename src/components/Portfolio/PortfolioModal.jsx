import React from 'react';
import '../../styles/Portfolio/PortfolioModal.css';

function PortfolioModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="modal-body">
          <div className="modal-image">
            <img src={project.image || "/placeholder.svg"} alt={project.title} />
          </div>

          <div className="modal-details">
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-description">{project.description}</p>

            <div className="modal-meta">
              <div className="meta-item">
                <h4>Year</h4>
                <p>{project.year}</p>
              </div>
              <div className="meta-item">
                <h4>Technologies</h4>
                <div className="tech-list">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Project <i className="fas fa-external-link-alt"></i>
              </a>
              <a href="https://github.com/ayushman1413" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;
