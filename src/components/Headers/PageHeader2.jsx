// src/components/PageHeader.jsx
import React from 'react';

const PageHeader = ({ title, breadcrumb, menuItems = [] }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-semibold text-navyBlue">{title}</h1>
        {breadcrumb && <p className="text-sm text-gray-500">{breadcrumb}</p>}
      </div>
      {menuItems.length > 0 && (
        <div className="flex space-x-4">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link || '#'}
              className="text-gray-600 hover:text-navyBlue font-medium transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageHeader;
