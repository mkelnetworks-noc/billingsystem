import React from 'react';

const SignUpModal = ({ isOpen, onClose, onSignIn }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <button className="text-black top-2 right-2" onClick={onClose}>✕</button>
        <h2 className="text-2xl mb-4 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Confirm your password"
            />
          </div>
          <button className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">Sign Up</button>
          {/* <p className="text-center mt-4">
            Already have an account? <button onClick={onClose} className="text-blue-500">Log in</button>
          </p> */}
          <p className="text-center mt-4 text-black">
            Already have an account? <button onClick={onSignIn} className="text-blue-500">Log in</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
