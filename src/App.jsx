import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import CustomerRatingPlans from './pages/CustomerRatingPlans';
import CustomerRatingsPlansImport from './pages/CustomerRatingPlansImport'
import CallDetailRecords from './pages/reporting/CallDetailRecords';
import Reports from './pages/reporting/reports';
import BillingConfigurationPage from './pages/billing/BillingConfiguration';
import BillingSettings from './components/Billing/billingConfiguration/billingSettings/billingSettings';

// Dummy components for other pages
// import Notifications from './pages/Notifications';
// import FloorPriceRules from './pages/FloorPriceRules';
// import MultiplanImport from './pages/MultiplanImport';
// import BusinessRules from './pages/BusinessRules';

const App = () => {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Customer ratin routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Reporting Routes */}
        <Route path="/customer-rating-plans" element={<CustomerRatingPlans />} />
        <Route path="import-new-rating-plan" element={<CustomerRatingsPlansImport />} />
        
        {/* <Route path="/notifications" element={<Notifications />} />
        <Route path="/floor-price-rules" element={<FloorPriceRules />} />
        <Route path="/multiplan-import" element={<MultiplanImport />} />
        <Route path="/business-rules" element={<BusinessRules />} /> */}

        {/* Reporting section */}
        <Route path="/call-detail-records" element={<CallDetailRecords />} />
        <Route path="/reports" element={<Reports />} />
        
        {/* Billing routes */}
        <Route path="/billing-configuration" element={<BillingConfigurationPage />} />
        {/* Billing / Configuration routes */}
        <Route path="/billing-settings" element={<BillingSettings />} />
        {/* other routes */}

        
      </Routes>
    </Router>
    </UserProvider>
  );
};

export default App;
