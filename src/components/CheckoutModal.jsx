import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { CartContext } from '../context/CartContext';

Modal.setAppElement('#root');

const CheckoutModal = ({ isOpen, onRequestClose, onClose }) => {
  const { cartItems, clearCart } = useContext(CartContext);

  const [step, setStep] = useState(1); // Tracks which step the user is on
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleInputChange = (e, setInfo) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  const handleSubmitOrder = () => {
    // Normally here you would handle payment processing and order submission.
    console.log('Order Submitted', { shippingInfo, paymentInfo, cartItems });
    clearCart();
    onClose();
    alert('Your order has been placed successfully!');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-10"
      overlayClassName="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center"
    >
      <button className="text-black top-2 right-2" onClick={onClose}>✕</button>
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {/* Multi-Step Checkout Form */}
      {step === 1 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={shippingInfo.name}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingInfo.address}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingInfo.city}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={shippingInfo.state}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={shippingInfo.zip}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="flex justify-between">
            <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
              Cancel
            </button>
            <button onClick={handleNextStep} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Next: Payment Info
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={paymentInfo.cardNumber}
              onChange={(e) => handleInputChange(e, setPaymentInfo)}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="expiry"
              placeholder="Expiry Date (MM/YY)"
              value={paymentInfo.expiry}
              onChange={(e) => handleInputChange(e, setPaymentInfo)}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={paymentInfo.cvv}
              onChange={(e) => handleInputChange(e, setPaymentInfo)}
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="flex justify-between">
            <button onClick={handlePreviousStep} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
              Back to Shipping Info
            </button>
            <button onClick={handleNextStep} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Next: Review Order
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Review and Confirm</h3>
          <ul className="divide-y divide-gray-200 mb-6">
            {cartItems.map((item, index) => (
              <li key={index} className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm">${item.price} x {item.quantity}</p>
                </div>
                <p className="font-semibold">#{item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold mb-4">Total: #{totalPrice.toFixed(2)}</p>
          <div className="flex justify-between">
            <button onClick={handlePreviousStep} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
              Back to Payment Info
            </button>
            <button onClick={handleSubmitOrder} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Place Order
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CheckoutModal;
