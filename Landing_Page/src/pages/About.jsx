// src/pages/About.jsx
import React from 'react';
import FlipProfileCard from '../components/FlipProfileCard';
import GradientText from '../components/GradientText';
import './About.css';
import avatarThiago from '../assets/team-member-1.jpg';
import avatarAndres from '../assets/team-member-2.jpg';
import avatarHugo from '../assets/team-member-3.jpg';
import avatarEric from '../assets/team-member-4.jpg';
import avatarJulio from '../assets/team-member-5.jpg';

// Ajustamos los datos para las nuevas props del ProfileCard
const teamData = [
  { name: 'Thiago Sánchez', title: 'Fundador & Coordinador', image: avatarThiago },
  { name: 'Hugo Lucendo', title: 'Co-fundador · IA & Producto', image: avatarHugo },
  { name: 'Andrés de Abreu', title: 'Co-fundador · Desarrollo', image: avatarAndres },
  { name: 'Eric Casero', title: 'Co-fundador · Marketing', image: avatarEric },
  { name: 'Julio López', title: 'Co-fundador · Comunidad', image: avatarJulio },
];

const About = () => {
  // Definimos los colores del degradado una vez
  const headingGradient = ["#FC3DF3", "#4D0FFF"];

  return (
    <div className="about-page">
      {/* --- SECCIÓN HISTORIA (GANCHO) --- */}
      <section className="about-section about-hero">
        <GradientText colors={headingGradient} className="about-title">
          Nuestra Historia
        </GradientText>
        <p className="about-hook">
          FinAi nació de la frustración de un grupo de amigos intentando entender sus finanzas. 
          <b> No somos expertos en trajes caros.</b> Somos personas reales que se hartaron de apps 
          complicadas y decidieron crear algo mejor.
        </p>
      </section>

      {/* --- SECCIÓN MISIÓN --- */}
      <section className="about-section">
        <GradientText colors={headingGradient} className="about-title">
          Qué hacemos
        </GradientText>
        <p>
          Una app donde <b>entender tu dinero es fácil</b>. Sin tecnicismos, sin letra pequeña, 
          sin hacerte sentir tonto. Ve en qué gastas, ahorra mejor y empieza a invertir.
        </p>
        <p>
          <b>Hablamos claro, protegemos tus datos y vamos al grano.</b> Nada de postureo financiero.
        </p>
        <svg className="graph-line" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 28C10.9412 28 15.3627 10.4583 24.3039 10.4583C33.2451 10.4583 37.6176 2.00001 46.5588 2C55.5 1.99999 59.9216 10.4583 68.8627 10.4583C77.8039 10.4583 82.2255 20.25 91.1667 20.25C100.108 20.25 99.1667 20.25 98 20.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </section>

      {/* --- SECCIÓN EQUIPO --- */}
      <section className="about-section">
        <GradientText colors={headingGradient} className="about-title">
          El Equipo
        </GradientText>
        <p className="team-intro">
          5 amigos con ganas de cambiar cómo la gente se relaciona con su dinero.
        </p>
        <div className="team-grid">
          {teamData.map((member, index) => (
            <FlipProfileCard
              key={index}
              avatarUrl={member.image}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </section>

      {/* --- SECCIÓN CITA --- */}
      <section className="about-section">
        <p className="quote-text">
          "El dinero no debería ser un problema. Debería ser una herramienta para vivir mejor."
        </p>
      </section>
    </div>
  );
};

export default About;