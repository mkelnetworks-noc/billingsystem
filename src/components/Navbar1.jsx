import React, { useEffect } from 'react';
import { useUserContext } from '../context/UserContext';

const Navbar = () => {
  const { user, login, logout } = useUserContext();

  useEffect(() => {
    login({ name: 'John Doe' });
  }, [login]);

  return (
    <nav className="bg-navyBlue text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="flex space-x-4">
        {[
          'Home',
          'Careers',
          'Codes',
          'Rating',
          'Routing',
          'Billing',
          'Reporting',
          'Diagnostics',
          'Alerts',
          'Admin',
          'On-Cloud',
          'Help',
        ].map((menu, idx) => (
          <a
            key={idx}
            href={`#${menu.toLowerCase()}`}
            className="hover:text-skyBlue transition-all"
          >
            {menu}
          </a>
        ))}
      </div>
      <div className="flex items-center">
        <span className="mr-4">Welcome, {user?.name}</span>
        <button onClick={() => logout()} className=" text-red-500">Logout</button>
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
