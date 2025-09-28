// src/components/RegisterModal.jsx
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import Modal from './Modal';
import './RegisterModal.css';
// 1. Importamos los iconos que vamos a usar
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa6';

const RegisterModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }
    // ... (resto de validaciones)
    
    setIsLoading(true);
    try {
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { full_name: fullName, username: username } }
        });
        if (error) throw error;
        alert('¡Registro exitoso! Revisa tu correo para confirmar la cuenta.');
        onClose();
    } catch (error) {
        alert(error.message);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="register-modal-content">
        <h2 className="modal-header">¡Regístrate en FinAi!</h2>
        <div className="modal-body">

          {/* 2. Envolvemos cada input en un 'input-group' con su icono */}
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Apodo / Username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-input" />
          </div>

          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Nombre completo" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form-input" />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Crea una contraseña segura" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Confirma tu contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-input" />
          </div>

        </div>
        <div className="modal-footer">
          <button className="modal-button-secondary" onClick={onClose}>Cancelar</button>
          <button className="modal-button-primary" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? 'Registrando...' : 'Registrarse'}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;