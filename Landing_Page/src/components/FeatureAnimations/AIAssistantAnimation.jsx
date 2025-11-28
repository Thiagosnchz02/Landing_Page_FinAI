// src/components/FeatureAnimations/AIAssistantAnimation.jsx
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import './FeatureAnimations.css';

// Detectar móvil una sola vez
const isMobile = typeof window !== 'undefined' && 
  (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768);

const AIAssistantAnimation = ({ isHovered }) => {
  // En móvil, consideramos siempre hover activo pero con animaciones reducidas
  const active = isMobile ? true : isHovered;
  
  // Reducir partículas en móvil
  const particleCount = isMobile ? 0 : 6;

  return (
    <div className="feature-animation ai-assistant">
      {/* Círculo central pulsante - representa la IA */}
      <motion.div
        className="ai-core"
        animate={{
          scale: active && !isMobile ? [1, 1.1, 1] : 1,
          boxShadow: active 
            ? '0 0 25px #FD08BB'
            : '0 0 15px #FD08BB'
        }}
        transition={{ duration: 2, repeat: active && !isMobile ? Infinity : 0 }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="ai-icon">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
            stroke="#FD08BB"
            strokeWidth="1.5"
            fill="rgba(253, 8, 187, 0.1)"
          />
          <circle cx="8" cy="10" r="1.5" fill="#FD08BB" />
          <circle cx="16" cy="10" r="1.5" fill="#FD08BB" />
          <path
            d="M8 15c1.5 2 6.5 2 8 0"
            stroke="#FD08BB"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Burbujas de chat flotantes - solo desktop */}
      {!isMobile && (
        <>
          <motion.div
            className="chat-bubble bubble-1"
            animate={{
              y: active ? [-5, 5, -5] : 0,
              opacity: active ? 1 : 0.6,
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="bubble-dot"></span>
            <span className="bubble-dot"></span>
            <span className="bubble-dot"></span>
          </motion.div>

          <motion.div
            className="chat-bubble bubble-2"
            animate={{
              y: active ? [5, -5, 5] : 0,
              opacity: active ? 1 : 0.4,
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <span className="bubble-line"></span>
            <span className="bubble-line short"></span>
          </motion.div>
        </>
      )}

      {/* Partículas de datos - solo desktop */}
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className={`data-particle particle-${i}`}
          animate={{
            opacity: active ? [0, 1, 0] : 0,
            scale: active ? [0, 1, 0] : 0,
            x: active ? [0, (i % 2 === 0 ? 30 : -30)] : 0,
            y: active ? [0, (i < 3 ? -40 : 40)] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Anillo de 24/7 */}
      <motion.div
        className="availability-ring"
        animate={{
          rotate: active && !isMobile ? 360 : 0,
          opacity: active ? 1 : 0.5,
        }}
        transition={{ 
          rotate: { duration: 12, repeat: isMobile ? 0 : Infinity, ease: "linear" },
          opacity: { duration: 0.3 }
        }}
      >
        <span className="time-badge">24/7</span>
      </motion.div>
    </div>
  );
};

export default AIAssistantAnimation;
