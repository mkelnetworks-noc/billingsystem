// routes/index.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; // Example page component
import About from '../pages/About'; // Example page component
import Contact from '../pages/Contact';
import Inventory from '../pages/Inventory';
import ShopNow from '../pages/ShopNow';
import Dashboard from '../pages/Dashboard';
/* import Login from '../pages/Login'; */

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shopnow" element={<ShopNow />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/dashboard" element={<Dashboard />} />
  {/*     <Route path="/login" element={<Login />} /> */}
      {/* Add more routes here */}
    </Routes>
  );
};

export default AppRoutes;
