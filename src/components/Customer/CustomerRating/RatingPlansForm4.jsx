// src/customerRating/components/RatingPlansForm.jsx
import React from 'react';
import FormInput from '../../utility/FormInput'
import Button from '../../utility/Button';

const RatingPlansForm = ({ formData, onChange, onSave, onCancel }) => {
  return (
    <div className="p-4">
      {/* Form Fields */}
      <FormInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={onChange}
      />

      <FormInput
        label="Currency (€/$)"
        name="currency"
        value={formData.currency}
        onChange={onChange}
      />

      <FormInput
        label="Margin Enforcement"
        name="marginEnforcement"
        value={formData.marginEnforcement}
        onChange={onChange}
      />

      <FormInput
        label="Template"
        name="template"
        value={formData.template}
        onChange={onChange}
      />

      <FormInput
        label="Uncommit Changes"
        name="uncommitChanges"
        value={formData.uncommitChanges}
        onChange={onChange}
      />

      <FormInput
        label="Last Date"
        name="lastDate"
        value={formData.lastDate}
        onChange={onChange}
      />

      <FormInput
        label="Assigned"
        name="assigned"
        value={formData.assigned}
        onChange={onChange}
      />

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-6">
        <Button
          text="Cancel"
          onClick={onCancel}
          className="bg-gray-500 text-white hover:bg-gray-600 px-4 py-2 text-sm"
        />

        <Button
          text="Save"
          onClick={onSave}
          className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 text-sm"
        />
      </div>
    </div>
  );
};

export default RatingPlansForm;
