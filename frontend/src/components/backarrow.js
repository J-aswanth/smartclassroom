import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import backIcon from '../assests/back.png'; 

const BackArrow = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        position: 'fixed',
        left: '15px',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'white',
        border: '1px solid #aaa',
        borderRadius: '50%',
        padding: '7px',
        cursor: 'pointer',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        zIndex: 1000,
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(-50%)')}
    >
      <img
        src={backIcon}
        alt="Back"
        style={{
          width: '35px',
          height: '35px',
        }}
      />
    </button>
  );
};

export default BackArrow;
