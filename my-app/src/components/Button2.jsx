import React from 'react';
import './Button2.css';

const Button2 = ({ text, onClick }) => {
  return (
    <button className="button-2" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button2;
