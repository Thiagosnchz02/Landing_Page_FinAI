// src/components/FeatureAnimations/IndependenceAnimation.jsx
import React from 'react';
import { motion } from 'motion/react';
import './FeatureAnimations.css';

const IndependenceAnimation = ({ isHovered }) => {
  return (
    <div className="feature-animation independence-animation">
      {/* Gráfico de línea ascendente */}
      <svg className="growth-chart" viewBox="0 0 120 60" fill="none">
        {/* Grid de fondo */}
        <motion.g
          animate={{ opacity: isHovered ? 0.3 : 0.1 }}
          transition={{ duration: 0.3 }}
        >
          {[...Array(5)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="10"
              y1={10 + i * 12}
              x2="110"
              y2={10 + i * 12}
              stroke="#9900FF"
              strokeWidth="0.5"
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={10 + i * 20}
              y1="10"
              x2={10 + i * 20}
              y2="58"
              stroke="#9900FF"
              strokeWidth="0.5"
            />
          ))}
        </motion.g>

        {/* Línea de crecimiento */}
        <motion.path
          d="M10 50 Q30 45, 40 40 T60 30 T80 20 T100 12 L110 8"
          stroke="url(#growthGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isHovered ? 1 : 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Área bajo la curva */}
        <motion.path
          d="M10 50 Q30 45, 40 40 T60 30 T80 20 T100 12 L110 8 L110 58 L10 58 Z"
          fill="url(#areaGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.3 : 0.1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Punto final brillante */}
        <motion.circle
          cx="110"
          cy="8"
          r="4"
          fill="#FC3DF3"
          animate={{
            r: isHovered ? [4, 6, 4] : 3,
            opacity: isHovered ? 1 : 0.5,
          }}
          transition={{ duration: 1, repeat: Infinity }}
        />

        <defs>
          <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FC3DF3" />
            <stop offset="100%" stopColor="#9900FF" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9900FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#9900FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Hucha/Meta llenándose */}
      <div className="piggy-container">
        <motion.div
          className="piggy-bank"
          animate={{
            y: isHovered ? [-3, 3, -3] : 0,
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg viewBox="0 0 64 64" className="piggy-icon">
            {/* Cuerpo de la hucha */}
            <motion.ellipse
              cx="32"
              cy="38"
              rx="22"
              ry="18"
              fill="rgba(153, 0, 255, 0.2)"
              stroke="#9900FF"
              strokeWidth="2"
              animate={{
                fill: isHovered 
                  ? 'rgba(153, 0, 255, 0.4)' 
                  : 'rgba(153, 0, 255, 0.2)'
              }}
            />
            {/* Ranura */}
            <motion.rect
              x="26"
              y="22"
              width="12"
              height="3"
              rx="1.5"
              fill="#9900FF"
            />
            {/* Oreja */}
            <motion.ellipse
              cx="18"
              cy="30"
              rx="5"
              ry="7"
              fill="rgba(153, 0, 255, 0.3)"
              stroke="#9900FF"
              strokeWidth="1.5"
            />
            {/* Ojo */}
            <motion.circle
              cx="22"
              cy="35"
              r="2"
              fill="#9900FF"
              animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 0.5 }}
            />
            {/* Nariz */}
            <motion.ellipse
              cx="48"
              cy="40"
              rx="6"
              ry="5"
              fill="rgba(252, 61, 243, 0.3)"
              stroke="#FC3DF3"
              strokeWidth="1.5"
            />
            {/* Patas */}
            <rect x="20" y="52" width="5" height="6" rx="2" fill="#9900FF" />
            <rect x="38" y="52" width="5" height="6" rx="2" fill="#9900FF" />
          </svg>

          {/* Nivel de llenado */}
          <motion.div
            className="fill-level"
            animate={{
              height: isHovered ? '70%' : '20%',
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </motion.div>

        {/* Monedas cayendo */}
        {isHovered && [...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="falling-coin"
            initial={{ y: -20, opacity: 0, x: 0 }}
            animate={{
              y: [0, 40],
              opacity: [1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 0.6,
            }}
            style={{ left: `${40 + i * 10}%` }}
          >
            💰
          </motion.div>
        ))}
      </div>

      {/* Cohete de independencia */}
      <motion.div
        className="rocket"
        animate={{
          y: isHovered ? [-10, -30] : 0,
          opacity: isHovered ? 1 : 0.5,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        🚀
      </motion.div>

      {/* Estrellas de logro */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className={`achievement-star star-${i}`}
          animate={{
            scale: isHovered ? [0, 1.2, 1] : 0,
            opacity: isHovered ? [0, 1, 0.8] : 0,
            rotate: isHovered ? [0, 180] : 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2 + i * 0.15,
          }}
        >
          ⭐
        </motion.div>
      ))}
    </div>
  );
};

export default IndependenceAnimation;
