// In ModalAuth.js
const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      {children}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        &#x2715;
      </button>
    </div>
  </div>
);

export default Modal;




// import React from 'react';

// const Modal = ({ title, children, onClose }) => (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//     <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
//       <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
//       {children}
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//       >
//         &#x2715;
//       </button>
//     </div>
//   </div>
// );