// src/components/RegisterModal.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import Modal from './Modal';
import toast from 'react-hot-toast';
import './RegisterModal.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa6';

const RegisterModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateAndSubmit = async () => {
    const errors = [];

    // 1. Validaciones de campos vacíos
    if (!username) errors.push("El campo 'Apodo / Username' es obligatorio.");
    if (!fullName) errors.push("El campo 'Nombre completo' es obligatorio.");
    if (!email) errors.push("El campo 'Email' es obligatorio.");
    if (!password) errors.push("El campo 'Contraseña' es obligatorio.");

    // 2. Validación de formato de email
    if (email && !email.includes('@')) {
      errors.push("El formato del email no es válido.");
    }

    // 3. Validación de complejidad de la contraseña
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    if (password && !passwordRegex.test(password)) {
      errors.push(
        "La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial."
      );
    }

    // 4. Validación de coincidencia de contraseñas
    if (password !== confirmPassword) {
      errors.push("Las contraseñas no coinciden.");
    }

    // Si hay errores, los mostramos todos y detenemos el proceso
    if (errors.length > 0) {
      toast.error(errors.join('\n')); 
      return;
    }

    // Si todo es correcto, procedemos con el registro en Supabase
    setIsLoading(true);
    try {
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: { 
              // Añadimos la redirección específica para la web
              emailRedirectTo: 'http://localhost:5173/',
              data: { full_name: fullName, username: username } 
            }
        });
        if (error) throw error;
        
        toast.success('¡Registro exitoso! Revisa tu correo para activar la cuenta.');
        onClose(); 
        
    } catch (error) {
        toast.error(error.message);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="register-modal-content">
        <h2 className="modal-header">Crear una cuenta</h2>
        <div className="modal-body">
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
          <button className="modal-button-primary" onClick={validateAndSubmit} disabled={isLoading}>
            {isLoading ? 'Registrando...' : 'Registrarse'}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;