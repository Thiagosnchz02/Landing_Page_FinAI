// src/components/TiltedCard.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import './TiltedCard.css';

// Hook simple para detectar el tamaño de la ventana
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile;
};

const springValues = { damping: 30, stiffness: 100, mass: 2 };

export default function TiltedCard({
  containerHeight = '400px',
  overlayContent = null,
  rotateAmplitude = 12,
  scaleOnHover = 1.05,
  disableTilt = false
}) {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const shouldDisable = isMobile || disableTilt;

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e) {
    if (shouldDisable || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    if (shouldDisable) return;
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    if (shouldDisable) return;
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <figure
      ref={ref}
      className={`tilted-card-figure ${shouldDisable ? 'is-mobile' : ''}`}
      style={{ height: containerHeight }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="tilted-card-inner"
        style={{
          rotateX: shouldDisable ? 0 : rotateX,
          rotateY: shouldDisable ? 0 : rotateY,
          scale: shouldDisable ? 1 : scale,
        }}
      >
        {overlayContent}
      </motion.div>
    </figure>
  );
}