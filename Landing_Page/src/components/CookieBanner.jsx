// src/components/CookieBanner.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Siempre activas
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Verificar si ya se aceptaron las cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Mostrar banner después de un pequeño delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setIsVisible(false);
    // Aquí podrías inicializar analytics, etc.
    console.log('Cookies aceptadas:', allAccepted);
  };

  const acceptEssential = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(essentialOnly));
    setIsVisible(false);
    console.log('Solo cookies esenciales:', essentialOnly);
  };

  const savePreferences = () => {
    const customPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(customPreferences));
    setIsVisible(false);
    console.log('Preferencias guardadas:', customPreferences);
  };

  const togglePreference = (key) => {
    if (key === 'essential') return; // No se puede desactivar
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className={`cookie-banner ${showPreferences ? 'expanded' : ''}`}>
        {!showPreferences ? (
          // Vista principal
          <>
            <div className="cookie-banner-content">
              <div className="cookie-icon">🍪</div>
              <div className="cookie-text">
                <h3>Usamos cookies</h3>
                <p>
                  Utilizamos cookies para mejorar tu experiencia en nuestro sitio. 
                  Puedes aceptar todas, solo las esenciales, o personalizar tus preferencias.
                  <Link to="/cookies"> Más información</Link>
                </p>
              </div>
            </div>
            <div className="cookie-banner-actions">
              <button 
                className="cookie-btn cookie-btn-secondary"
                onClick={acceptEssential}
              >
                Solo esenciales
              </button>
              <button 
                className="cookie-btn cookie-btn-secondary"
                onClick={() => setShowPreferences(true)}
              >
                Personalizar
              </button>
              <button 
                className="cookie-btn cookie-btn-primary"
                onClick={acceptAll}
              >
                Aceptar todas
              </button>
            </div>
          </>
        ) : (
          // Vista de preferencias
          <>
            <div className="cookie-preferences">
              <h3>Personalizar cookies</h3>
              
              <div className="cookie-preference-item">
                <div className="preference-info">
                  <span className="preference-name">🔧 Esenciales</span>
                  <span className="preference-desc">Necesarias para el funcionamiento del sitio</span>
                </div>
                <label className="cookie-toggle disabled">
                  <input type="checkbox" checked disabled />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="cookie-preference-item">
                <div className="preference-info">
                  <span className="preference-name">📊 Analíticas</span>
                  <span className="preference-desc">Nos ayudan a mejorar el sitio</span>
                </div>
                <label className="cookie-toggle">
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics}
                    onChange={() => togglePreference('analytics')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="cookie-preference-item">
                <div className="preference-info">
                  <span className="preference-name">🎯 Marketing</span>
                  <span className="preference-desc">Publicidad personalizada</span>
                </div>
                <label className="cookie-toggle">
                  <input 
                    type="checkbox" 
                    checked={preferences.marketing}
                    onChange={() => togglePreference('marketing')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="cookie-banner-actions">
              <button 
                className="cookie-btn cookie-btn-secondary"
                onClick={() => setShowPreferences(false)}
              >
                Volver
              </button>
              <button 
                className="cookie-btn cookie-btn-primary"
                onClick={savePreferences}
              >
                Guardar preferencias
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
