import React, { useState } from 'react';

const CustomerRatingPlanUploadTemplateSettings = () => {
  const [settingsData, setSettingsData] = useState({
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

  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    setSettingsData({ ...settingsData, [name]: value });
  };

  return (
    <div className="w-full mt-8 ">
        <h3 className="text-lg font-bold text-gray-700">Template Settings</h3>
      <div className="flex justify-between border-t border-gray-300">
        {/* Left Side: Template Settings */}
        <div className=" space-y-4">
          

          {/* Global Settings */}
          <div className="space-y-4 mt-4 w-1/3">
  <h4 className="font-semibold text-gray-600">1. Define Global Settings for Template</h4>

  {/* Default Time Class */}
  <div className="flex items-center space-x-4">
    <label className=" text-sm font-light text-gray-600 mb-1">Default Time Class</label>
    <select
      name="defaultTimeClass"
      value={settingsData.globalSettings.defaultTimeClass}
      onChange={handleSettingsChange}
      className=" text-sm p-2 border border-gray-300 rounded-md"
    >
      <option value="AnyDay">AnyDay</option>
    </select>
  </div>

  {/* Time Zone */}
  <div className="flex items-center space-x-4">
    <label className=" text-sm font-light text-gray-600 mb-1">Time Zone</label>
    <select
      name="timeZone"
      value={settingsData.globalSettings.timeZone}
      onChange={handleSettingsChange}
      className=" text-sm p-2 border border-gray-300 rounded-md"
    >
      <option value="UTC">UTC</option>
      <option value="UTC+1">UTC+1</option>
      <option value="UTC+2">UTC+2</option>
      {/* Add more time zones here */}
    </select>
  </div>

  {/* Period Exceptions */}
  <div className="flex items-center space-x-4">
    <label className=" text-sm font-light text-gray-600 mb-1">Period Exceptions</label>
    <select
      name="periodExceptions"
      value={settingsData.globalSettings.periodExceptions}
      onChange={handleSettingsChange}
      className=" text-sm p-2 border border-gray-300 rounded-md"
    >
      <option value="None">None</option>
      <option value="Custom">Custom</option>
      {/* Add more period exceptions */}
    </select>
  </div>

  {/* Allow Zero Charges */}
  <div className="flex items-center space-x-4">
    <label className=" text-sm font-light text-gray-600 mb-1">Allow Zero Charges</label>
    <select
      name="allowZeroCharges"
      value={settingsData.globalSettings.allowZeroCharges}
      onChange={handleSettingsChange}
      className=" text-sm p-2 border border-gray-300 rounded-md"
    >
      <option value="No">No</option>
      <option value="Yes">Yes</option>
    </select>
  </div>

  {/* Decimal Separator */}
  <div className="flex items-center space-x-4">
    <label className=" text-sm font-light text-gray-600 mb-1">Decimal Separator</label>
    <select
      name="decimalSeparator"
      value={settingsData.globalSettings.decimalSeparator}
      onChange={handleSettingsChange}
      className=" text-sm p-2 border border-gray-300 rounded-md"
    >
      <option value=".">.</option>
      <option value=",">,</option>
    </select>
  </div>

  {/* Normalize Zone */}
  <div className="flex items-center space-x-4">
    <label className=" text-sm font-light text-gray-600 mb-1">Normalize Zone</label>
    <select
      name="normalizeZone"
      value={settingsData.globalSettings.normalizeZone}
      onChange={handleSettingsChange}
      className="text-sm p-2 border border-gray-300 rounded-md"
    >
      <option value="No">No</option>
      <option value="Yes">Yes</option>
    </select>
  </div>
</div>


          {/* Workbook Settings */}
          <div className="space-y-3 mt-4">
            <h4 className="font-semibold text-gray-600">2. Select the Format of the Workbook You Want to Import</h4>

            {/* Content Worksheet */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Content Worksheet Name */}
    <div>
      <label className="text-sm font-light text-gray-600 mb-1">Content Worksheet Name</label>
      <input
        type="text"
        name="contentWorksheet"
        value={settingsData.workbookSettings.contentWorksheet}
        onChange={handleSettingsChange}
        className="w-full text-sm p-2 border border-gray-300 rounded-md"
      />
    </div>

    {/* Header Rows */}
    <div>
      <label className="text-sm font-light text-gray-600 mb-1">Header Rows</label>
      <input
        type="number"
        name="headerRows"
        value={settingsData.workbookSettings.headerRows}
        onChange={handleSettingsChange}
        className="w-full text-sm p-2 border border-gray-300 rounded-md"
      />
    </div>

    {/* Footer Rows */}
    <div>
      <label className="text-sm font-light text-gray-600 mb-1">Footer Rows</label>
      <input
        type="number"
        name="footerRows"
        value={settingsData.workbookSettings.footerRows}
        onChange={handleSettingsChange}
        className="w-full text-sm p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>
            {/* Allow Worksheet Code */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="allowWorksheetCode"
                checked={settingsData.workbookSettings.allowWorksheetCode}
                onChange={(e) => setSettingsData({ ...settingsData, workbookSettings: { ...settingsData.workbookSettings, allowWorksheetCode: e.target.checked } })}
                className="mr-2"
              />
              <label className="text-sm font-light text-gray-600 mb-1">Allow Worksheet Code</label>
            </div>
          </div>
        </div>

        {/* Right Side: Field and Options for Rate and Codes */}
        <div className="w-3/4 space-y-4">
  <h4 className="font-semibold text-gray-600">3. Define Field and Options for Rate and Codes</h4>

  {/* Rate 1 and Save Template Button in the same row */}
  <div className="flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <label className="text-sm font-light text-gray-600 mb-1">Rate 1</label>
      <select
        name="rate1"
        className="text-sm p-2 border border-gray-300 rounded-md"
      >
        <option value="Rate 1">Rate 1</option>
        {/* Add other options */}
      </select>
    </div>

    {/* Save Template Button */}
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
      Save Template
    </button>
  </div>

  {/* Column Header */}
  <div className="grid grid-cols-5 gap-4 mb-4">
    <div className="font-semibold text-gray-600">Column</div>
    <div className="font-semibold text-gray-600">Field</div>
    <div className="font-semibold text-gray-600">Import Options</div>
    <div className="font-semibold text-gray-600">Actions</div>
  </div>

  {/* Column Dropdowns */}
  <div className="grid grid-cols-5 gap-4">
    <div className="space-y-3">
      {['A', 'B', 'C', 'D'].map((column) => (
        <div key={column} className="flex items-center space-x-2">
          <select
            name={`column-${column}`}
            className="w-full text-sm p-2 border border-gray-300 rounded-md"
          >
            <option value="Zone code">A</option>
            <option value="Recurring Charge">B</option>
            <option value="Effective Date/Time">C</option>
            <option value="Select Field">C</option>
          </select>
        </div>
      ))}
    </div>

    {/* Field Section (Zone, Code, Effective Date/Time, Recurring Charge) */}
    {/* Field Section (Zone, Code, Effective Date/Time, Recurring Charge) */}
    <div className="space-y-3">
              {['Zone', 'Code', 'Effective Date/Time', 'Recurring Charge'].map((field) => (
                <div key={field} className="flex items-center space-x-2">
                  <input
                    type="text"
                    name={field}
                    defaultValue={`Default ${field}`}
                    className="w-full text-sm p-2 border border-gray-300 rounded-md"
                  />
                </div>
              ))}
            </div>

    {/* Import Options Section */}
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <label className="w-24 text-sm font-light text-gray-600 mb-1">Codes per Row</label>
        <select
          name="importOption"
          className="w-full text-sm p-2 border border-gray-300 rounded-md"
        >
          <option value="Single">Single</option>
          <option value="Multiple">Multiple</option>
        </select>
      </div>

      {/* Date/Time Format */}
      <div className="flex items-center space-x-2">
        <label className="w-24 text-sm font-light text-gray-600 mb-1">Date/Time Format</label>
        <input
          type="text"
          name="dateTimeFormat"
          value="MM/dd/yyyy"
          className="w-full text-sm p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Default Period */}
      <div className="flex items-center space-x-2">
        <label className="w-24 text-sm font-light text-gray-600 mb-1">Default Period</label>
        <input
          type="number"
          name="defaultPeriod"
          value="1"
          className="w-full text-sm p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Rate Definition */}
      <div className="flex items-center space-x-2">
        <label className="w-24 text-sm font-light text-gray-600 mb-1">Rate Definition</label>
        <input
          type="number"
          name="rateDefinition"
          value="60"
          className="w-full text-sm p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>

    {/* Action Section (Delete button) */}
    <div className="flex justify-start">
      <button className="px-4 py-2 bg-red-500 text-white rounded-md">
        Delete
      </button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default CustomerRatingPlanUploadTemplateSettings;
