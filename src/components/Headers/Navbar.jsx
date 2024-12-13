// src/components/Navbar.jsx
import React, { useEffect } from 'react';
import { useUserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, login, logout } = useUserContext();

  useEffect(() => {
    login({ name: 'John Doe' }); // Placeholder user data
  }, []);

  return (
    <nav className="bg-navyBlue text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="flex space-x-4">
        {/* Main Menu Items */}
        {[
          'Home',
          'Careers',
          'Codes',
          'Rating', // <-- Rating stays in the same position
          'Routing',
          'Billing',
          'Reporting',
          'Diagnostics',
          'Alerts',
          'Admin',
          'On-Cloud',
          'Help',
        ].map((menu, idx) =>
          menu === 'Rating' ? (
            // Dropdown for Rating
            <div key={idx} className="relative group">
              <span className="cursor-pointer hover:text-skyBlue transition-all">
                Rating
              </span>
              <div className="absolute hidden group-hover:block bg-white text-navyBlue rounded-md shadow-lg w-60">
                {[
                 // { name: 'Customer Rating', path: '/customer-rating' },  //CustomerRatingPlans  customer-rating-plans
                 { name: 'Customer Rating', path: '/customer-rating-plans' },
                 { name: 'Customer Notification', path: '/customer-notification' },
                  { name: 'Customer Floor Price Rules', path: '/customer-floor-price-rules' },
                  { name: 'Customer Price Lookup', path: '/customer-price-lookup' },
                  { name: 'Customer Rating Plans', path: '/customer-rating-plans' },
                  { name: 'Supplier Price Lookup', path: '/supplier-price-lookup' },
                  { name: 'Supplier Code Processing', path: '/supplier-code-processing' },
                  { name: 'Period Exceptions', path: '/period-exceptions' },
                  { name: 'CDR Rerating', path: '/cdr-rerating' },
                  { name: 'Zone Capitalization', path: '/zone-capitalization' },
                ].map((submenu, idx) => (
                  <Link
                    key={idx}
                    to={submenu.path}
                    className="block px-4 py-2 hover:bg-skyBlue hover:text-white"
                  >
                    {submenu.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            // Other Menu Items
            <Link
              key={idx}
              to={`/${menu.toLowerCase()}`}
              className="hover:text-skyBlue transition-all"
            >
              {menu}
            </Link>
          )
        )}
      </div>

      {/* User Section */}
      <div className="flex items-center">
        <span className="mr-4">Welcome, {user?.name}</span>
        <button onClick={() => logout()} className="text-red-500">
          Logout
        </button>
        <img
          src="/path/to/profile-image.jpg"
          alt="User"
          className="w-8 h-8 rounded-full ml-4"
        />
      </div>
    </nav>
  );
};

export default Navbar;
