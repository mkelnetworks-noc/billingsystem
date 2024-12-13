// src/components/FormInput.jsx
import React from 'react';

const FormInput = ({ label, type = 'text', value, onChange, className }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-navyBlue font-semibold mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-skyBlue focus:outline-none"
      />
    </div>
  );
};

export default FormInput;
