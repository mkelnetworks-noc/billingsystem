import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PageHeader = ({ title, breadcrumb, menuItems = [], actionItems = [] }) => {
  const location = useLocation(); 

  return (
    <div className="flex flex-col justify-between mb-6 w-full">
      <div>
        <h1 className="text-2xl text-navyBlue mb-2">{title}</h1>
        {breadcrumb && <p className="text-sm text-gray-600 hover:text-skyBlue">{breadcrumb}</p>}
      </div>

      <div className="flex flex-row justify-between items-center">
        {/* Menu Items */}
        <div className="flex space-x-4">
          {menuItems.map((item, idx) => (
            <a key={idx} href={item.link || '#'} className="text-skyBlue hover:text-navyBlue transition">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex space-x-4">
          {actionItems.map((action, idx) =>
            action.onClick ? (
              <button
                key={idx}
                onClick={action.onClick}
                className={`px-4 py-2 rounded-lg transition ${
                  action.label === 'Setup Customer'
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {action.label}
              </button>
            ) : (
              <Link key={idx} to={action.link || '#'} className="text-skyBlue hover:text-navyBlue transition">
                {action.label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
