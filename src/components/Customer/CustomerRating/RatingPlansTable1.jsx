// src/customerRating/components/RatingPlansTable.jsx
import React from 'react';
import Button from '../../utility/Button';

const RatingPlansTable = ({ ratingPlans, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white rounded-lg shadow-md">
      <thead>
        <tr className="bg-navyBlue text-white">
          <th className="px-4 py-2 text-left">Plan Name</th>
          <th className="px-4 py-2 text-left">Description</th>
          <th className="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {ratingPlans.map((plan, idx) => (
          <tr
            key={idx}
            className={`${idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
          >
            <td className="px-4 py-2">{plan.name}</td>
            <td className="px-4 py-2">{plan.description}</td>
            <td className="px-4 py-2">
              <div className="flex space-x-2">
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => onEdit(plan)}
                >
                  Edit
                </Button>
                <Button
                  className="bg-red-500 hover:bg-red-600"
                  onClick={() => onDelete(plan.id)}
                >
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RatingPlansTable;
