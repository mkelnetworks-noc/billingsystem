import React, { useState } from 'react';
import Button from '../../utility/Button';

const RatingPlansTable = ({ ratingPlans, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleDeleteClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedPlan) {
      onDelete(selectedPlan.id);
      setIsModalOpen(false);
    }
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-navyBlue text-white">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">(€/$)</th>
            <th className="px-4 py-2 text-left">Margin Enforcement</th>
            <th className="px-4 py-2 text-left">Template</th>
            <th className="px-4 py-2 text-left">Uncommit Changes</th>
            <th className="px-4 py-2 text-left">Last Date</th>
            <th className="px-4 py-2 text-left">Assigned</th>
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
              <td className="px-4 py-2">{plan.currency}</td>
              <td className="px-4 py-2">{plan.marginEnforcement}</td>
              <td className="px-4 py-2">{plan.template}</td>
              <td className="px-4 py-2">{plan.uncommitChanges}</td>
              <td className="px-4 py-2">{plan.lastDate}</td>
              <td className="px-4 py-2">{plan.assigned}</td>
              <td className="px-4 py-2">
                <Button
                  text="Delete"
                  onClick={() => handleDeleteClick(plan)}
                  className="bg-red-500 text-white hover:bg-red-600 py-1 text-sm"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-md font-semibold mb-4">
              Are you sure you want to delete this template?
            </h2>
            <div className="flex justify-center space-x-4">
              <Button
                text="Cancel"
                onClick={handleCancelDelete}
                className="bg-gray-500 text-white hover:bg-gray-600 py-2"
              />
              <Button
                text="Yes, Delete"
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white hover:bg-red-600 py-2"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingPlansTable;
