// src/components/ProtectedRoute.jsx
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const ProtectedRoute = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    // Muestra una pantalla de carga mientras se verifica la sesión
    return <div>Loading...</div>; // Puedes crear un componente de Spinner aquí
  }

  if (!session) {
    // Si no hay sesión, redirige al usuario a la página de inicio
    return <Navigate to="/" />;
  }

  // Si hay sesión, renderiza el contenido de la ruta protegida
  return <Outlet />;
};
export default ProtectedRoute;