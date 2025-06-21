import React from 'react';
import './Button1.css';

const Button1 = ({ text, onClick }) => {
  return (
    <button className="button-1" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button1;
