// src/pages/Pricing.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import './Pricing.css';

const plans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'Todo para empezar a controlar tu dinero sin pagar nada.',
    features: [
      'Registra todos tus gastos e ingresos',
      'Presupuestos y metas ilimitados',
      'Dashboard con resumen visual',
      'Alertas básicas de gastos',
      'Asistente IA básico (100 consultas/mes)',
    ],
    buttonText: 'Empezar Gratis',
    highlight: false,
    badge: null,
  },
  {
    name: 'Plus',
    price: { monthly: 5, yearly: 54 },
    description: 'Automatiza tus finanzas y recibe análisis más inteligentes.',
    features: [
      'Todo lo del plan Free',
      'Automatiza gastos recurrentes',
      'Categoriza gastos con reglas',
      'Exporta tus datos (CSV/Excel)',
      'Notificaciones personalizadas',
      'Asistente IA avanzado (300 consultas/mes)',
      'Crea tu avatar financiero con IA',
    ],
    buttonText: 'Probar 15 días gratis',
    highlight: true,
    badge: 'MÁS POPULAR',
  },
  {
    name: 'Premium',
    price: { monthly: 10, yearly: 102 },
    description: 'El poder total: IA avanzada, alertas inteligentes y más.',
    features: [
      'Todo lo del plan Plus',
      'Asistente por WhatsApp',
      'Informes automáticos con IA',
      'Te avisa si algo raro pasa con tu dinero',
      'Predicciones de gastos futuros',
      'Preparado para conectar tu banco',
      '3 avatares financieros con IA',
    ],
    buttonText: 'Probar 15 días gratis',
    highlight: false,
    badge: 'MÁS COMPLETO',
  },
];

const faqs = [
  {
    question: '¿Puedo cancelar en cualquier momento?',
    answer: 'Sí, puedes cancelar tu suscripción cuando quieras desde la app. Sin preguntas, sin complicaciones.',
  },
  {
    question: '¿Qué pasa después de los 15 días de prueba?',
    answer: 'Si te gusta, se activa tu suscripción automáticamente. Si no, vuelves al plan Free sin perder tus datos.',
  },
  {
    question: '¿Necesito tarjeta para la prueba gratis?',
    answer: 'Sí, pero no te cobramos nada durante los 15 días. Puedes cancelar antes y no pagarás ni un euro.',
  },
  {
    question: '¿Mis datos están seguros?',
    answer: 'Totalmente. Usamos cifrado de nivel bancario y nunca vendemos tus datos a terceros.',
  },
  {
    question: '¿Puedo cambiar de plan después?',
    answer: 'Claro, puedes subir o bajar de plan en cualquier momento desde la configuración de la app.',
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate('/qr');
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <h1>Planes y Precios</h1>
        <p>Elige el plan que se adapta a ti. Sin sorpresas, sin letra pequeña.</p>
      </div>

      {/* Trust badge */}
      <div className="trust-badge">
        <FaShieldAlt />
        <span>Prueba gratis 15 días · Sin compromiso · Cancela cuando quieras</span>
      </div>

      <div className="billing-toggle">
        <span className={billingCycle === 'monthly' ? 'active' : ''}>Mensual</span>
        <label className="switch">
          <input 
            type="checkbox" 
            checked={billingCycle === 'yearly'}
            onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')} 
          />
          <span className="slider"></span>
        </label>
        <span className={billingCycle === 'yearly' ? 'active' : ''}>Anual <span className="discount-tag">-15%</span></span>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
            {plan.badge && <div className="card-badge">{plan.badge}</div>}
            <div className="card-header">
              <h3>{plan.name}</h3>
              <p className="card-price">
                <span className="price-amount">
                  {billingCycle === 'monthly' 
                    ? plan.price.monthly 
                    : Math.round((plan.price.yearly / 12) * 100) / 100}
                </span>
                <span className="price-currency">€</span>
                <span className="price-period">/ mes</span>
              </p>
              {billingCycle === 'yearly' && plan.price.yearly > 0 && (
                <p className="yearly-total">Facturado anualmente: {plan.price.yearly}€</p>
              )}
              <p className="card-description">{plan.description}</p>
            </div>
            <ul className="features-list">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex}>
                  <FaCheckCircle className="feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="cta-button" onClick={handleCTA}>
              {plan.buttonText}
            </button>
            {plan.price.monthly > 0 && (
              <p className="trial-note">Sin compromiso · Cancela cuando quieras</p>
            )}
          </div>
        ))}
      </div>

      <div className="pricing-footer">
        <p><b>🎁 Herramientas gratis en todos los planes:</b> Calculadora financiera, Dividir gastos por foto (OCR), Plantillas de presupuesto.</p>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFaq === index ? 'open' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-toggle">{openFaq === index ? '−' : '+'}</span>
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;