// src/components/FeatureAnimations/IndependenceAnimation.jsx
import React from 'react';
import { motion } from 'motion/react';
import './FeatureAnimations.css';

// Detectar móvil una sola vez
const isMobile = typeof window !== 'undefined' && 
  (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768);

const IndependenceAnimation = ({ isHovered }) => {
  const active = isMobile ? true : isHovered;

  return (
    <div className="feature-animation independence-animation">
      {/* Gráfico de línea ascendente */}
      <svg className="growth-chart" viewBox="0 0 120 60" fill="none">
        {/* Grid de fondo - simplificado en móvil */}
        <g opacity={active ? 0.3 : 0.1}>
          {[...Array(isMobile ? 3 : 5)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="10"
              y1={10 + i * (isMobile ? 20 : 12)}
              x2="110"
              y2={10 + i * (isMobile ? 20 : 12)}
              stroke="#9900FF"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Línea de crecimiento */}
        <motion.path
          d="M10 50 Q30 45, 40 40 T60 30 T80 20 T100 12 L110 8"
          stroke="url(#growthGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0.4 }}
          animate={{ pathLength: active ? 1 : 0.4 }}
          transition={{ duration: isMobile ? 0.6 : 1.2, ease: "easeOut" }}
        />

        {/* Área bajo la curva */}
        <path
          d="M10 50 Q30 45, 40 40 T60 30 T80 20 T100 12 L110 8 L110 58 L10 58 Z"
          fill="url(#areaGradient)"
          opacity={active ? 0.3 : 0.1}
        />

        {/* Punto final brillante */}
        <motion.circle
          cx="110"
          cy="8"
          r="4"
          fill="#FC3DF3"
          animate={{
            r: active && !isMobile ? [4, 6, 4] : 4,
            opacity: active ? 1 : 0.5,
          }}
          transition={{ duration: 1.5, repeat: active && !isMobile ? Infinity : 0 }}
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
        <div className="piggy-bank">
          <svg viewBox="0 0 64 64" className="piggy-icon">
            {/* Cuerpo de la hucha */}
            <ellipse
              cx="32"
              cy="38"
              rx="22"
              ry="18"
              fill={active ? 'rgba(153, 0, 255, 0.4)' : 'rgba(153, 0, 255, 0.2)'}
              stroke="#9900FF"
              strokeWidth="2"
            />
            {/* Ranura */}
            <rect x="26" y="22" width="12" height="3" rx="1.5" fill="#9900FF" />
            {/* Oreja */}
            <ellipse
              cx="18"
              cy="30"
              rx="5"
              ry="7"
              fill="rgba(153, 0, 255, 0.3)"
              stroke="#9900FF"
              strokeWidth="1.5"
            />
            {/* Ojo */}
            <circle cx="22" cy="35" r="2" fill="#9900FF" />
            {/* Nariz */}
            <ellipse
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
            initial={{ height: '20%' }}
            animate={{ height: active ? '70%' : '20%' }}
            transition={{ duration: isMobile ? 0.5 : 1, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Cohete de independencia */}
      <motion.div
        className="rocket"
        animate={{
          y: active ? -15 : 0,
          opacity: active ? 1 : 0.5,
          scale: active ? 1.1 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        🚀
      </motion.div>

      {/* Estrellas de logro - solo desktop */}
      {!isMobile && [...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className={`achievement-star star-${i}`}
          animate={{
            scale: active ? [0, 1.2, 1] : 0,
            opacity: active ? [0, 1, 0.8] : 0,
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
