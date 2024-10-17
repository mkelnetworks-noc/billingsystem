import React, { useState } from 'react';
import Profile from '../components/Dashboard/Profile';
import OrderHistory from '../components/Dashboard/OrderHistory';
import Wishlist from '../components/Dashboard/Wishlist';
import SavedAddresses from '../components/Dashboard/SaveAddresses';
import PaymentMethods from '../components/Dashboard/PaymentMethods';
import Notifications from '../components/Dashboard/Notifications';
import { FaUserCircle, FaBoxOpen, FaHeart, FaMapMarkerAlt, FaCreditCard, FaBell } from 'react-icons/fa'; 

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile />;
      case 'orders':
        return <OrderHistory />;
      case 'wishlist':
        return <Wishlist />;
      case 'addresses':
        return <SavedAddresses />;
      case 'payment':
        return <PaymentMethods />;
      case 'notifications':
        return <Notifications />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex mt-20">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <FaUserCircle className="text-gray-700 text-4xl mx-auto" />
          <h2 className="mt-2 text-center text-xl font-bold">Welcome, User</h2>
        </div>
        <nav className="space-y-4 p-6">
          <button 
            className={`w-full text-left ${activeTab === 'profile' ? 'text-red-500' : ''}`} 
            onClick={() => setActiveTab('profile')}
          >
            <FaUserCircle className="inline mr-2" /> Profile
          </button>
          <button 
            className={`w-full text-left ${activeTab === 'orders' ? 'text-red-500' : ''}`} 
            onClick={() => setActiveTab('orders')}
          >
            <FaBoxOpen className="inline mr-2" /> Orders
          </button>
          <button 
            className={`w-full text-left ${activeTab === 'wishlist' ? 'text-red-500' : ''}`} 
            onClick={() => setActiveTab('wishlist')}
          >
            <FaHeart className="inline mr-2" /> Wishlist
          </button>
          <button 
            className={`w-full text-left ${activeTab === 'addresses' ? 'text-red-500' : ''}`} 
            onClick={() => setActiveTab('addresses')}
          >
            <FaMapMarkerAlt className="inline mr-2" /> Addresses
          </button>
          <button 
            className={`w-full text-left ${activeTab === 'payment' ? 'text-red-500' : ''}`} 
            onClick={() => setActiveTab('payment')}
          >
            <FaCreditCard className="inline mr-2" /> Payment Methods
          </button>
          <button 
            className={`w-full text-left ${activeTab === 'notifications' ? 'text-red-500' : ''}`} 
            onClick={() => setActiveTab('notifications')}
          >
            <FaBell className="inline mr-2" /> Notifications
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
