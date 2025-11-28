// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '/imagotipo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar menú cuando cambia la ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    navigate('/qr');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        
        {/* --- Parte Izquierda: Logo --- */}
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="FinAi Logo" className="navbar-logo" />
        </Link>

        {/* --- Parte Central: Enlaces de Navegación --- */}
        <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          {/* Cruz para cerrar - solo visible en móvil cuando está abierto */}
          <button className="navbar-close" onClick={closeMenu} aria-label="Cerrar menú">
            <span className="close-line"></span>
            <span className="close-line"></span>
          </button>

          <NavLink to="/" className="navbar-link" onClick={closeMenu}>
            Inicio
          </NavLink>
          <NavLink to="/about" className="navbar-link" onClick={closeMenu}>
            Sobre nosotros
          </NavLink>
          <NavLink to="/pricing" className="navbar-link" onClick={closeMenu}>
            Precios
          </NavLink>
          <NavLink to="/qr" className="navbar-link" onClick={closeMenu}>
            Obtener App
          </NavLink>
        </nav>

        {/* --- Parte Derecha: Botón descarga + Hamburguesa (móvil) --- */}
        <div className={`navbar-right ${isMenuOpen ? 'menu-open' : ''}`}>
          {/* Botón de Descarga */}
          <div className="navbar-actions">
            <button className="navbar-button navbar-download" onClick={handleDownload}>
              <span className="download-icon">📱</span>
              <span className="download-text">Descargar App</span>
            </button>
          </div>

          {/* Botón de Hamburguesa - solo móvil */}
          <button 
            className="navbar-hamburger" 
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;