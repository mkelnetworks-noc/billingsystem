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
    <div className="min-h-screen bg-gray-100 flex flex-col mt-20">
      {/* Top Navigation */}
      <header className="bg-white shadow-md w-full">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <FaUserCircle className="text-gray-700 text-5xl" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Welcome, User</h2>
            </div>
          </div>
          <nav className="flex space-x-4">
            <button
              className={`py-2 px-4 rounded ${activeTab === 'profile' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setActiveTab('profile')}
            >
              <FaUserCircle className="inline mr-2" /> Profile
            </button>
            <button
              className={`py-2 px-4 rounded ${activeTab === 'orders' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setActiveTab('orders')}
            >
              <FaBoxOpen className="inline mr-2" /> Orders
            </button>
            <button
              className={`py-2 px-4 rounded ${activeTab === 'wishlist' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setActiveTab('wishlist')}
            >
              <FaHeart className="inline mr-2" /> Wishlist
            </button>
            <button
              className={`py-2 px-4 rounded ${activeTab === 'addresses' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setActiveTab('addresses')}
            >
              <FaMapMarkerAlt className="inline mr-2" /> Addresses
            </button>
            <button
              className={`py-2 px-4 rounded ${activeTab === 'payment' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setActiveTab('payment')}
            >
              <FaCreditCard className="inline mr-2" /> Payment Methods
            </button>
            <button
              className={`py-2 px-4 rounded ${activeTab === 'notifications' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setActiveTab('notifications')}
            >
              <FaBell className="inline mr-2" /> Notifications
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 flex-1">
        <div className="bg-white p-6 rounded-lg shadow-md">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
