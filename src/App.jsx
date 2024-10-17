// App.jsx
import React from 'react';
import AppRoutes from './routes/index'; // Import your routes
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom'; // Wrap the routes with BrowserRouter here

const App = () => {
  return (
    <BrowserRouter> {/* Wrap everything here */}
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;



// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import AppRoutes from './routes/index';
// import Navbar from './components/Navbar';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <AppRoutes />
//     </BrowserRouter>
//   );
// };

// export default App;
