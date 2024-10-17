import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa'; // Import Cart Icon
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import ReservationModal from './ReservationModal';
import CartModal from './CartModal'; // Import the Cart Modal
import {CartContext } from '../context/CartContext'; // Import cartContext

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State for Cart Modal
  // const [cartCount, setCartCount] = useState(0); // State to hold cart count

  const { cartItems } = useContext(CartContext); // Access cart items from context
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0); // Calculate cart count
  return (
    <nav className="bg-gray-800 fixed top-0 w-full text-white z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">WineBar</Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-red-400">Home</Link>
          <Link to="/about" className="hover:text-red-400">About</Link>
          <Link to="/contact" className="hover:text-red-400">Contact</Link>
          <Link to="/shopnow" className="hover:text-red-400">Shop Now</Link>
          <Link to="/inventory" className="hover:text-red-400">Inventory</Link>
          <Link to="/dashboard" className="hover:text-red">Dashboard</Link>
        </div>

        {/* Reservation, Cart, and Login Buttons */}
        <div className="hidden md:flex space-x-4">
        <div className="relative">
            <button onClick={() => setIsCartOpen(true)} className="relative">
              <FaShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute  right-3 bottom-2 bg-red-500 text-white text-xs rounded-full px-1 ">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
          <button
            className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
            onClick={() => setIsReservationOpen(true)}
          >
            Reserve
          </button>
          {/* <div className="relative">
            <button onClick={() => setIsCartOpen(true)} className="relative">
              <FaShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-sm rounded-full px-2 py-1">
                  {cartCount}
                </span>
              )}
            </button>
          </div> */}
          <button
            className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
            onClick={() => setIsLoginOpen(true)}
          >
            Login
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
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/shopnow" onClick={() => setIsOpen(false)}>Shop Now</Link>
            <Link to="/inventory" onClick={() => setIsOpen(false)}>Inventory</Link>
            <Link to="dashboard" onClick={() =>setIsOpen(false)}>Dashboard</Link>
            <button 
              className="text-red-400" 
              onClick={() => { setIsReservationOpen(true); setIsOpen(false); }}
            >
              Reserve
            </button>
            <button 
              className="text-red-400" 
              onClick={() => { setIsLoginOpen(true); setIsOpen(false); }}
            >
              Login
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
        cartItems={[]} // Cart items will be added later
      />
    </nav>
  );
};

export default Navbar;
