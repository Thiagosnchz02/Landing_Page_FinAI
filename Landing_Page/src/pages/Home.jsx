// src/pages/Home.jsx
import React from 'react';
import RotatingText from '../components/RotatingText';
import { useNavigate } from 'react-router-dom';
import '../components/RotatingText.css';
import FeatureCard from '../components/FeatureCard';
import './Home.css';

// Datos para las tarjetas con tipos de animación
const features = [
  {
    title: 'Asistencia Personalizada',
    description: 'Accede a la mejor ayuda personalizada con IA para ti y tu dinero. En cualquier momento y lugar.',
    animationType: 'ai-assistant',
  },
  {
    title: 'Control Total',
    description: 'Visualiza tus finanzas, establece presupuestos y controla cada euro de forma sencilla e intuitiva.',
    animationType: 'control',
  },
  {
    title: 'Independencia Financiera',
    description: 'Alcanza tus metas de ahorro, haz crecer tu dinero y da el paso hacia tu libertad financiera.',
    animationType: 'independence',
  },
];

const Home = () => {
    const navigate = useNavigate();
    
    const handleDownload = () => {
      navigate('/qr');
    };

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
        </div>
    </div>
      <section className="features-section">
        <h2 className="features-section__title">
          Por qué elegir FinAi
        </h2>
        <div className="features-section__grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
              animationType={feature.animationType}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;