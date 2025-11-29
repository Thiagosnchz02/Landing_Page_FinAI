// src/pages/QR.jsx
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Link } from 'react-router-dom';
import TiltedCard from '../components/TiltedCard';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import GradientText from '../components/GradientText';
import './QR.css';

const QRPage = () => {
  // URLs temporales que apuntan a la página "Coming Soon"
  const baseUrl = window.location.origin;
  const appStoreUrl = `${baseUrl}/coming-soon?platform=ios`;
  const playStoreUrl = `${baseUrl}/coming-soon?platform=android`;

  // --- CAMBIOS EN LAS PROPS DEL QR ---
  const qrCodeProps = {
    size: 256,
    bgColor: "transparent", // Fondo transparente
    fgColor: "#FFFFFF",     // Color de los puntos del QR (blanco)
    level: "Q",
    includeMargin: false, // Quitamos el margen blanco
  };

  return (
    <div className="qr-page">
      <div className="qr-header">
        <GradientText colors={["#FC3DF3", "#4D0FFF"]} className="qr-title">
          Descarga FinAi
        </GradientText>
        <p className="qr-subtitle">
          Escanéalo y empieza a tomar el control en <b>30 segundos</b>.
        </p>
      </div>

      <div className="qr-cards-container">
        {/* --- QR para iOS --- */}
        <div className="qr-card-item">
          <TiltedCard
            containerHeight="280px"
            overlayContent={
              <div className="qr-3d-container qr-ios">
                <div className="qr-glow"></div>
                <div className="qr-code-wrapper">
                  <QRCodeSVG value={appStoreUrl} {...qrCodeProps} />
                </div>
                <div className="qr-label">
                  <FaApple className="qr-icon" />
                  <span>App Store</span>
                </div>
              </div>
            }
          />
        </div>

        {/* --- QR para Android --- */}
        <div className="qr-card-item">
          <TiltedCard
            containerHeight="280px"
            overlayContent={
              <div className="qr-3d-container qr-android">
                <div className="qr-glow"></div>
                <div className="qr-code-wrapper">
                  <QRCodeSVG value={playStoreUrl} {...qrCodeProps} />
                </div>
                <div className="qr-label">
                  <FaGooglePlay className="qr-icon" />
                  <span>Google Play</span>
                </div>
              </div>
            }
          />
        </div>
      </div>

      <div className="store-buttons">
          <Link to="/coming-soon?platform=ios" className="store-button">
            <FaApple />
            <span>App Store</span>
          </Link>
          <Link to="/coming-soon?platform=android" className="store-button">
            <FaGooglePlay />
            <span>Google Play</span>
          </Link>
      </div>
    </div>
  );
};

export default QRPage;