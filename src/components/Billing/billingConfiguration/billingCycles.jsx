import React, { useEffect, useState } from 'react';
import Table from '../../../utils/table'
import Navbar from '../../Headers/Navbar';
import ActionMenu from '../../Headers/ActionMenu'

const BillingCycles = () => {
  const [billingData, setBillingData] = useState([]);

  useEffect(() => {
    fetch('/data/billingCycles.json')
      .then(response => response.json())
      .then(data => setBillingData(data))
      .catch(error => console.error('Error fetching billing data:', error));
  }, []);

  const columns = [
    { label: 'Billing Cycle', key: 'billingCycle' },
    { label: 'Cycle', key: 'cycle' },
    { label: 'First Invoice', key: 'firstInvoice' },
    { label: 'Scheduling', key: 'scheduling' }
  ];

  return (
    <>
      {/* <ActionMenu
        actionItems={[
          { label: 'Setup Customer Add Billing Cycles', link: '' },
          { label: 'Setup Supplier', link: '' }
        ]}
      /> */}
      <Table columns={columns} data={billingData} />
    </>
  );
};

export default BillingCycles;
