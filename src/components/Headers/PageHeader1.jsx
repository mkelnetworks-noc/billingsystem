// src/components/PageHeader.jsx
import React from 'react';

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-semibold text-navyBlue">{title}</h1>
        {breadcrumb && <p className="text-sm text-gray-500">{breadcrumb}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
