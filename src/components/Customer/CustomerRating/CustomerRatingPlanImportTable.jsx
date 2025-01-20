// src/customerRating/CustomerRatingPlanImportTable.jsx
import React from 'react';

const CustomerRatingPlanImportTable = ({ data }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          {Object.keys(data[0] || {}).map((key) => (
            <th key={key} className="border border-gray-300 px-4 py-2 text-left">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="hover:bg-gray-50">
            {Object.values(row).map((value, i) => (
              <td key={i} className="border border-gray-300 px-4 py-2">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerRatingPlanImportTable;
