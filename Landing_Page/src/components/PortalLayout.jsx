// src/components/PortalLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import PortalSidebar from './PortalSidebar'; // <-- Importar
import './PortalLayout.css';

const PortalLayout = () => {
  return (
    <div className="portal-layout">
      <PortalSidebar /> {/* <-- Usar el componente real */}
      <main className="portal-content">
        <Outlet />
      </main>
    </div>
  );
};
export default PortalLayout;