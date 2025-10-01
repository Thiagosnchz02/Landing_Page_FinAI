// src/pages/Home.jsx
import React from 'react';
import RotatingText from '../components/RotatingText';
import { useNavigate } from 'react-router-dom';
import { usePageContext } from '../components/Layout';
import '../components/RotatingText.css';
import TiltedCard from '../components/TiltedCard';
import './Home.css'; // <-- 1. Importamos el nuevo CSS de la página

// Datos para las tarjetas
const features = [
  {
    title: 'Asistencia Personalizada',
    description: 'Accede a la mejor ayuda personalizada con IA para ti y tu dinero. En cualquier momento y lugar.',
  },
  {
    title: 'Control Total',
    description: 'Aprende a controlar tu dinero y dominar el mundo de la economía de forma sencilla con nuestros cursos.',
  },
  {
    title: 'Independencia Financiera',
    description: 'Da un paso más hacia tu independencia financiera. Con FinAi, toma decisiones inteligentes y crece económicamente.',
  },
];

const Home = () => {
    const navigate = useNavigate();
    const { onRegisterOpen, onLoginOpen } = usePageContext();
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
                <button className="hero-button" onClick={onLoginOpen}>
                    Login
                </button>
                {/* Botón que abre el Modal */}
                <button className="hero-button hero-button--secondary" onClick={onRegisterOpen}>
                    Register
                </button>
            </div>
        </div>
    </div>
      <section className="features-section">
        <h2 className="features-section__title">
          Por qué elegir FinAi
        </h2>
        <div className="features-section__grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card-wrapper">
              <TiltedCard
                containerHeight="400px" // Ajusta la altura de la tarjeta
                overlayContent={
                  <div className="feature-card-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                }
                displayOverlayContent={true}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;