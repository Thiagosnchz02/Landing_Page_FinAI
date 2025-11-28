// src/components/FeatureAnimations/ControlAnimation.jsx
import React from 'react';
import { motion } from 'motion/react';
import './FeatureAnimations.css';

const ControlAnimation = ({ isHovered }) => {
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
          boxShadow: isHovered 
            ? '0 0 30px rgba(0, 21, 255, 0.3)' 
            : '0 0 10px rgba(0, 21, 255, 0.1)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Header del dashboard */}
        <div className="dashboard-header">
          <motion.div 
            className="dashboard-dot red"
            animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.5, delay: 0 }}
          />
          <motion.div 
            className="dashboard-dot yellow"
            animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.div 
            className="dashboard-dot green"
            animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Gráfico de barras */}
        <div className="chart-container">
          {bars.map((bar, i) => (
            <motion.div
              key={i}
              className="chart-bar"
              initial={{ height: 0 }}
              animate={{
                height: isHovered ? `${bar.height}%` : `${bar.height * 0.3}%`,
                backgroundColor: isHovered 
                  ? `hsl(${240 + i * 20}, 100%, 60%)` 
                  : 'rgba(0, 21, 255, 0.3)'
              }}
              transition={{ 
                duration: 0.6, 
                delay: bar.delay,
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
              width: isHovered ? '85%' : '30%',
              backgroundColor: isHovered ? '#0015FF' : 'rgba(0, 21, 255, 0.3)'
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* Iconos flotantes de categorías */}
      <motion.div
        className="category-icon icon-1"
        animate={{
          y: isHovered ? [-8, 8, -8] : 0,
          opacity: isHovered ? 1 : 0.5,
          rotate: isHovered ? [0, 10, -10, 0] : 0,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        💳
      </motion.div>

      <motion.div
        className="category-icon icon-2"
        animate={{
          y: isHovered ? [8, -8, 8] : 0,
          opacity: isHovered ? 1 : 0.5,
          rotate: isHovered ? [0, -10, 10, 0] : 0,
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      >
        📊
      </motion.div>

      <motion.div
        className="category-icon icon-3"
        animate={{
          y: isHovered ? [-5, 5, -5] : 0,
          opacity: isHovered ? 1 : 0.5,
          scale: isHovered ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
      >
        🔒
      </motion.div>

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
          initial={{ strokeDashoffset: 251.2 }}
          animate={{
            strokeDashoffset: isHovered ? 62.8 : 188.4, // 75% vs 25%
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
        />
        <motion.text
          x="50"
          y="55"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="bold"
          animate={{ opacity: isHovered ? 1 : 0.5 }}
        >
          {isHovered ? '75%' : '25%'}
        </motion.text>
      </svg>
    </div>
  );
};

export default ControlAnimation;
