import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-navyBlue h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        Welcome to Mkel Networks Billing System
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center max-w-2xl">
        Streamline your billing, reporting, and diagnostics with our cutting-edge platform.
      </p>
      <button
        onClick={() => navigate('/dashboard')}
        className="px-8 py-4 bg-skyBlue text-navyBlue font-semibold text-lg rounded-lg shadow-md hover:bg-sky-600 transition-all"
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
