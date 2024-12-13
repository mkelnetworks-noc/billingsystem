// src/components/Table.jsx
import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <table className="min-w-full bg-white rounded-lg shadow-md">
      <thead>
        <tr className="bg-navyBlue text-white">
          {columns.map((col, idx) => (
            <th key={idx} className="px-4 py-2 text-left">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr
            key={idx}
            className={`${idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
          >
            {Object.values(row).map((cell, cellIdx) => (
              <td key={cellIdx} className="px-4 py-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
