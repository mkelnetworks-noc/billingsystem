import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <div>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-navyBlue text-white">
            {columns.map((col, index) => (
              <th key={index} className="px-4 py-2 text-left">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              {columns.map((col, index) => (
                <td key={index} className="px-4 py-2">
                  {item[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;