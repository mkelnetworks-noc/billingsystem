import React, { useEffect, useState } from 'react';
// import Table from '../../../utils/table'
import Table from '../../../../utils/table'
import Navbar from '../../../Headers/Navbar';
import ActionMenu from '../../../Headers/ActionMenu';

const BillingSettings = () => {
  const [billingData, setBillingData] = useState([]);

  useEffect(() => {
    fetch('/data/billingSettings.json')
      .then(response => response.json())
      .then(data => setBillingData(data))
      .catch(error => console.error('Error fetching billing data:', error));
  }, []);

    <>
    <Navbar />
    <ActionMenu
        actionItems={[
            { label: 'Setup Customer', link: '' },
            { label: 'Setup Supplier', link: '' },
        ]} />
    </>

  const columns = [
    { label: 'Name', key: 'name' },
    { label: 'Type', key: 'type' },
    { label: '$/£', key: 'currency' },
    { label: 'Billing Start', key: 'billingStart' },
    { label: 'Opening Balance', key: 'openingBalance' },
    { label: 'Billing Cycle', key: 'billingCycle' },
    { label: 'Scheduled', key: 'scheduled' },
    { label: 'Creation Action', key: 'creationAction' },
    { label: 'Next Cycle Date', key: 'nextCycleDate' },
    { label: 'Last Cycle Date', key: 'lastCycleDate' },
  ];

  return <Table columns={columns} data={billingData} />;
};

export default BillingSettings;