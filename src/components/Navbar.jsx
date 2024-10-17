import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { FaBars, FaTimes, FaShoppingCart, FaHome, FaInfoCircle, FaPhone, FaWineBottle, FaWarehouse, FaUserCircle, FaCalendarAlt } from 'react-icons/fa';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import ReservationModal from './ReservationModal';
import CartModal from './CartModal';
import { CartContext } from '../context/CartContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const location = useLocation(); // Get the current URL path

  // Helper function to determine if the menu item is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-800 fixed top-0 w-full text-white z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">WineBar</Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/"
            className={`flex items-center space-x-1 ${isActive('/') ? 'text-red-500' : 'hover:text-red-400'}`}
          >
            <FaHome className="text-xl" /> <span>Home</span>
          </Link>
          <Link
            to="/about"
            className={`flex items-center space-x-1 ${isActive('/about') ? 'text-red-500' : 'hover:text-red-400'}`}
          >
            <FaInfoCircle className="text-xl" /> <span>About</span>
          </Link>
          <Link
            to="/contact"
            className={`flex items-center space-x-1 ${isActive('/contact') ? 'text-red-500' : 'hover:text-red-400'}`}
          >
            <FaPhone className="text-xl" /> <span>Contact</span>
          </Link>
          <Link
            to="/shopnow"
            className={`flex items-center space-x-1 ${isActive('/shopnow') ? 'text-red-500' : 'hover:text-red-400'}`}
          >
            <FaWineBottle className="text-xl" /> <span>Shop Now</span>
          </Link>
          <Link
            to="/inventory"
            className={`flex items-center space-x-1 ${isActive('/inventory') ? 'text-red-500' : 'hover:text-red-400'}`}
          >
            <FaWarehouse className="text-xl" /> <span>Inventory</span>
          </Link>
          <Link
            to="/dashboard"
            className={`flex items-center space-x-1 ${isActive('/dashboard') ? 'text-red-500' : 'hover:text-red-400'}`}
          >
            <FaUserCircle className="text-xl" /> <span>Dashboard</span>
          </Link>
        </div>

        {/* Reservation, Cart, and Login Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <div className="relative">
            <button onClick={() => setIsCartOpen(true)} className="relative">
              <FaShoppingCart size={24} className="hover:text-red-400" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
          <button
            className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 flex items-center space-x-1"
            onClick={() => setIsReservationOpen(true)}
          >
            <FaCalendarAlt className="text-white" />
            <span>Reserve</span>
          </button>
          <button
            className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 flex items-center space-x-1"
            onClick={() => setIsLoginOpen(true)}
          >
            <FaUserCircle className="text-white" />
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col space-y-4 p-4 md:hidden">
            <Link
              to="/"
              className={`flex items-center space-x-1 ${isActive('/') ? 'text-red-500' : 'hover:text-red-400'}`}
              onClick={() => setIsOpen(false)}
            >
              <FaHome /> <span>Home</span>
            </Link>
            <Link
              to="/about"
              className={`flex items-center space-x-1 ${isActive('/about') ? 'text-red-500' : 'hover:text-red-400'}`}
              onClick={() => setIsOpen(false)}
            >
              <FaInfoCircle /> <span>About</span>
            </Link>
            <Link
              to="/contact"
              className={`flex items-center space-x-1 ${isActive('/contact') ? 'text-red-500' : 'hover:text-red-400'}`}
              onClick={() => setIsOpen(false)}
            >
              <FaPhone /> <span>Contact</span>
            </Link>
            <Link
              to="/shopnow"
              className={`flex items-center space-x-1 ${isActive('/shopnow') ? 'text-red-500' : 'hover:text-red-400'}`}
              onClick={() => setIsOpen(false)}
            >
              <FaWineBottle /> <span>Shop Now</span>
            </Link>
            <Link
              to="/inventory"
              className={`flex items-center space-x-1 ${isActive('/inventory') ? 'text-red-500' : 'hover:text-red-400'}`}
              onClick={() => setIsOpen(false)}
            >
              <FaWarehouse /> <span>Inventory</span>
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center space-x-1 ${isActive('/dashboard') ? 'text-red-500' : 'hover:text-red-400'}`}
              onClick={() => setIsOpen(false)}
            >
              <FaUserCircle /> <span>Dashboard</span>
            </Link>
            <button 
              className="text-red-400 flex items-center space-x-1" 
              onClick={() => { setIsReservationOpen(true); setIsOpen(false); }}
            >
              <FaCalendarAlt /> <span>Reserve</span>
            </button>
            <button 
              className="text-red-400 flex items-center space-x-1" 
              onClick={() => { setIsLoginOpen(true); setIsOpen(false); }}
            >
              <FaUserCircle /> <span>Login</span>
            </button>
          </div>
        )}
      </div>

      {/* Modals */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onSignUp={() => { 
          setIsLoginOpen(false); 
          setIsSignUpOpen(true); 
        }} 
      />
      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        onSignIn={() => {
          setIsSignUpOpen(false);
          setIsLoginOpen(true);
        }}
      />
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems} // Pass cart items to the modal
      />
    </nav>
  );
};

export default Navbar;