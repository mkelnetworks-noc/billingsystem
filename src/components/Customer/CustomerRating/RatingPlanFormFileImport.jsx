import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../utility/Modal';
import Button from '../../utility/Button';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
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

  // Handle form field updates
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, ratesFile: file });
    processFile(file);
  };

  // Process uploaded file (CSV or Excel)
  const processFile = (file) => {
    const fileType = file.name.split('.').pop().toLowerCase();

    if (fileType === 'csv') {
      // Parse CSV file
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          if (typeof onImport === 'function') {
            onImport(result.data);
          }
        },
      });
    } else if (fileType === 'xlsx' || fileType === 'xls') {
      // Parse Excel file
      const reader = new FileReader();
      reader.onload = (event) => {
        const workbook = XLSX.read(event.target.result, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);
        if (typeof onImport === 'function') {
          onImport(data);
        }
      };
      reader.readAsBinaryString(file);
    } else {
      alert('Unsupported file format. Please upload a CSV or Excel file.');
    }
  };

  // Handle import and close modal
  const handleImport = () => {
    if (!formData.ratesFile) {
      alert('Please upload a file before importing.');
      return;
    }
    if (typeof onImport === 'function') {
      onImport(formData.ratesFile); // Send file or data to parent
    } else {
      console.error('onImport is not a function');
    }
    onClose();
  };

  return (
    // <Modal isOpen={true} onClose={onClose}>
      <div className="w-full h-full p-4 bg-white">
        <div className="flex flex-col md:flex-row gap-4">
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
              <div>
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
            </div>
          </div>

          {/* Right Side - Settings */}
          <div className="w-full md:w-1/2">
            <h2 className="text-lg font-bold text-gray-700 mb-2">Template and Settings</h2>
            <div className="space-y-4">
              {/* Effective Date */}
              <div className="flex flex-row gap-2">
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
                <div>
                  <label className="text-sm font-light text-gray-600 mb-1">Time</label>
                  <input
                    type="time"
                    name="defaultEffectiveTime"
                    value={formData.defaultEffectiveTime}
                    onChange={handleInputChange}
                    className="w-full text-sm p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 mt-6">
              <Button text="Cancel" onClick={onClose} className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-1 text-sm rounded-md" />
              <Button text="Import" onClick={handleImport} className="bg-green-500 hover:bg-green-600 text-white px-6 py-1 text-sm rounded-md" />
            </div>
          </div>
        </div>

        {/* Additional Settings Component */}
        <CustomerRatingPlanUploadTemplateSettings />
      </div>
    // </Modal>
  );
};

// PropTypes for validation
RatingPlanFormFileImport.propTypes = {
  onClose: PropTypes.func.isRequired,
  onImport: PropTypes.func.isRequired,
};

// Default props
RatingPlanFormFileImport.defaultProps = {
  onClose: () => console.warn('onClose is not defined'),
  onImport: (data) => console.log('Default onImport called with:', data),
};

export default RatingPlanFormFileImport;
