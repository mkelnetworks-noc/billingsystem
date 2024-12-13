// src/customerRating/components/RatingPlansForm.jsx
import React from 'react';
import FormInput from '../../utility/FormInput';
import Button from '../../utility/Button';

const RatingPlansForm = ({ formData, onChange, onSave, onCancel }) => {
  return (
    <div>
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
      <div className="flex justify-end space-x-2 mt-4">
        {/* <Button
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2"
          style={{ color: 'white' }}
        >
          Cancel
        </Button>
        <Button
          onClick={onSave}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2"
          style={{ color: 'white' }}
        >
          Save
        </Button> */}
        <Button 
          text="Cancel" 
          onClick={onCancel} 
          className="bg-gray-500 hover:bg-gray-600 text-white text-sm px-4 py-2" 
        />
       <Button 
          text="Add" 
          onClick={onSave} 
          className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2" 
        />
      </div>
    </div>
  );
};

export default RatingPlansForm;
