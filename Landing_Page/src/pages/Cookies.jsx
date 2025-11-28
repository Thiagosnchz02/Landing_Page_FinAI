// src/pages/Cookies.jsx
import React from 'react';
import './Legal.css';

const Cookies = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Política de Cookies</h1>
        <p className="legal-updated">Última actualización: Noviembre 2025</p>

        <section className="legal-section">
          <h2>1. ¿Qué son las Cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu 
            dispositivo cuando visitas un sitio web. Se utilizan ampliamente 
            para hacer que los sitios web funcionen de manera más eficiente y 
            proporcionar información a los propietarios del sitio.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Tipos de Cookies que Utilizamos</h2>
          
          <h3>🔧 Cookies Esenciales</h3>
          <p>
            Necesarias para el funcionamiento básico del sitio. Sin estas cookies, 
            el sitio no puede funcionar correctamente.
          </p>
          <ul>
            <li><strong>Sesión de usuario:</strong> Mantienen tu sesión activa</li>
            <li><strong>Preferencias:</strong> Recuerdan tu configuración básica</li>
            <li><strong>Seguridad:</strong> Protegen contra actividades maliciosas</li>
          </ul>

          <h3>📊 Cookies Analíticas</h3>
          <p>
            Nos ayudan a entender cómo los visitantes interactúan con el sitio, 
            recopilando información de forma anónima.
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> Análisis de tráfico y comportamiento</li>
            <li><strong>Métricas de rendimiento:</strong> Tiempos de carga y errores</li>
          </ul>

          <h3>🎯 Cookies de Marketing (Opcionales)</h3>
          <p>
            Utilizadas para mostrar anuncios relevantes. Solo se activan con tu 
            consentimiento explícito.
          </p>
          <ul>
            <li><strong>Publicidad personalizada:</strong> Anuncios basados en intereses</li>
            <li><strong>Redes sociales:</strong> Integración con plataformas sociales</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Control de Cookies</h2>
          <p>
            Puedes controlar y gestionar las cookies de varias formas:
          </p>
          <ul>
            <li>
              <strong>Banner de consentimiento:</strong> Al visitar nuestro sitio, 
              puedes aceptar o rechazar cookies no esenciales
            </li>
            <li>
              <strong>Configuración del navegador:</strong> Puedes configurar tu 
              navegador para bloquear o alertarte sobre cookies
            </li>
            <li>
              <strong>Eliminar cookies:</strong> Puedes eliminar las cookies 
              almacenadas en cualquier momento desde tu navegador
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Cookies de Terceros</h2>
          <p>
            Algunos servicios de terceros pueden establecer sus propias cookies:
          </p>
          <table className="cookie-table">
            <thead>
              <tr>
                <th>Servicio</th>
                <th>Propósito</th>
                <th>Más información</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Analytics</td>
                <td>Análisis de uso</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de Google</a></td>
              </tr>
              <tr>
                <td>Supabase</td>
                <td>Autenticación</td>
                <td><a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Política de Supabase</a></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="legal-section">
          <h2>5. Duración de las Cookies</h2>
          <ul>
            <li>
              <strong>Cookies de sesión:</strong> Se eliminan al cerrar el navegador
            </li>
            <li>
              <strong>Cookies persistentes:</strong> Permanecen hasta su fecha de 
              expiración o hasta que las elimines manualmente
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Actualizaciones</h2>
          <p>
            Esta política puede actualizarse periódicamente. Te recomendamos 
            revisarla regularmente para estar informado sobre cómo usamos las cookies.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Contacto</h2>
          <p>
            Si tienes preguntas sobre nuestra política de cookies:
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

export default Cookies;
