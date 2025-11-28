// src/components/TiltedCard.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import './TiltedCard.css';

// Hook simple para detectar el tamaño de la ventana
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const springValues = { damping: 30, stiffness: 100, mass: 2 };

export default function TiltedCard({
  containerHeight = '400px',
  overlayContent = null,
  rotateAmplitude = 12,
  scaleOnHover = 1.05
}) {
  const ref = useRef(null);
  const isMobile = useIsMobile(); // Detectamos si es móvil

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e) {
    if (isMobile || !ref.current) return; // Si es móvil, no hace NADA
    
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    if (isMobile) return;
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    if (isMobile) return;
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    // Añadimos una clase 'is-mobile' para que el CSS pueda reaccionar
    <figure
      ref={ref}
      className={`tilted-card-figure ${isMobile ? 'is-mobile' : ''}`}
      style={{ height: containerHeight }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="tilted-card-inner"
        // Si es móvil, los valores de animación se quedan en su estado inicial
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          scale: isMobile ? 1 : scale,
        }}
      >
        {overlayContent}
      </motion.div>
    </figure>
  );
}