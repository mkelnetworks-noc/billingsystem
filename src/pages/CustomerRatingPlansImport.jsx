// src/pages/CustomerRatingPlansPage.jsx
import React from 'react';
import Navbar from '../components/Headers/Navbar';
import RatingPlanFormFileImport from '../components/Customer/CustomerRating/RatingPlanFormFileImport';

const CustomerRatingPlansPageImport = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="container mx-auto p-6">
        <RatingPlanFormFileImport />
        
      </div>
    </div>
  );
};

export default CustomerRatingPlansPageImport;
