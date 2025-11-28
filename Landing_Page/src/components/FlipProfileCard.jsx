// src/components/FlipProfileCard.jsx
import React, { useState } from 'react';
import './FlipProfileCard.css';

const FlipProfileCard = ({
  avatarUrl,
  name = 'Nombre',
  title = 'Cargo',
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    // Toggle para móvil (tap)
    setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    // Solo en desktop
    if (window.innerWidth > 768) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    // Solo en desktop
    if (window.innerWidth > 768) {
      setIsFlipped(false);
    }
  };

  return (
    <div 
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flip-card-inner">
        {/* --- PARTE TRASERA (visible por defecto) --- */}
        <div className="flip-card-back">
          <div className="flip-card-glow"></div>
          <div className="flip-back-content">
            <div className="flip-back-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="flip-back-name">{name}</h3>
            <p className="flip-back-title">{title}</p>
            <span className="flip-back-hint">🔄</span>
          </div>
        </div>

        {/* --- PARTE FRONTAL (foto - se ve al girar) --- */}
        <div className="flip-card-front">
          <div className="flip-card-glow"></div>
          <div className="flip-front-image">
            <img 
              src={avatarUrl} 
              alt={`${name} avatar`}
              loading="lazy"
            />
          </div>
          <div className="flip-front-overlay">
            <div className="flip-front-info">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipProfileCard;
