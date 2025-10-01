// src/components/LoginModal.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import toast from 'react-hot-toast';
import Modal from './Modal';
import './RegisterModal.css'; // Reutilizamos los mismos estilos del otro modal
import { FaEnvelope, FaLock } from 'react-icons/fa6';

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Por favor, introduce tu email y contraseña.");
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) throw error;

      // Si el login es correcto, cerramos modal y redirigimos al portal
      onClose();
      navigate('/portal-suscripcion');

    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="register-modal-content">
        <h2 className="modal-header">Iniciar Sesión</h2>
        <div className="modal-body">
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-button-secondary" onClick={onClose}>Cancelar</button>
          <button className="modal-button-primary" onClick={handleLogin} disabled={isLoading}>
            {isLoading ? 'Iniciando...' : 'Entrar'}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;