// src/pages/Terms.jsx
import React from 'react';
import './Legal.css';

const Terms = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Términos de Uso</h1>
        <p className="legal-updated">Última actualización: Noviembre 2025</p>

        <section className="legal-section">
          <h2>1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar la aplicación FinAi ("el Servicio"), aceptas 
            estos términos de uso. Si no estás de acuerdo con alguna parte de 
            estos términos, no podrás acceder al Servicio.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Descripción del Servicio</h2>
          <p>
            FinAi es una aplicación de gestión financiera personal que utiliza 
            inteligencia artificial para ayudarte a:
          </p>
          <ul>
            <li>Visualizar y organizar tus finanzas personales</li>
            <li>Conectar múltiples cuentas bancarias</li>
            <li>Recibir análisis y recomendaciones personalizadas</li>
            <li>Establecer y seguir metas de ahorro</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Registro y Cuenta</h2>
          <p>Para usar el Servicio debes:</p>
          <ul>
            <li>Ser mayor de 18 años</li>
            <li>Proporcionar información veraz y actualizada</li>
            <li>Mantener la confidencialidad de tus credenciales</li>
            <li>Notificarnos inmediatamente sobre uso no autorizado</li>
          </ul>
          <p>
            Eres responsable de todas las actividades realizadas bajo tu cuenta.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Uso Aceptable</h2>
          <p>Te comprometes a NO utilizar el Servicio para:</p>
          <ul>
            <li>Violar leyes o regulaciones aplicables</li>
            <li>Transmitir contenido ilegal o dañino</li>
            <li>Intentar acceder a sistemas sin autorización</li>
            <li>Interferir con el funcionamiento del Servicio</li>
            <li>Suplantar identidades o proporcionar información falsa</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Planes y Pagos</h2>
          <p>
            FinAi ofrece planes gratuitos y de pago. Para los planes de pago:
          </p>
          <ul>
            <li>Los precios se muestran en la aplicación antes de la compra</li>
            <li>Los pagos se procesan a través de las tiendas de aplicaciones</li>
            <li>Las suscripciones se renuevan automáticamente</li>
            <li>Puedes cancelar en cualquier momento desde tu dispositivo</li>
          </ul>
          <p>
            <strong>Prueba gratuita:</strong> Los planes de pago incluyen 15 días 
            de prueba gratuita. No se te cobrará hasta que finalice el período de prueba.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Propiedad Intelectual</h2>
          <p>
            El Servicio y su contenido original, características y funcionalidad 
            son propiedad exclusiva de FinAi y están protegidos por leyes de 
            propiedad intelectual.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Limitación de Responsabilidad</h2>
          <p>
            FinAi proporciona información y herramientas para la gestión financiera 
            personal, pero <strong>no somos asesores financieros</strong>. Las 
            recomendaciones del asistente IA son orientativas y no constituyen 
            asesoramiento financiero profesional.
          </p>
          <p>
            No nos hacemos responsables de decisiones financieras tomadas basándose 
            en la información proporcionada por el Servicio.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Disponibilidad del Servicio</h2>
          <p>
            Nos esforzamos por mantener el Servicio disponible 24/7, pero no 
            garantizamos disponibilidad ininterrumpida. Podemos realizar 
            mantenimientos que afecten temporalmente el acceso.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier 
            momento. Los cambios entrarán en vigor tras su publicación. El uso 
            continuado del Servicio implica aceptación de los nuevos términos.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Terminación</h2>
          <p>
            Podemos suspender o terminar tu acceso al Servicio si violas estos 
            términos, sin previo aviso ni responsabilidad.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Ley Aplicable</h2>
          <p>
            Estos términos se regirán e interpretarán de acuerdo con las leyes 
            de España, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Contacto</h2>
          <p>
            Para cualquier consulta sobre estos términos:
          </p>
          <p className="contact-info">
            <strong>FinAi</strong><br />
            Email: <a href="mailto:legal@finai.app">legal@finai.app</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
