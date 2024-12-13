import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';

const Navbar = () => {
  const { user, login, logout } = useUserContext();
  const [isRatingMenuOpen, setRatingMenuOpen] = useState(false);

  useEffect(() => {
    login({ name: 'John Doe' });
  }, [login]);

  const toggleRatingMenu = () => setRatingMenuOpen(!isRatingMenuOpen);

  return (
    <nav className="bg-navyBlue text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Main menu */}
      <div className="flex space-x-4 relative">
        {[
          'Home',
          'Careers',
          'Codes',
          { name: 'Rating', hasSubMenu: true },
          'Routing',
          'Billing',
          'Reporting',
          'Diagnostics',
          'Alerts',
          'Admin',
          'On-Cloud',
          'Help',
        ].map((menu, idx) =>
          typeof menu === 'string' ? (
            <a
              key={idx}
              href={`#${menu.toLowerCase()}`}
              className="hover:text-skyBlue transition-all"
            >
              {menu}
            </a>
          ) : (
            // Dropdown for Rating menu
            <div key={idx} className="relative group">
              <button
                onClick={toggleRatingMenu}
                className="hover:text-skyBlue transition-all"
              >
                {menu.name}
              </button>
              {isRatingMenuOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white text-navyBlue shadow-lg rounded-lg z-10"
                  onMouseLeave={() => setRatingMenuOpen(false)}
                >
                  <ul className="flex flex-col">
                    {[
                      'Customer Rating',
                      'Customer Notification',
                      'Customer Floor Price Rules',
                      'Customer Price Lookup',
                      'Customer Rating Plans',
                      'Supplier Price Lookup',
                      'Supplier Code Processing',
                      'Period Exceptions',
                      'CDR Rerating',
                      'Zone Capitalization',
                    ].map((submenu, subIdx) => (
                      <li key={subIdx} className="hover:bg-skyBlue hover:text-white px-4 py-2">
                        <a href={`#${submenu.toLowerCase().replace(/\s+/g, '-')}`}>
                          {submenu}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        )}
      </div>

      {/* User Section */}
      <div className="flex items-center">
        <span className="mr-4">Welcome, {user?.name}</span>
        <button
          onClick={() => logout()}
          className="text-red-500 mr-4 hover:text-red-700 transition-all"
        >
          Logout
        </button>
        <img
          src="/path/to/profile-image.jpg"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
