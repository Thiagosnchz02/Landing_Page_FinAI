// src/pages/Pricing.jsx
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Pricing.css';

const plans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'Todo para empezar: presupuestos y metas ilimitados, alertas básicas y análisis esencial.',
    features: [
      'Transacciones, Viajes y Dashboard',
      'Informes y Autenticación',
      'Presupuestos y Metas ilimitados',
      'Agente in-app Lite (100 msg/mes)',
    ],
    buttonText: 'Empezar Gratis',
    highlight: false,
  },
  {
    name: 'Plus',
    price: { monthly: 5, yearly: 54 },
    description: 'Automatiza tus finanzas: reglas de categorías, gastos fijos, y agente in-app Pro.',
    features: [
      'Todo lo del plan Free',
      'Gastos fijos y Reglas de categorías',
      'Exportación CSV/XLS',
      'Análisis intermedio',
      'Notificaciones personalizadas',
      'Agente in-app Pro (300 msg/mes)',
      '1 Avatar IA por mes',
    ],
    buttonText: 'Probar Plus',
    highlight: true,
  },
  {
    name: 'Premium',
    price: { monthly: 10, yearly: 102 },
    description: 'Nivel avanzado: WhatsApp Pro, informes IA, anomalías y proyecciones.',
    features: [
      'Todo lo del plan Plus',
      'Agente WhatsApp Pro',
      'Informes y alertas avanzadas (IA)',
      'Detección de anomalías (IA)',
      'Proyecciones de gastos fijos',
      'Preparado para banca automática',
      '3 Avatares IA por mes',
    ],
    buttonText: 'Probar Premium',
    highlight: false,
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <h1>Planes y Precios</h1>
        <p>Elige el plan que se adapta a ti. Sin letra pequeña, puedes cambiar o cancelar cuando quieras.</p>
      </div>

      <div className="billing-toggle">
        <span>Mensual</span>
        <label className="switch">
          <input type="checkbox" onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')} />
          <span className="slider"></span>
        </label>
        <span>Anual <span className="discount-tag">-15%</span></span>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
            <div className="card-header">
              <h3>{plan.name}</h3>
              <p className="card-price">
                <span className="price-amount">
                  {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly / 12}
                </span>
                <span className="price-currency">€</span>
                <span className="price-period">{billingCycle === 'monthly' ? ' / mes' : ' / mes'}</span>
              </p>
              {billingCycle === 'yearly' && plan.price.yearly > 0 && (
                <p className="yearly-total">Pagado anualmente: {plan.price.yearly}€</p>
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
            <button className="cta-button">{plan.buttonText}</button>
          </div>
        ))}
      </div>
      <div className="pricing-footer">
        <p><b>Herramientas gratis incluidas en todos los planes:</b> Calculadora, Divisor por foto (OCR), Plantillas de presupuesto.</p>
      </div>
    </div>
  );
};

export default Pricing;