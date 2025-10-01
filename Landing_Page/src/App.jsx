import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { supabase } from './supabaseClient';

// Layouts
import Layout from './components/Layout';
import PortalLayout from './components/PortalLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Páginas Públicas
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import QR from './pages/QR';

// Páginas del Portal
import SubscriptionPortal from './pages/SubscriptionPortal';
import PortalBilling from './pages/PortalBilling';
import PortalPayments from './pages/PortalPayments';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      // Ya no necesitamos la redirección del SIGNED_IN aquí, el ProtectedRoute lo maneja
    });
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <Routes>
      {/* --- RUTAS PÚBLICAS --- */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="qr" element={<QR />} />
      </Route>

      {/* --- RUTAS PROTEGIDAS --- */}
      <Route element={<ProtectedRoute />}>
        <Route path="/portal-suscripcion" element={<PortalLayout />}>
            <Route index element={<SubscriptionPortal />} />
            <Route path="facturacion" element={<PortalBilling />} />
            <Route path="pagos" element={<PortalPayments />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
