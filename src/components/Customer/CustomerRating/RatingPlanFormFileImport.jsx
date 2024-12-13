import React, { useState } from 'react';
import Modal from '../../utility/Modal';
import FormInput from '../../utility/FormInput';
import Button from '../../utility/Button';
import CustomerRatingPlanUploadTemplateSettings from './CustomerRatingPlanUploadTemplateSettings';

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

  const handleImport = () => {
    onImport(formData);
    onClose();
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="w-full h-full p-4 bg-white">
        <div className="flex flex-col md:flex-row gap-4 ">
          {/* Left Side - Import File and Target */}
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-bold text-gray-700 mb-2">Import File and Target</h2>
            <div className="space-y-4">
              {/* Rates File */}
              <div>
                <label className="text-sm font-light text-gray-600 mb-1">Rates File</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full text-sm p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* New Plan */}
              <div >
                <label className="text-sm font-light text-gray-600 mb-1">New Plan</label>
                <input
                  type="text"
                  name="newPlan"
                  value={formData.newPlan}
                  onChange={handleInputChange}
                  className="w-full text-sm p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Currency */}
              <div>
                <label className="text-sm font-light text-gray-600 mb-1">Currency</label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="w-full text-sm p-2 border border-gray-300 rounded-md"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>

              {/* Import Template */}
              <div>
                <label className="text-sm font-light text-gray-600 mb-1">Import Template</label>
                <select
                  name="importTemplate"
                  value={formData.importTemplate}
                  onChange={handleInputChange}
                  className="w-full text-sm p-2 border border-gray-300 rounded-md"
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
            <h2 className="text-lg font-bold text-gray-700 mb-2">Template and Settings</h2>
            <div className="space-y-4">
              {/* Effective Date Source */}
              <div>
                <label className="text-sm font-light text-gray-600 mb-1">Effective Date Source</label>
                <select
                  name="effectiveDateSource"
                  value={formData.effectiveDateSource}
                  onChange={handleInputChange}
                  className="w-full text-sm p-2 border border-gray-300 rounded-md"
                >
                  <option value="1">Import File</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              {/* Default Effective Date */}
              <div className='flex flex-row gap-2'>
                <div>
                <label className="text-sm font-light text-gray-600 mb-1">Default Effective Date</label>
                <input
                  type="date"
                  name="defaultEffectiveDate"
                  value={formData.defaultEffectiveDate}
                  onChange={handleInputChange}
                  className="w-full text-sm p-2 border border-gray-300 rounded-md"
                />
                </div>
                {/* Default Effective Time */}
              <div>
                <label className="text-sm font-light text-gray-600 mb-1">Time(UTC+1)</label>
                <input
                  type="time"
                  name="defaultEffectiveTime"
                  value={formData.defaultEffectiveTime}
                  onChange={handleInputChange}
                  className="w-full text-sm p-2 border border-gray-300 rounded-md"
                />
              </div>
              </div>

              <div className="flex justify-center space-x-3 mt-6">
                <Button
                  text="Cancel"
                  onClick={onClose}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-1 text-sm rounded-md"
              />
               <Button
                 text="Import"
                 onClick={handleImport}
                 className="bg-green-500 hover:bg-green-600 text-white px-6 py-1 text-sm rounded-md"
               />
        </div>
            </div>
          </div>
        </div>
        <CustomerRatingPlanUploadTemplateSettings />
      </div>
      
    </Modal>
  );
};

export default RatingPlanFormFileImport;
