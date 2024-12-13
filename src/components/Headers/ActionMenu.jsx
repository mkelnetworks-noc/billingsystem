// src/components/ActionMenu.jsx
import React, { useState } from 'react';

const ActionMenu = ({ actionMenuItems = [] }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
        className="text-gray-600 hover:text-navyBlue font-medium transition flex items-center"
      >
        Actions
        <span className="ml-2">▼</span>
      </button>

      {isDropdownOpen && (
        <ul
          className="absolute right-0 w-56 bg-white border border-gray-200 shadow-lg rounded-md z-50"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          {actionMenuItems.map((item, idx) => (
            <li
              key={idx}
              className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-navyBlue cursor-pointer"
            >
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActionMenu;
