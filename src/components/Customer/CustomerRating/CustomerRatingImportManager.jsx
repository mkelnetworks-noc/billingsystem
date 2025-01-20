import React, { useState } from 'react';
import RatingPlanFormFileImport from './RatingPlanFormFileImport';
import RatingPlansTable from './RatingPlansTable';

const RatingPlanManager = () => {
  const [ratingPlans, setRatingPlans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImport = (newPlans) => {
    setRatingPlans((prev) => [...prev, ...newPlans]);
  };

  const handleDelete = (id) => {
    setRatingPlans((prev) => prev.filter((plan) => plan.id !== id));
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add Rating Plan
      </button>

      <RatingPlansTable ratingPlans={ratingPlans} onDelete={handleDelete} />

      {isModalOpen && (
        <RatingPlanFormFileImport onClose={() => setIsModalOpen(false)} onImport={handleImport} />
      )}
    </div>
  );
};

export default RatingPlanManager;
