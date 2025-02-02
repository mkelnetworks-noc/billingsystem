// src/components/Headers/PageHeader.jsx
import React from 'react';
import ActionMenu from './ActionMenu';
import { Link, useLocation } from 'react-router-dom'

const PageHeader = ({ title, breadcrumb, menuItems = [], actionItems = [] }) => {
  const location = useLocation();// Get the current URl path
  
  return (
    <div className="flex flex-col justify-between mb-6 w-full">
      <div>
        <h1 className="text-2xl text-navyBlue mb-2">{title}</h1>
        {breadcrumb && <p className="text-sm text-gray-600 hover:text-skyBlue">{breadcrumb}</p>}
      </div>
      <div className='flex flex-row justify-between'>
      <div className="flex space-x-4">
        {/* Display menu items */}
        {menuItems.length > 0 && menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link || '#'}
    
            className="text-skyBlue hover:text-navyBlue transition"
          >
            {item.label}
          </a>
        ))}
      </div>
      {actionItems.length > 0 && <ActionMenu actionMenuItems={actionItems} />}
      </div>
    </div>
  );
};

export default PageHeader;
