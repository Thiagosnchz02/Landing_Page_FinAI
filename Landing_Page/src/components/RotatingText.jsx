// src/components/RotatingText.jsx
import React from 'react';
import './RotatingText.css'; // Crearemos este archivo a continuación

const RotatingText = ({ words }) => {
  return (
    <div className="rotating-text-wrapper">
      <div className="rotating-text-container">
        {words.map((word, index) => (
          <span key={index} style={{ color: word.color }}>
            {word.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RotatingText;