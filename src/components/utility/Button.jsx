import React from 'react';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 bg-skyBlue text-white font-semibold text-lg rounded-lg shadow-md hover:bg-sky-600 transition-all ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
