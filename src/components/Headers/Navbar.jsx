import React from 'react';
import { useUserContext } from '../../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clears user state
    navigate('/');
  };

  return (
    <nav className="bg-navyBlue text-white px-6 py-4 flex justify-between items-center shadow-md relative z-50">
      <div className="flex space-x-4">
        {/* Main Menu Items */}
        {[
          'Home',
          'Careers',
          'Codes',
          'Rating',
          'Routing',
          'Billing', // <-- Dropdown for Billing
          'Reporting', // <-- Dropdown for Reporting
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
          ) : menu === 'Billing' ? (
            // Dropdown for Billing
            <div key={idx} className="relative group">
              <span className="cursor-pointer hover:text-skyBlue transition-all">
                Billing
              </span>
              <div className="absolute hidden group-hover:block bg-white text-navyBlue rounded-md shadow-lg w-60">
                {[ 
                  { name: 'Customer Invoicing', path: '/customer-invoicing' },
                  { name: 'Supplier Invoicing', path: '/supplier-invoicing' },
                  { name: 'Billing Reports', path: '/billing-reports' },
                  { name: 'Payments and Transactions', path: '/payments-transactions' },
                  { name: 'Statement of Account', path: '/statement-of-account' },
                  { name: 'Dispute Management', path: '/dispute-management' },
                  { name: 'Invoice Netting', path: '/invoice-netting' },
                  { name: 'Billing Auditing', path: '/billing-auditing' },
                  { name: 'Billing Configuration', path: '/billing-configuration' },
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
          ) : menu === 'Reporting' ? (
            // Dropdown for Reporting
            <div key={idx} className="relative group">
              <span className="cursor-pointer hover:text-skyBlue transition-all">
                Reporting
              </span>
              <div className="absolute hidden group-hover:block bg-white text-navyBlue rounded-md shadow-lg w-60">
                {[ 
                  { name: 'Call Detail Records', path: '/call-detail-records' },
                  { name: 'Monitoring', path: '/monitoring' },
                  { name: 'Dashboards', path: '/dashboards' },
                  { name: 'Reports', path: '/reports' },
                  { name: 'Report Scheduling', path: '/report-scheduling' },
                  { name: 'Alarm Manager', path: '/alarm-manager' },
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
        <button onClick={handleLogout} className="text-red-500">
          Logout
        </button>
        <img
          src="images/profile1.avif"
          alt="User"
          className="w-8 h-8 rounded-full ml-4"
        />
      </div>
    </nav>
  );
};

export default Navbar;
