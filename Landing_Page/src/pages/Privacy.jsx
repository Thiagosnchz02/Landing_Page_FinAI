// src/pages/Privacy.jsx
import React from 'react';
import './Legal.css';

const Privacy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Política de Privacidad</h1>
        <p className="legal-updated">Última actualización: Noviembre 2025</p>

        <section className="legal-section">
          <h2>1. Información que Recopilamos</h2>
          <p>
            En FinAi, recopilamos información que nos proporcionas directamente cuando:
          </p>
          <ul>
            <li>Creas una cuenta en nuestra aplicación</li>
            <li>Vinculas tus cuentas bancarias</li>
            <li>Utilizas nuestro asistente de inteligencia artificial</li>
            <li>Te comunicas con nosotros</li>
          </ul>
          <p>
            Esta información puede incluir: nombre, dirección de correo electrónico, 
            información financiera agregada y datos de uso de la aplicación.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Cómo Utilizamos tu Información</h2>
          <p>Utilizamos la información recopilada para:</p>
          <ul>
            <li>Proporcionar, mantener y mejorar nuestros servicios</li>
            <li>Personalizar tu experiencia con el asistente IA</li>
            <li>Generar análisis y recomendaciones financieras personalizadas</li>
            <li>Enviarte comunicaciones relacionadas con el servicio</li>
            <li>Proteger contra actividades fraudulentas</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Seguridad de los Datos</h2>
          <p>
            La seguridad de tus datos es nuestra prioridad. Implementamos medidas 
            de seguridad técnicas y organizativas para proteger tu información personal:
          </p>
          <ul>
            <li>Encriptación de datos en tránsito y en reposo</li>
            <li>Acceso restringido a datos personales</li>
            <li>Monitoreo continuo de seguridad</li>
            <li>Cumplimiento con estándares de la industria financiera</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Compartición de Datos</h2>
          <p>
            <strong>No vendemos tu información personal.</strong> Podemos compartir 
            información únicamente en las siguientes circunstancias:
          </p>
          <ul>
            <li>Con tu consentimiento explícito</li>
            <li>Con proveedores de servicios que nos ayudan a operar la plataforma</li>
            <li>Para cumplir con obligaciones legales</li>
            <li>Para proteger nuestros derechos y seguridad</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Tus Derechos</h2>
          <p>Tienes derecho a:</p>
          <ul>
            <li><strong>Acceder</strong> a tus datos personales</li>
            <li><strong>Rectificar</strong> información incorrecta</li>
            <li><strong>Eliminar</strong> tu cuenta y datos asociados</li>
            <li><strong>Exportar</strong> tus datos en formato portable</li>
            <li><strong>Oponerte</strong> al procesamiento de tus datos</li>
          </ul>
          <p>
            Para ejercer estos derechos, contáctanos en: <a href="mailto:privacidad@finai.app">privacidad@finai.app</a>
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Retención de Datos</h2>
          <p>
            Conservamos tu información mientras tu cuenta esté activa o según sea 
            necesario para proporcionarte servicios. Puedes solicitar la eliminación 
            de tu cuenta en cualquier momento.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Cambios a esta Política</h2>
          <p>
            Podemos actualizar esta política periódicamente. Te notificaremos sobre 
            cambios significativos a través de la aplicación o por correo electrónico.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta política de privacidad, contáctanos en:
          </p>
          <p className="contact-info">
            <strong>FinAi</strong><br />
            Email: <a href="mailto:privacidad@finai.app">privacidad@finai.app</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
