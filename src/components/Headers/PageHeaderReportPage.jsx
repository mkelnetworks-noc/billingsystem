// src/components/Headers/PageHeader.jsx
import React from 'react';
// import ActionMenu from './ActionMenu';
import { Link, useLocation } from 'react-router-dom'
import ActionMenuReportPage from './ActionMenuReportPage';

const PageHeaderReportPage = ({ title, breadcrumb, menuItems = [], actionItems = [] }) => {
  const location = useLocation();// Get the current URl path
  
  return (
    <div className="flex flex-col justify-between mb-6 w-full">
      <div>
        <h1 className="text-2xl font-semibold text-navyBlue">{title}</h1>
        {breadcrumb && <p className="text-sm text-gray-500">{breadcrumb}</p>}
      </div>
      <div className='flex flex-row justify-between'>
      <div className="flex space-x-4">
        {/* Display menu items */}
        {menuItems.length > 0 && menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link || '#'}
    
            className="text-gray-600 hover:text-navyBlue font-medium transition"
            // className="text-gray-600 hover:text-navyBlue font-medium transition"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Action menu(Dropdown) on the right */}
      {actionItems.length > 0 && <ActionMenuReportPage actionMenuItems={actionItems} />}
      </div>
    </div>
  );
};

export default PageHeaderReportPage;
