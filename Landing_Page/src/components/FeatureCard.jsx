// src/components/FeatureCard.jsx
import React, { useState, useEffect } from 'react';
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

// Detectar móvil
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
};

const FeatureCard = ({ title, description, animationType, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mobile, setMobile] = useState(false);
  
  useEffect(() => {
    setMobile(isMobile());
    const handleResize = () => setMobile(isMobile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const AnimationComponent = animationComponents[animationType];
  const auraColor = auraColors[animationType];

  return (
    <div 
      className={`feature-card-wrapper feature-card-wrapper--${animationType}`}
      style={{ 
        '--aura-color': auraColor,
        '--animation-delay': `${0.2 + index * 0.2}s`
      }}
      onMouseEnter={() => !mobile && setIsHovered(true)}
      onMouseLeave={() => !mobile && setIsHovered(false)}
    >
      <TiltedCard
        containerHeight="100%"
        disableTilt={mobile}
        overlayContent={
          <div className={`feature-card-content ${isHovered ? 'is-hovered' : ''}`}>
            {/* Animación - solo en desktop */}
            {AnimationComponent && !mobile && (
              <AnimationComponent isHovered={isHovered} />
            )}
            
            {/* Icono estático para móvil */}
            {mobile && (
              <div className="feature-card-icon-mobile" style={{ color: auraColor }}>
                {animationType === 'ai-assistant' && '🤖'}
                {animationType === 'control' && '📊'}
                {animationType === 'independence' && '🎯'}
              </div>
            )}
            
            {/* Texto */}
            <h3 className="feature-card-title">{title}</h3>
            <p className="feature-card-description">{description}</p>
          </div>
        }
      />
      
      {/* Efecto de aura dinámico - solo en desktop */}
      {!mobile && (
        <div 
          className={`feature-card-aura ${isHovered ? 'is-active' : ''}`}
          style={{ '--aura-color': auraColor }}
        />
      )}
    </div>
  );
};

export default FeatureCard;
