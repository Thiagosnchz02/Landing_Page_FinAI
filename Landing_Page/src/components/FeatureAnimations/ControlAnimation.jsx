// src/components/FeatureAnimations/ControlAnimation.jsx
import React from 'react';
import { motion } from 'motion/react';
import './FeatureAnimations.css';

// Detectar móvil una sola vez
const isMobile = typeof window !== 'undefined' && 
  (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768);

const ControlAnimation = ({ isHovered }) => {
  const active = isMobile ? true : isHovered;
  
  // Datos simulados para las barras del gráfico
  const bars = [
    { height: 40, delay: 0 },
    { height: 65, delay: 0.1 },
    { height: 45, delay: 0.2 },
    { height: 80, delay: 0.3 },
    { height: 55, delay: 0.4 },
  ];

  return (
    <div className="feature-animation control-animation">
      {/* Mini Dashboard */}
      <motion.div
        className="mini-dashboard"
        animate={{
          boxShadow: active 
            ? '0 0 20px rgba(0, 21, 255, 0.2)' 
            : '0 0 10px rgba(0, 21, 255, 0.1)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Header del dashboard */}
        <div className="dashboard-header">
          <div className="dashboard-dot red" />
          <div className="dashboard-dot yellow" />
          <div className="dashboard-dot green" />
        </div>

        {/* Gráfico de barras */}
        <div className="chart-container">
          {bars.map((bar, i) => (
            <motion.div
              key={i}
              className="chart-bar"
              initial={{ height: `${bar.height * 0.3}%` }}
              animate={{
                height: active ? `${bar.height}%` : `${bar.height * 0.3}%`,
                backgroundColor: active 
                  ? `hsl(${240 + i * 20}, 100%, 60%)` 
                  : 'rgba(0, 21, 255, 0.3)'
              }}
              transition={{ 
                duration: isMobile ? 0.3 : 0.6, 
                delay: isMobile ? 0 : bar.delay,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Línea de progreso */}
        <div className="progress-line-container">
          <motion.div
            className="progress-line"
            animate={{
              width: active ? '85%' : '30%',
              backgroundColor: active ? '#0015FF' : 'rgba(0, 21, 255, 0.3)'
            }}
            transition={{ duration: isMobile ? 0.4 : 0.8, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* Iconos flotantes de categorías - solo en desktop */}
      {!isMobile && (
        <>
          <motion.div
            className="category-icon icon-1"
            animate={{
              y: active ? [-8, 8, -8] : 0,
              opacity: active ? 1 : 0.5,
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💳
          </motion.div>

          <motion.div
            className="category-icon icon-2"
            animate={{
              y: active ? [8, -8, 8] : 0,
              opacity: active ? 1 : 0.5,
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            📊
          </motion.div>

          <motion.div
            className="category-icon icon-3"
            animate={{
              y: active ? [-5, 5, -5] : 0,
              opacity: active ? 1 : 0.5,
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          >
            🔒
          </motion.div>
        </>
      )}

      {/* Círculo de presupuesto */}
      <svg className="budget-circle" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="rgba(0, 21, 255, 0.2)"
          strokeWidth="8"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#0015FF"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="251.2"
          initial={{ strokeDashoffset: 188.4 }}
          animate={{
            strokeDashoffset: active ? 62.8 : 188.4,
          }}
          transition={{ duration: isMobile ? 0.5 : 1, ease: "easeOut" }}
          style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
        />
        <text
          x="50"
          y="55"
          textAnchor="middle"
          fill="white"
          fontSize={isMobile ? "12" : "14"}
          fontWeight="bold"
        >
          {active ? '75%' : '25%'}
        </text>
      </svg>
    </div>
  );
};

export default ControlAnimation;
