// src/components/FeatureAnimations/AIAssistantAnimation.jsx
import React from 'react';
import { motion } from 'motion/react';
import './FeatureAnimations.css';

const AIAssistantAnimation = ({ isHovered }) => {
  return (
    <div className="feature-animation ai-assistant">
      {/* Círculo central pulsante - representa la IA */}
      <motion.div
        className="ai-core"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          boxShadow: isHovered 
            ? ['0 0 20px #FD08BB', '0 0 40px #FD08BB', '0 0 20px #FD08BB']
            : '0 0 15px #FD08BB'
        }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="ai-icon">
          <motion.path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
            stroke="#FD08BB"
            strokeWidth="1.5"
            fill="rgba(253, 8, 187, 0.1)"
            animate={{ pathLength: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.5 }}
          />
          <motion.circle
            cx="8"
            cy="10"
            r="1.5"
            fill="#FD08BB"
            animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.circle
            cx="16"
            cy="10"
            r="1.5"
            fill="#FD08BB"
            animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.path
            d="M8 15c1.5 2 6.5 2 8 0"
            stroke="#FD08BB"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            animate={{ pathLength: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.5 }}
          />
        </svg>
      </motion.div>

      {/* Burbujas de chat flotantes */}
      <motion.div
        className="chat-bubble bubble-1"
        animate={{
          y: isHovered ? [-5, 5, -5] : 0,
          opacity: isHovered ? 1 : 0.6,
          scale: isHovered ? 1.1 : 1,
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
          y: isHovered ? [5, -5, 5] : 0,
          opacity: isHovered ? 1 : 0.4,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <span className="bubble-line"></span>
        <span className="bubble-line short"></span>
      </motion.div>

      {/* Partículas de datos */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`data-particle particle-${i}`}
          animate={{
            opacity: isHovered ? [0, 1, 0] : 0,
            scale: isHovered ? [0, 1, 0] : 0,
            x: isHovered ? [0, (i % 2 === 0 ? 30 : -30)] : 0,
            y: isHovered ? [0, (i < 3 ? -40 : 40)] : 0,
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
          rotate: isHovered ? 360 : 0,
          opacity: isHovered ? 1 : 0.5,
        }}
        transition={{ 
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          opacity: { duration: 0.3 }
        }}
      >
        <span className="time-badge">24/7</span>
      </motion.div>
    </div>
  );
};

export default AIAssistantAnimation;
