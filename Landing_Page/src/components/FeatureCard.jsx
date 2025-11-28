// src/components/FeatureCard.jsx
import React, { useState } from 'react';
import TiltedCard from './TiltedCard';
import { AIAssistantAnimation, ControlAnimation, IndependenceAnimation } from './FeatureAnimations';
import './FeatureCard.css';

// Mapeo de animaciones por tipo
const animationComponents = {
  'ai-assistant': AIAssistantAnimation,
  'control': ControlAnimation,
  'independence': IndependenceAnimation,
};

// Colores de aura por tipo
const auraColors = {
  'ai-assistant': '#FD08BB',
  'control': '#0015FF',
  'independence': '#9900FF',
};

const FeatureCard = ({ title, description, animationType, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const AnimationComponent = animationComponents[animationType];
  const auraColor = auraColors[animationType];

  return (
    <div 
      className={`feature-card-wrapper feature-card-wrapper--${animationType}`}
      style={{ 
        '--aura-color': auraColor,
        '--animation-delay': `${0.2 + index * 0.2}s`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TiltedCard
        containerHeight="100%"
        overlayContent={
          <div className={`feature-card-content ${isHovered ? 'is-hovered' : ''}`}>
            {/* Animación */}
            {AnimationComponent && (
              <AnimationComponent isHovered={isHovered} />
            )}
            
            {/* Texto */}
            <h3 className="feature-card-title">{title}</h3>
            <p className="feature-card-description">{description}</p>
          </div>
        }
      />
      
      {/* Efecto de aura dinámico */}
      <div 
        className={`feature-card-aura ${isHovered ? 'is-active' : ''}`}
        style={{ '--aura-color': auraColor }}
      />
    </div>
  );
};

export default FeatureCard;
