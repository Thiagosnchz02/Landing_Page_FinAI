// src/components/Footer.jsx
import React from 'react';
import { FaXTwitter, FaInstagram, FaTiktok, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import LogoLoop from './LogoLoop';
import './Footer.css'; // <-- Importamos el CSS del footer

const socialLogos = [
  { node: <FaXTwitter />, title: "X (Twitter)", href: "https://x.com/AppFinai" },
  { node: <FaInstagram />, title: "Instagram", href: "https://www.instagram.com/finai_official/" },
  { node: <FaTiktok />, title: "TikTok", href: "https://www.tiktok.com/@finai_official" },
  { node: <FaLinkedin />, title: "LinkedIn", href: "#" },
  { node: <FaWhatsapp />, title: "WhatsApp", href: "#" },
];

const Footer = () => {
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
          fadeOutColor="#111827" // Color del fondo de la app
          className="footer-logoloop" // Clase para estilos específicos si se necesitaran
        />
      </div>
    </footer>
  );
};

export default Footer;