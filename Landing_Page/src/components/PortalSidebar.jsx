// src/components/PortalSidebar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import logo from '../assets/Isotipo.png';
import './PortalSidebar.css';

const PortalSidebar = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/'); // Redirige a la home al cerrar sesión
  };

  return (
    <aside className="portal-sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="FinAi Logo" className="sidebar-logo" />
        <span>FinAi Portal</span>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/portal-suscripcion" end className="sidebar-link">Mi Plan</NavLink>
        <NavLink to="/portal-suscripcion/facturacion" className="sidebar-link">Facturación</NavLink>
        <NavLink to="/portal-suscripcion/pagos" className="sidebar-link">Métodos de Pago</NavLink>
      </nav>
      <div className="sidebar-footer">
        <button onClick={handleSignOut} className="sidebar-logout-button">
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
};

export default PortalSidebar;