// src/customerRating/components/RatingPlansForm.jsx
import React from 'react';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

const RatingPlansForm = ({ formData, onChange, onSave, onCancel }) => {
  return (
    <div>
      <FormInput
        label="Plan Name"
        name="planName"
        value={formData.planName}
        onChange={onChange}
      />
      <FormInput
        label="Description"
        name="description"
        value={formData.description}
        onChange={onChange}
      />
      <div className="flex justify-end space-x-2">
        <Button onClick={onCancel} className="bg-gray-500 hover:bg-gray-600">
          Cancel
        </Button>
        <Button onClick={onSave}>Save</Button>
      </div>
    </div>
  );
};

export default RatingPlansForm;
