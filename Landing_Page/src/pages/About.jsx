// src/pages/About.jsx
import React from 'react';
import ProfileCard from '../components/ProfileCard';
import GradientText from '../components/GradientText'; // <-- Nuevo import
import './About.css';
import avatarThiago from '../assets/team-member-1.jpg';
import avatarAndres from '../assets/team-member-2.jpg';

// Ajustamos los datos para las nuevas props del ProfileCard
const teamData = [
  { name: 'ThiagoSnchz', title: 'CEO & Founder', handle: 'thiagosnchz', image: avatarThiago },
  { name: 'Hugo Lucendo', title: 'Head of AI Strategy ', handle: 'hugolucendo', image: avatarThiago },
  { name: 'Andrés de Abreu', title: 'Tech Lead – Full Stack', handle: 'andresedal', image: avatarThiago },
  { name: 'Eric Casero', title: 'Head of Growth Marketing', handle: 'ericcb6', image: avatarThiago },
  { name: 'Julio Lopez', title: 'Growth Marketing Manager', handle: 'julyatm_9', image: avatarThiago },
];

const About = () => {
  // Definimos los colores del degradado una vez
  const headingGradient = ["#FC3DF3", "#4D0FFF"];

  return (
    <div className="about-page">
      {/* --- SECCIÓN MISIÓN --- */}
      <section className="about-section">
        {/* Usamos el nuevo componente GradientText */}
        <GradientText colors={headingGradient} className="about-title">
          Nuestra Misión
        </GradientText>
        <p>
          Creamos una app para que <b>entender y gestionar tu dinero sea fácil, útil y sin complicaciones</b>. Te ayudamos a ver en qué gastas, ahorrar mejor e incluso empezar a invertir, sin tecnicismos ni líos.
        </p>
        <p>
          No usamos palabras raras ni damos la chapa. Hablamos claro, protegemos tus datos y te damos <b>recursos prácticos</b> para que tomes decisiones con confianza. <b>Todo fácil, seguro y sin postureo.</b>
        </p>
        <svg className="graph-line" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 28C10.9412 28 15.3627 10.4583 24.3039 10.4583C33.2451 10.4583 37.6176 2.00001 46.5588 2C55.5 1.99999 59.9216 10.4583 68.8627 10.4583C77.8039 10.4583 82.2255 20.25 91.1667 20.25C100.108 20.25 99.1667 20.25 98 20.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </section>

      {/* --- SECCIÓN EQUIPO --- */}
      <section className="about-section">
        <GradientText colors={headingGradient} className="about-title">
          Conoce al Equipo
        </GradientText>
        <div className="team-grid">
          {teamData.map((member, index) => (
            <ProfileCard
              key={index}
              avatarUrl={member.image}
              name={member.name}
              title={member.title}
              handle={member.handle}
              contactText="Contacto"
              enableTilt={true} // <-- Activamos el efecto 3D
            />
          ))}
        </div>
      </section>

      {/* --- SECCIÓN CITA --- */}
      <section className="about-section">
        <p className="quote-text">
          “Queremos que el dinero deje de ser un problema y se convierta en una herramienta para vivir mejor. Creemos que todo el mundo merece tener control sobre su economía personal.”
        </p>
      </section>
    </div>
  );
};

export default About;