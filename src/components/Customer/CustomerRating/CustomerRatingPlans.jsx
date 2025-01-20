// src/customerRating/CustomerRatingPlans.jsx
import React, { useState } from 'react';
import PageHeader from '../../Headers/PageHeader';
import Card from '../../utility/Card';
import RatingPlansTable from './RatingPlansTable';
import RatingPlansForm from './RatingPlansForm';
import RatingPlanFormFileImport from './RatingPlanFormFileImport';
import CustomerRatingPlanImportTable from './CustomerRatingPlanImportTable';
import Modal from '../../utility/Modal';
import Button from '../../utility/Button';

const CustomerRatingPlans = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFileImportModalOpen, setFileImportModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    currency: '',
    marginEnforcement: '',
    template: '',
    uncommitChanges: '',
    lastDate: '',
    assigned: '',
  });
  const [ratingPlans, setRatingPlans] = useState([
    {
      id: 1,
      name: '42COM Rates',
      currency: 'USD',
      marginEnforcement: 'Enabled',
      template: 'MTN only',
      uncommitChanges: '--',
      lastDate: '2023-12-01',
      assigned: 'yes',
    },
    {
      id: 2,
      name: '9EONS',
      currency: 'USD',
      marginEnforcement: 'Disabled',
      template: 'Rating Plan',
      uncommitChanges: '--',
      lastDate: '2023-12-15',
      assigned: 'yes',
    },
  ]);

  const [importedTableData, setImportedTableData] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddPlan = () => {
    // Add new plan
    setRatingPlans([
      ...ratingPlans,
      { id: Date.now(), ...formData },
    ]);
    resetForm();
  };

  const handleFileImport = (importData) => {
    const tableData = [
      {
        Zone: 'Z001',
        Code: 'C001',
        'Recurring Cahrge': '10.50',
        'Effective Date': '2024-06-01',
      },
      {
        Zone: 'Z002',
        Code: 'C002',
        'Recurring Date': '15.75',
        'Effective Date': '2024-06-05',
      },
    ];
    setImportedTableData(tableData);
    setFileImportModalOpen(false)
  }

  // const handleFileImport = (importData) => {
  //   // Simulating adding imported data to the rating plans
  //   setRatingPlans([
  //     ...ratingPlans,
  //     {
  //       id: Date.now(),
  //       name: importData.newPlan,
  //       currency: importData.currency,
  //       marginEnforcement: 'N/A',
  //       template: importData.importTemplate,
  //       uncommitChanges: '--',
  //       lastDate: new Date().toISOString().split('T')[0], // Example date
  //       assigned: 'no',
  //     },
  //   ]);
  //   setFileImportModalOpen(false);
  // };

  const resetForm = () => {
    setFormData({
      name: '',
      currency: '',
      marginEnforcement: '',
      template: '',
      uncommitChanges: '',
      lastDate: '',
      assigned: '',
    });
    setModalOpen(false);
  };

  const handleDeletePlan = (id) => {
    setRatingPlans(ratingPlans.filter((plan) => plan.id !== id));
  };

  return (
    <div className="p-6">
      <PageHeader
        title="Customer Rating Plans"
        menuItems={[
          { label: 'Rating Plans', link: '/customer-rating-plans' },
          { label: 'Notifications', link: '/notifications' },
          { label: 'Floor Price Rules', link: '/floor-price-rules' },
          { label: 'Multiplan Import', link: '/multiplan-import' },
          { label: 'Business Rules', link: '/business-rules' },
        ]}
        actionItems={[
          { label: 'Add Plan', link: '/add-plan' },
          { label: 'Copy Plan', link: '/copy-plan' },
          { label: 'Export Rates', link: '/export-rates' },
          // {
          //   label: 'Import New Rating Plan',
          //   onClick: () => setFileImportModalOpen(true), 
          // },
          {
            label: 'Import New Rating Plan', link: '/import-new-rating-plan'
          },
          {
            label: 'Import Rates into Multiple Plans',
            link: '/import-rates-multiple-plans',
          },
          { label: 'Replace Plan', link: '/replace-plan' },
          { label: 'Usage Check', link: '/usage-check' },
          { label: 'Restore Plans', link: '/restore-plans' },
          { label: 'Delete Old Versions', link: '/delete-old-versions' },
          { label: 'Delete Import Templates', link: '/delete-import-templates' },
          { label: 'Delete Export Templates', link: '/delete-export-templates' },
        ]}
      />

      <Card>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-navyBlue">
            Existing Rating Plans
          </h2>
          
          <Button 
            text="Add New Rating Plan" 
            onClick={() => setModalOpen(true)} 
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm" 
          />
        </div>
        <RatingPlansTable
          ratingPlans={ratingPlans}
          onDelete={handleDeletePlan}
        />
      </Card>

      {/* Add New Rating Plan Modal */}
      <Modal isOpen={isModalOpen} onClose={resetForm}>
        <div className="w-full max-w-4xl mx-auto h-[100%] overflow-y-scroll">
          <h3 className="text-xl font-semibold mb-4">Add New Rating Plan</h3>
          <RatingPlansForm
            formData={formData}
            onChange={handleInputChange}
            onSave={handleAddPlan}
            onCancel={resetForm}
          />
        </div>
      </Modal>

      {/* Import New Rating Plan Modal */}
       <Modal isOpen={isFileImportModalOpen} onClose={() => setFileImportModalOpen(false)}>
        <div className="w-full h-full p-6 bg-white overflow-y-scroll">
          <h3 className="text-2xl font-semibold mb-4">Import New Rating Plan</h3>
          <RatingPlanFormFileImport
            onClose={() => setFileImportModalOpen(false)}
            onImport={handleFileImport}
          />
        </div>
      </Modal> 

      {/* Customer Rating plan Import Table */}
      {importedTableData.length > 0 && (
        <Card>
          <h3 className='text-xl font-semibold mb-4'>Imported Table Data</h3>
          <CustomerRatingPlanImportTable data={importedTableData} />
        </Card>
      )}
    </div>
  );
};

export default CustomerRatingPlans;
