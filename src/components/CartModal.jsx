import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { CartContext } from '../context/CartContext';
import CheckoutModal from './CheckoutModal'; // import the CheckoutModal
import { FaTrash } from 'react-icons/fa'; // Import the delete icon

Modal.setAppElement('#root');

const CartModal = ({ isOpen, onRequestClose, onClose }) => {
  const { cartItems, incrementItem, decrementItem, removeItem, clearCart } = useContext(CartContext);
  //const {checkoutOpen, setCheckoutOpen} = useState(false); // New state for checkout modal
 // Correct state declaration for checkout modal
 const [checkoutOpen, setCheckoutOpen] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

 const openCheckout = () => setCheckoutOpen(true);
 const closeCheckout = () => setCheckoutOpen(false);
 
  return (
    <>
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-10"
      overlayClassName="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center"
    >
      <button className="text-black top-2 right-2" onClick={onClose}>✕</button>
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <li key={index} className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => decrementItem(index)} className="bg-gray-300 px-2 py-1 rounded-l">-</button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button onClick={() => incrementItem(index)} className="bg-gray-300 px-2 py-1 rounded-r">+</button>
                  </div>
                </div>
                <p className="font-semibold">#{item.price * item.quantity}</p>
                <button onClick={() => removeItem(index)} className="text-red-500 ml-4">
                  <FaTrash size={16} />
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <p className="text-lg font-bold">Total: #{totalPrice.toFixed(2)}</p>
            <div>
              <button onClick={clearCart} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 mr-2">Clear Cart</button>
              <button onClick={openCheckout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </Modal>
    <CheckoutModal isOpen={checkoutOpen} onRequestClose={closeCheckout} onClose={closeCheckout} />
    </>
  );
};

export default CartModal;

