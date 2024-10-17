import React from 'react'; // Make sure React is imported
import ReactDOM from 'react-dom/client'; // Import ReactDOM
import { AuthProvider } from './context/AuthContext';
/* import { CartContext } from './context/CartContext'; */
import { CartProvider } from './context/CartContext';
import App from './App'; // Ensure you import your App component
import './index.css'; // Import your CSS file if needed
/* import { CartProvider } from './context/CartContext1'; */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
);




/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) */
