// src/pages/Privacy.jsx
import React from 'react';
import './Legal.css';

const Privacy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Política de Privacidad</h1>
        <p className="legal-updated">Última actualización: 29 de noviembre de 2025</p>

        {/* 1. Introducción */}
        <section className="legal-section">
          <h2>1. Introducción</h2>
          <p>
            Bienvenido a FinAI ("nosotros", "nuestro" o "la aplicación"). Nos comprometemos 
            a proteger tu privacidad y tus datos personales. Esta Política de Privacidad 
            explica cómo recopilamos, usamos, almacenamos y protegemos tu información 
            cuando utilizas nuestra aplicación de finanzas personales.
          </p>
          <p>
            Al utilizar FinAI, aceptas las prácticas descritas en esta política.
          </p>
        </section>

        {/* 2. Responsable del Tratamiento */}
        <section className="legal-section">
          <h2>2. Responsable del Tratamiento</h2>
          <p>
            <strong>FinAI</strong><br />
            Correo electrónico de contacto: <a href="mailto:privacy@finai.es">privacy@finai.es</a>
          </p>
          <p>
            Para ejercer tus derechos o realizar consultas sobre privacidad, puedes 
            contactarnos en la dirección indicada.
          </p>
        </section>

        {/* 3. Datos que Recopilamos */}
        <section className="legal-section">
          <h2>3. Datos que Recopilamos</h2>
          
          <h3>3.1 Datos que nos proporcionas directamente</h3>
          <table className="cookie-table">
            <thead>
              <tr>
                <th>Tipo de Dato</th>
                <th>Ejemplos</th>
                <th>Propósito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Datos de cuenta</strong></td>
                <td>Email, contraseña, nombre completo</td>
                <td>Crear y gestionar tu cuenta</td>
              </tr>
              <tr>
                <td><strong>Datos de perfil</strong></td>
                <td>Número de teléfono, foto de perfil, nombre de usuario</td>
                <td>Personalizar tu experiencia</td>
              </tr>
              <tr>
                <td><strong>Datos financieros</strong></td>
                <td>Transacciones, cuentas bancarias, presupuestos, metas, deudas, inversiones</td>
                <td>Funcionamiento core de la app</td>
              </tr>
              <tr>
                <td><strong>Preferencias</strong></td>
                <td>Idioma, tema, notificaciones</td>
                <td>Configuración personalizada</td>
              </tr>
            </tbody>
          </table>

          <h3>3.2 Datos recopilados automáticamente</h3>
          <table className="cookie-table">
            <thead>
              <tr>
                <th>Tipo de Dato</th>
                <th>Ejemplos</th>
                <th>Propósito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Datos de uso</strong></td>
                <td>Eventos de navegación, funciones utilizadas</td>
                <td>Mejorar la experiencia</td>
              </tr>
              <tr>
                <td><strong>Datos del dispositivo</strong></td>
                <td>Modelo, sistema operativo, versión de la app</td>
                <td>Soporte técnico</td>
              </tr>
              <tr>
                <td><strong>Datos de sesión</strong></td>
                <td>Hora de inicio/cierre de sesión</td>
                <td>Seguridad de la cuenta</td>
              </tr>
            </tbody>
          </table>

          <h3>3.3 Datos del Asistente de IA</h3>
          <p>Si utilizas nuestro asistente de IA (WhatsApp/chat):</p>
          <table className="cookie-table">
            <thead>
              <tr>
                <th>Tipo de Dato</th>
                <th>Propósito</th>
                <th>Retención</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Historial de conversaciones</td>
                <td>Proporcionar respuestas contextuales</td>
                <td>30 días</td>
              </tr>
              <tr>
                <td>Consultas realizadas</td>
                <td>Mejorar el servicio de IA</td>
                <td>30 días</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 4. Cómo Usamos tus Datos */}
        <section className="legal-section">
          <h2>4. Cómo Usamos tus Datos</h2>
          <p>Utilizamos tu información para:</p>
          <ul>
            <li><strong>Proporcionar el servicio:</strong> Gestionar tus finanzas, transacciones y metas</li>
            <li><strong>Personalización:</strong> Adaptar la app a tus preferencias</li>
            <li><strong>Comunicación:</strong> Enviarte notificaciones sobre tus finanzas</li>
            <li><strong>Seguridad:</strong> Proteger tu cuenta y detectar actividad sospechosa</li>
            <li><strong>Mejoras:</strong> Analizar el uso para mejorar la aplicación</li>
            <li><strong>Cumplimiento legal:</strong> Cumplir obligaciones fiscales y regulatorias</li>
          </ul>
          <p><strong>NO utilizamos tus datos para:</strong></p>
          <ul>
            <li>❌ Vender tu información a terceros</li>
            <li>❌ Publicidad personalizada de terceros</li>
            <li>❌ Crear perfiles para fines de marketing externo</li>
          </ul>
        </section>

        {/* 5. Base Legal del Tratamiento */}
        <section className="legal-section">
          <h2>5. Base Legal del Tratamiento</h2>
          <p>Tratamos tus datos basándonos en:</p>
          <table className="cookie-table">
            <thead>
              <tr>
                <th>Base Legal</th>
                <th>Datos Afectados</th>
                <th>Referencia GDPR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Consentimiento</strong></td>
                <td>Datos de perfil opcionales, notificaciones</td>
                <td>Art. 6.1.a</td>
              </tr>
              <tr>
                <td><strong>Ejecución de contrato</strong></td>
                <td>Datos financieros, cuenta</td>
                <td>Art. 6.1.b</td>
              </tr>
              <tr>
                <td><strong>Obligación legal</strong></td>
                <td>Registros financieros (7 años)</td>
                <td>Art. 6.1.c</td>
              </tr>
              <tr>
                <td><strong>Interés legítimo</strong></td>
                <td>Analytics, seguridad</td>
                <td>Art. 6.1.f</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 6. Compartición de Datos */}
        <section className="legal-section">
          <h2>6. Compartición de Datos</h2>
          <p><strong>NO compartimos</strong> tus datos financieros con terceros, excepto:</p>
          <table className="cookie-table">
            <thead>
              <tr>
                <th>Destinatario</th>
                <th>Propósito</th>
                <th>Datos Compartidos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Supabase (AWS)</strong></td>
                <td>Alojamiento de base de datos</td>
                <td>Todos (cifrados)</td>
              </tr>
              <tr>
                <td><strong>Proveedores de autenticación</strong></td>
                <td>Login social (si lo usas)</td>
                <td>Email, nombre</td>
              </tr>
              <tr>
                <td><strong>Autoridades</strong></td>
                <td>Requerimiento legal</td>
                <td>Según solicitud</td>
              </tr>
            </tbody>
          </table>
          <p>
            Todos nuestros proveedores están ubicados en la <strong>Unión Europea</strong> o 
            cuentan con mecanismos de transferencia adecuados (Cláusulas Contractuales Tipo).
          </p>
        </section>

        {/* 7. Retención de Datos */}
        <section className="legal-section">
          <h2>7. Retención de Datos</h2>
          <table className="cookie-table">
            <thead>
              <tr>
                <th>Tipo de Dato</th>
                <th>Período de Retención</th>
                <th>Motivo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Transacciones financieras</td>
                <td>7 años</td>
                <td>Obligación legal fiscal</td>
              </tr>
              <tr>
                <td>Datos de perfil</td>
                <td>Hasta eliminación de cuenta</td>
                <td>Servicio activo</td>
              </tr>
              <tr>
                <td>Historial de chat IA</td>
                <td>30 días</td>
                <td>Optimización</td>
              </tr>
              <tr>
                <td>Notificaciones leídas</td>
                <td>90 días</td>
                <td>Limpieza automática</td>
              </tr>
              <tr>
                <td>Logs de auditoría</td>
                <td>7 años</td>
                <td>Cumplimiento regulatorio</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 8. Tus Derechos (GDPR) */}
        <section className="legal-section">
          <h2>8. Tus Derechos (GDPR)</h2>
          <p>Como usuario, tienes derecho a:</p>
          <table className="cookie-table">
            <thead>
              <tr>
                <th>Derecho</th>
                <th>Descripción</th>
                <th>Cómo Ejercerlo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Acceso</strong></td>
                <td>Obtener copia de todos tus datos</td>
                <td>Ajustes → Exportar mis Datos</td>
              </tr>
              <tr>
                <td><strong>Rectificación</strong></td>
                <td>Corregir datos inexactos</td>
                <td>Perfil → Editar</td>
              </tr>
              <tr>
                <td><strong>Supresión</strong></td>
                <td>Eliminar tu cuenta y datos</td>
                <td>Ajustes → Eliminar Cuenta</td>
              </tr>
              <tr>
                <td><strong>Portabilidad</strong></td>
                <td>Recibir tus datos en formato estándar</td>
                <td>Exportar genera JSON</td>
              </tr>
              <tr>
                <td><strong>Oposición</strong></td>
                <td>Oponerte a ciertos tratamientos</td>
                <td>Contactar DPO</td>
              </tr>
              <tr>
                <td><strong>Limitación</strong></td>
                <td>Restringir el tratamiento</td>
                <td>Contactar DPO</td>
              </tr>
            </tbody>
          </table>

          <h3>¿Cómo ejercer tus derechos?</h3>
          <ul>
            <li><strong>Dentro de la app:</strong> Ve a Ajustes → Datos de la Cuenta</li>
            <li><strong>Por email:</strong> Escribe a <a href="mailto:privacy@finai.es">privacy@finai.es</a></li>
            <li><strong>Tiempo de respuesta:</strong> Máximo 30 días</li>
          </ul>
        </section>

        {/* 9. Seguridad de los Datos */}
        <section className="legal-section">
          <h2>9. Seguridad de los Datos</h2>
          <p>Implementamos medidas técnicas y organizativas para proteger tus datos:</p>
          <ul>
            <li><strong>🔐 Cifrado en tránsito:</strong> TLS 1.3 para todas las comunicaciones</li>
            <li><strong>🔐 Cifrado en reposo:</strong> Datos almacenados cifrados (AES-256)</li>
            <li><strong>🔐 Autenticación segura:</strong> Soporte para 2FA y biometría</li>
            <li><strong>🔐 Políticas de acceso:</strong> Row Level Security (RLS) en base de datos</li>
            <li><strong>🔐 Auditoría:</strong> Registro de accesos y modificaciones</li>
            <li><strong>🔐 Copias de seguridad:</strong> Backups automáticos cifrados</li>
          </ul>
        </section>

        {/* 10. Cookies */}
        <section className="legal-section">
          <h2>10. Cookies y Tecnologías Similares</h2>
          <p>La aplicación móvil <strong>no utiliza cookies</strong> tradicionales.</p>
          <p>En la landing page web utilizamos:</p>
          <table className="cookie-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Propósito</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cookies esenciales</td>
                <td>Funcionamiento de la web</td>
                <td>Sesión</td>
              </tr>
              <tr>
                <td>Analytics</td>
                <td>Entender el uso de la web</td>
                <td>1 año</td>
              </tr>
            </tbody>
          </table>
          <p>Puedes gestionar las cookies desde tu navegador.</p>
        </section>

        {/* 11. Menores de Edad */}
        <section className="legal-section">
          <h2>11. Menores de Edad</h2>
          <p>
            FinAI no está dirigida a menores de 16 años. No recopilamos deliberadamente 
            datos de menores. Si crees que un menor ha proporcionado datos personales, 
            contacta con nosotros inmediatamente.
          </p>
        </section>

        {/* 12. Cambios */}
        <section className="legal-section">
          <h2>12. Cambios en esta Política</h2>
          <p>
            Podemos actualizar esta política ocasionalmente. Te notificaremos de cambios 
            significativos mediante:
          </p>
          <ul>
            <li>Notificación en la app</li>
            <li>Email a tu dirección registrada</li>
            <li>Aviso en la landing page</li>
          </ul>
          <p>
            La fecha de "última actualización" al inicio indica cuándo se modificó por última vez.
          </p>
        </section>

        {/* 13. Reclamaciones */}
        <section className="legal-section">
          <h2>13. Reclamaciones</h2>
          <p>Si consideras que tus derechos no han sido respetados, puedes:</p>
          <ul>
            <li><strong>Contactarnos</strong> en <a href="mailto:privacy@finai.es">privacy@finai.es</a></li>
            <li>
              <strong>Presentar reclamación</strong> ante la Agencia Española de Protección de Datos (AEPD):
              <br />
              Web: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>
              <br />
              C/ Jorge Juan, 6 - 28001 Madrid
            </li>
          </ul>
        </section>

        {/* 14. Contacto */}
        <section className="legal-section">
          <h2>14. Contacto</h2>
          <p>Para cualquier consulta sobre privacidad:</p>
          <div className="contact-info">
            <strong>FinAI</strong><br />
            📧 Email: <a href="mailto:privacy@finai.es">privacy@finai.es</a><br />
            🌐 Web: <a href="https://finai.es" target="_blank" rel="noopener noreferrer">https://finai.es</a>
          </div>
        </section>

        {/* Nota final */}
        <section className="legal-section legal-footer-note">
          <p>
            <em>Esta política cumple con el Reglamento General de Protección de Datos 
            (RGPD/GDPR) de la Unión Europea.</em>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
