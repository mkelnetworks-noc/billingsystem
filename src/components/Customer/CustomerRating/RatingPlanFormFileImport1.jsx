// src/customerRating/components/RatingPlanFormFileImport.jsx
import React, { useState } from 'react';
import Modal from '../../utility/Modal';
import FormInput from '../../utility/FormInput';
import Button from '../../utility/Button';

const RatingPlanFormFileImport = ({ onClose, onImport }) => {
  const [formData, setFormData] = useState({
    ratesFile: null,
    newPlan: '',
    currency: 'USD',
    importTemplate: 'Rating plan',
    effectiveDateSource: '1',
    defaultEffectiveDate: '',
    defaultEffectiveTime: '',
    timeZoneOffset: 'UTC +1',
    globalSettings: {
      defaultTimeClass: 'AnyDay',
      timeZone: 'UTC',
      periodExceptions: 'None',
      allowZeroCharges: 'No',
      decimalSeparator: '.',
      normalizeZone: 'No',
    },
    workbookSettings: {
      contentWorksheet: 'Rate',
      headerRows: 1,
      footerRows: 0,
      allowWorksheetCode: false,
    },
    fieldOptions: [
      { column: 'A', field: 'Zone code', importOption: 'Single', defaultPeriod: '1', isDefault: false },
      { column: 'B', field: 'Recurring Charge', importOption: 'Single', defaultPeriod: '1', isDefault: false },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, ratesFile: e.target.files[0] });
  };

  const handleGlobalSettingsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      globalSettings: {
        ...formData.globalSettings,
        [name]: value,
      },
    });
  };

  const handleImport = () => {
    onImport(formData);
    onClose();
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="w-full h-full p-6 bg-white">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side - Import File and Target */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-navyBlue mb-4">Import File and Target</h2>
            <div className="space-y-6">
              {/* Rates File */}
              <FormInput
                label="Rates File"
                type="file"
                onChange={handleFileChange}
              />

              {/* New Plan */}
              <FormInput
                label="New Plan"
                name="newPlan"
                value={formData.newPlan}
                onChange={handleInputChange}
              />

              {/* Currency */}
              <div>
                <label className="block font-semibold text-navyBlue mb-2">Currency</label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>

              {/* Import Template */}
              <div>
                <label className="block font-semibold text-navyBlue mb-2">Import Template</label>
                <select
                  name="importTemplate"
                  value={formData.importTemplate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                >
                  <option value="Rating plan">Rating plan</option>
                  <option value="Mkell rate">Mkell rate</option>
                  <option value="Glo rate">Glo rate</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Side - Template and Settings */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-navyBlue mb-4">Template and Settings</h2>
            <div className="space-y-6">
              {/* Effective Date Source */}
              <div>
                <label className="block font-semibold text-navyBlue mb-2">Effective Date Source</label>
                <select
                  name="effectiveDateSource"
                  value={formData.effectiveDateSource}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              {/* Default Effective Date */}
              <FormInput
                label="Default Effective Date"
                name="defaultEffectiveDate"
                type="date"
                value={formData.defaultEffectiveDate}
                onChange={handleInputChange}
              />

              {/* Default Effective Time */}
              <FormInput
                label="Default Effective Time"
                name="defaultEffectiveTime"
                type="time"
                value={formData.defaultEffectiveTime}
                onChange={handleInputChange}
              />

              {/* Time Zone Offset */}
              <FormInput
                label="Time Zone Offset"
                name="timeZoneOffset"
                value={formData.timeZoneOffset}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <Button
            text="Cancel"
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2"
          />
          <Button
            text="Import"
            onClick={handleImport}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2"
          />
        </div>
      </div>
    </Modal>
  );
};

export default RatingPlanFormFileImport;
