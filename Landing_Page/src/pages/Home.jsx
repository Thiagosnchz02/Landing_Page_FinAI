// src/pages/Home.jsx
import React from 'react';
import RotatingText from '../components/RotatingText';
import { useNavigate } from 'react-router-dom';
import { usePageContext } from '../components/Layout';
import '../components/RotatingText.css';
import './Home.css'; // <-- 1. Importamos el nuevo CSS de la página

const Home = () => {
    const navigate = useNavigate();
    const { onRegisterOpen } = usePageContext();
    const rotatingWords = [
        { text: 'girl Math', color: '#EA00FF'},
        { text: 'curiosos', color: '#0015FF' },
        { text: 'exploradores', color: '#9900FF' },
        { text: 'emprendedores', color: '#EA00FF' },
        { text: 'novatos', color: '#0015FF' },
        { text: 'reformistas', color: '#9900FF' },
        { text: 'girl Math', color: '#EA00FF' },
    ];

     return (
    <>
    {/* --- SECCIÓN HERO --- */}
     <div className="hero-section">
        <div className="hero-content">
            <h2 className="hero-brand">
                <span className="hero-brand--light-italic">Fin</span>
                <span className="hero-brand--medium-italic">Ai</span>
            </h2>

            <h1 className="hero-title">
                <span>The finance</span>
                <span className="hero-subtitle-line">
                    app for
                    <RotatingText words={rotatingWords} />
                </span>
            </h1>
            <div className="hero-actions">
                <button className="hero-button" onClick={() => navigate('/pricing')}>
                    Get Started
                </button>
                {/* Botón que abre el Modal */}
                <button className="hero-button hero-button--secondary" onClick={onRegisterOpen}>
                    Register
                </button>
            </div>
        </div>
    </div>

      {/* --- SECCIÓN "POR QUÉ ELEGIR FINAI" (aún con Tailwind, la haremos después) --- */}
      <section className="features-section">
        <h2 className="features-section__title">
          Por qué elegir FinAi
        </h2>
        <div className="features-section__grid">
          {/* Card 1 */}
          <div className="feature-card">
            <div className="feature-card__image-placeholder">
              Monstruo en varias poses
            </div>
            <p className="feature-card__description">
              Accede a la mejor ayuda personalizada con IA para ti y tu dinero. En cualquier momento y lugar.
            </p>
          </div>
          {/* Card 2 */}
          <div className="feature-card">
            <div className="feature-card__image-placeholder">
              Monstruo en varias poses
            </div>
            <p className="feature-card__description">
              Aprende a controlar tu dinero y dominar el mundo de la economía de forma sencilla con nuestros cursos.
            </p>
          </div>
          {/* Card 3 */}
          <div className="feature-card">
            <div className="feature-card__image-placeholder">
              Monstruo en varias poses
            </div>
            <p className="feature-card__description">
              Da un paso más hacia tu independencia financiera. Con FinAi, toma decisiones inteligentes y crece económicamente.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;