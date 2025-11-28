// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '/imagotipo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    // Navegar a la página QR que tiene los links de descarga
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

        {/* --- Botón de Hamburguesa (solo visible en móvil) --- */}
        <button className="navbar-hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* --- Parte Central: Enlaces de Navegación --- */}
        <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
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

        {/* --- Parte Derecha: Botón de Descarga --- */}
        <div className="navbar-actions">
          <button className="navbar-button navbar-download" onClick={handleDownload}>
            📱 Descargar App
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;