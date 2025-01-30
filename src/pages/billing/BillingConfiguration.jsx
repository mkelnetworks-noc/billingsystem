// src/pages/CustomerRatingPlansPage.jsx
import React from 'react';
//import BillingConfigurationLayout from '../../components/Billing/billingConfiguration/billingSettings/layout';
import BillingConfigurationLayout from '../../components/Billing/billingConfiguration/layout';
import Navbar from '../../components/Headers/Navbar';

const BillingConfigurationPage = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="container w-full mx-auto">
        <BillingConfigurationLayout />
      </div>
    </div>
  );
};

export default BillingConfigurationPage;
