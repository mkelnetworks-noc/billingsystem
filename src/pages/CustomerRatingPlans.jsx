// src/pages/CustomerRatingPlansPage.jsx
import React from 'react';
import CustomerRatingPlans from '../components/Customer/CustomerRating/CustomerRatingPlans';
import Navbar from '../components/Headers/Navbar';

const CustomerRatingPlansPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="container mx-auto p-6">
        <CustomerRatingPlans />
      </div>
    </div>
  );
};

export default CustomerRatingPlansPage;
