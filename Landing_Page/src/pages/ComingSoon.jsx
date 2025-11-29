// src/pages/ComingSoon.jsx
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import GradientText from '../components/GradientText';
import { FaApple, FaGooglePlay, FaArrowLeft } from 'react-icons/fa';
import './ComingSoon.css';

const ComingSoon = () => {
  const [searchParams] = useSearchParams();
  const platform = searchParams.get('platform'); // 'ios' o 'android'

  const isIOS = platform === 'ios';
  const isAndroid = platform === 'android';

  return (
    <div className="coming-soon-page">
      <div className="coming-soon-content">
        {/* Icono de la plataforma */}
        <div className={`platform-icon ${platform || 'generic'}`}>
          {isIOS && <FaApple />}
          {isAndroid && <FaGooglePlay />}
          {!platform && <span className="rocket-icon">🚀</span>}
        </div>

        {/* Título */}
        <GradientText colors={["#FC3DF3", "#4D0FFF"]} className="coming-soon-title">
          {isIOS ? 'Próximamente en App Store' : 
           isAndroid ? 'Próximamente en Google Play' : 
           'App en Desarrollo'}
        </GradientText>

        {/* Mensaje */}
        <p className="coming-soon-message">
          Estamos trabajando duro para traerte la mejor experiencia financiera. 
          <br />
          <b>FinAi</b> estará disponible muy pronto.
        </p>

        {/* Progreso visual */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <span className="progress-text">85% completado</span>
        </div>

        {/* Características que vendrán */}
        <div className="features-preview">
          <div className="feature-item">
            <span className="feature-icon">🤖</span>
            <span>Asistente IA 24/7</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📊</span>
            <span>Control total de gastos</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎯</span>
            <span>Metas de ahorro</span>
          </div>
        </div>

        {/* Botón de volver */}
        <Link to="/" className="back-button">
          <FaArrowLeft />
          <span>Volver al inicio</span>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
