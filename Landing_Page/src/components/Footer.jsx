// src/components/Footer.jsx
import React from 'react';
import { FaXTwitter, FaInstagram, FaTiktok, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import LogoLoop from './LogoLoop';
import './Footer.css';

const socialLogos = [
  { node: <FaXTwitter />, title: "X (Twitter)", href: "https://x.com/AppFinai" },
  { node: <FaInstagram />, title: "Instagram", href: "https://www.instagram.com/finai_official/" },
  { node: <FaTiktok />, title: "TikTok", href: "https://www.tiktok.com/@finai_official" },
  { node: <FaLinkedin />, title: "LinkedIn", href: "#" },
  { node: <FaWhatsapp />, title: "WhatsApp", href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <LogoLoop
          logos={socialLogos}
          speed={100}
          logoHeight={28}
          gap={80}
          pauseOnHover
          fadeOut
          fadeOutColor="#111827"
          className="footer-logoloop"
        />
        
        {/* Sección Legal */}
        <div className="footer-legal">
          <div className="legal-links">
            <a href="/privacidad" className="legal-link">Política de Privacidad</a>
            <span className="legal-separator">·</span>
            <a href="/terminos" className="legal-link">Términos de Uso</a>
            <span className="legal-separator">·</span>
            <a href="/cookies" className="legal-link">Política de Cookies</a>
          </div>
          <p className="copyright">
            © {currentYear} FinAi. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;