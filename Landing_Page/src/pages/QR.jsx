// src/pages/QR.jsx
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import TiltedCard from '../components/TiltedCard';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import GradientText from '../components/GradientText';
import './QR.css';

const QRPage = () => {
  const appStoreUrl = "https://apps.apple.com/app/your-app-id";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=your.app.package";

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
        {/* --- Tarjeta para iOS --- */}
        <div className="qr-card-wrapper">
          <h3 className="qr-platform-title"><FaApple /> iOS</h3>
          <TiltedCard
            containerWidth="300px"
            containerHeight="300px"
            imageWidth="300px"   // <-- AÑADE ESTA LÍNEA
            imageHeight="300px"
            overlayContent={
              <div className="qr-overlay">
                <QRCodeSVG value={appStoreUrl} {...qrCodeProps} />
              </div>
            }
            displayOverlayContent={true}
          />
        </div>

        {/* --- Tarjeta para Android --- */}
        <div className="qr-card-wrapper">
          <h3 className="qr-platform-title"><FaGooglePlay /> Android</h3>
          <TiltedCard
            containerWidth="300px"
            containerHeight="300px"
            imageWidth="300px"   // <-- AÑADE ESTA LÍNEA
            imageHeight="300px"
            overlayContent={
              <div className="qr-overlay">
                <QRCodeSVG value={playStoreUrl} {...qrCodeProps} />
              </div>
            }
            displayOverlayContent={true}
          />
        </div>
      </div>

      <div className="store-buttons">
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="store-button">
            <FaApple />
            <span>App Store</span>
          </a>
          <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="store-button">
            <FaGooglePlay />
            <span>Google Play</span>
          </a>
      </div>
    </div>
  );
};

export default QRPage;