// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Aurora from './Aurora';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import { Toaster } from 'react-hot-toast';
import './Layout.css';

const Layout = () => {
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
        <Navbar />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
      <CookieBanner />
    </div>
  );
};

export default Layout;