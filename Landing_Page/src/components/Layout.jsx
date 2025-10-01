// src/components/Layout.jsx
import React, { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import Aurora from './Aurora';
import Navbar from './Navbar';
import Footer from './Footer';
import RegisterModal from './RegisterModal';
import { Toaster } from 'react-hot-toast';
import './Layout.css';
import LoginModal from './LoginModal';

const Layout = () => {
  // Usamos el useState de React, no el 'useDisclosure' de la librería eliminada
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="layout-container">
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: 'rgba(25, 25, 35, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
          },
        }}
      />
      <div className="aurora-wrapper">
        <Aurora />
      </div>
      <div className="content-wrapper">
        {/* Pasamos la función para abrir el modal al Navbar */}
        <Navbar 
          onRegisterOpen={() => setIsModalOpen(true)}
          onLoginOpen={() => setIsLoginModalOpen(true)}
        />
        <main className="main-content">
          {/* Pasamos la misma función a las páginas (como Home) */}
          <Outlet context={{ 
              onRegisterOpen: () => setIsModalOpen(true),
              onLoginOpen: () => setIsLoginModalOpen(true)
            }}
          />
        </main>
        <Footer />
      </div>
      {/* El modal se controla con nuestro estado local */}
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
};

export default Layout;

export function usePageContext() {
  return useOutletContext();
}