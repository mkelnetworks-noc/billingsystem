import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import CustomerRatingPlans from './pages/CustomerRatingPlans';
import CustomerRatingsPlansImport from './pages/CustomerRatingPlansImport'

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer-rating-plans" element={<CustomerRatingPlans />} />
        <Route path="import-new-rating-plan" element={<CustomerRatingsPlansImport />} />
        {/* <Route path="/notifications" element={<Notifications />} />
        <Route path="/floor-price-rules" element={<FloorPriceRules />} />
        <Route path="/multiplan-import" element={<MultiplanImport />} />
        <Route path="/business-rules" element={<BusinessRules />} /> */}
      </Routes>
    </Router>
    </UserProvider>
  );
};

export default App;
