// src/customerRating/CustomerRatingPlans.jsx
import React, { useState } from 'react';
import PageHeader from '../../Headers/PageHeader';
import Card from '../../utility/Card';
import RatingPlansTable from './RatingPlansTable'
import RatingPlansForm from './RatingPlansForm'
import Modal from '../../utility/Modal';
import Button from '../../utility/Button';

const CustomerRatingPlans = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ planName: '', description: '' });
  const [ratingPlans, setRatingPlans] = useState([
    { id: 1, name: 'Basic Plan', description: 'Basic customer rating plan' },
    { id: 2, name: 'Premium Plan', description: 'Premium customer rating plan' },
  ]);

  // const menuItems = [
  //   { label: 'Rating Plans', link: '#'},
  //   { label: 'Notifications', link: '#'},
  //   { label: 'Floor Price Rules', link: '#' },
  //   { label: 'Multiplan Import', link: '#' },
  //   { label: 'Business Rules', link: '#'},
  // ];


  const menuItems = [
    // { label: 'Rating Plans', link: '/rating-plans'},
    { label: 'Rating Plans', link: '/customer-rating-plans'},
    { label: 'Notifications', link: '/notifications'},
    { label: 'Floor Price Rules', link: '/floor-price-rules' },
    { label: 'Multiplan Import', link: '/multiplan-import' },
    { label: 'Business Rules', link: '/business-rules'},
  ];

  const actionItems = [
    { label: 'Add Plan', link: '/add-plan' },
    { label: 'Copy Plan', link: '/copy-plan' },
    { label: 'Export Rates', link: '/export-rates' },
    { label: 'Import New Rating Plan', link: '/import-new-rating-plan' },
    { label: 'Import Rates into Multiple Plans', link: '/import-rates-multiple-plans' },
    { label: 'Replace Plan', link: '/replace-plan' },
    { label: 'Usage Check', link: '/usage-check' },
    { label: 'Restore Plans', link: '/restore-plans' },
    { label: 'Delete Old Versions', link: '/delete-old-versions' },
    { label: 'Delete Import Templates', link: '/delete-import-templates' },
    { label: 'Delete Export Templates', link: '/delete-export-templates' },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddPlan = () => {
    setRatingPlans([
      ...ratingPlans,
      { id: Date.now(), name: formData.planName, description: formData.description },
    ]);
    setFormData({ planName: '', description: '' });
    setModalOpen(false);
  };

  const handleDeletePlan = (id) => {
    setRatingPlans(ratingPlans.filter((plan) => plan.id !== id));
  };

  return (
    <div className="p-6">
      <PageHeader
        title="Customer Rating Plans"
        menuItems={menuItems}
        actionItems={actionItems}
        /* breadcrumb="Dashboard / Rating / Customer Rating Plans" */
      />

      <Card>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-navyBlue">
            Existing Rating Plans
          </h2>
          <Button onClick={() => setModalOpen(true)}>Add New Plan</Button>
        </div>
        <RatingPlansTable
          ratingPlans={ratingPlans}
          onEdit={(plan) => {
            setFormData({ planName: plan.name, description: plan.description });
            setModalOpen(true);
          }}
          onDelete={handleDeletePlan}
        />
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h3 className="text-xl font-semibold mb-4">
          {formData.planName ? 'Edit Rating Plan' : 'Add New Rating Plan'}
        </h3>
        <RatingPlansForm
          formData={formData}
          onChange={handleInputChange}
          onSave={handleAddPlan}
          onCancel={() => setModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default CustomerRatingPlans;
