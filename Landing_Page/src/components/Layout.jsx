// src/components/Layout.jsx
import React, { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import Aurora from './Aurora';
import Navbar from './Navbar';
import Footer from './Footer';
import RegisterModal from './RegisterModal';
import './Layout.css';

const Layout = () => {
  // Usamos el useState de React, no el 'useDisclosure' de la librería eliminada
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="layout-container">
      <div className="aurora-wrapper">
        <Aurora />
      </div>
      <div className="content-wrapper">
        {/* Pasamos la función para abrir el modal al Navbar */}
        <Navbar onRegisterOpen={() => setIsModalOpen(true)} />
        <main className="main-content">
          {/* Pasamos la misma función a las páginas (como Home) */}
          <Outlet context={{ onRegisterOpen: () => setIsModalOpen(true) }} />
        </main>
        <Footer />
      </div>
      {/* El modal se controla con nuestro estado local */}
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Layout;

export function usePageContext() {
  return useOutletContext();
}