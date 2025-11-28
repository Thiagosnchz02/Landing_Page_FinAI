// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '/imagotipo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    navigate('/qr');
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        
        {/* --- Parte Izquierda: Logo --- */}
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="FinAi Logo" className="navbar-logo" />
        </Link>

        {/* --- Parte Derecha en móvil: Icono descarga + Hamburguesa --- */}
        <div className={`navbar-right ${isMenuOpen ? 'menu-open' : ''}`}>
          {/* Botón de Descarga - se oculta cuando el menú está abierto */}
          <div className="navbar-actions">
            <button className="navbar-button navbar-download" onClick={handleDownload}>
              <span className="download-icon">📱</span>
              <span className="download-text">Descargar App</span>
            </button>
          </div>

          {/* Botón de Hamburguesa - se oculta cuando el menú está abierto */}
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

        {/* --- Menú de Navegación --- */}
        <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          {/* Cruz para cerrar - solo visible en móvil cuando está abierto */}
          <button className="navbar-close" onClick={toggleMenu} aria-label="Cerrar menú">
            <span className="close-line"></span>
            <span className="close-line"></span>
          </button>

          <NavLink to="/" className="navbar-link" onClick={toggleMenu}>
            Inicio
          </NavLink>
          <NavLink to="/about" className="navbar-link" onClick={toggleMenu}>
            Sobre nosotros
          </NavLink>
          <NavLink to="/pricing" className="navbar-link" onClick={toggleMenu}>
            Precios
          </NavLink>
          <NavLink to="/qr" className="navbar-link" onClick={toggleMenu}>
            Obtener App
          </NavLink>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;