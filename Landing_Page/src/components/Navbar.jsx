// src/components/Navbar.jsx
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Isotipo.png'; // 1. Importamos tu nuevo logo

const Navbar = ({ onRegisterOpen, onLoginOpen }) => { // <-- Recibir la prop
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <div className="navbar-container">
        
        {/* --- Parte Izquierda: Logo --- */}
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="FinAi Logo" className="navbar-logo" />
        </Link>

        {/* --- Parte Central: Enlaces de Navegación --- */}
        <nav className="navbar-links">
          <NavLink to="/" className="navbar-link">
            Inicio
          </NavLink>
          <NavLink to="/about" className="navbar-link">
            Sobre nosotros
          </NavLink>
          <NavLink to="/pricing" className="navbar-link">
            Precios
          </NavLink>
          <NavLink to="/qr" className="navbar-link">
            Obtener App
          </NavLink>
        </nav>

        {/* --- Parte Derecha: Botones de Acción --- */}
        <div className="navbar-actions">
          <button className="navbar-button" onClick={onLoginOpen}>
            Login
          </button>
          {/* Botón que abre el Modal */}
          <button className="navbar-button navbar-button-secondary login-button-mobile" onClick={onRegisterOpen}>
            Register
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;