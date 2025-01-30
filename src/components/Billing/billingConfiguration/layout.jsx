import React, {useState} from 'react';
//import PageHeader from '../../../Headers/PageHeader';
import PageHeader from '../../../components/Headers/PageHeader'
//import Card from '../../../utility/Card';
import Card from '../../utility/Card'
//import PageHeaderReportPage from '../../../components/Headers/PageHeaderReportPage';
import PageHeaderReportPage from '../../../components/Headers/PageHeaderReportPage';
//import ReportTable from '../../../Reporting/Reports/reportTable';
import BillingSettings from './billingSettings/billingSettings';

const BillingConfigurationLayout = () => {
    return (
        <div className='p-6'>
        <PageHeader
        title="Billing Configuration"
        menuItems={[
          { label: 'Billing Settings', link: '' },
          { label: 'BIlling Cycles', link: '/billing-cycles' },
          { label: 'Global Numbering', link: '' },
          { label: 'File Names', link: '' },
          { label: 'Ducuments Templates', link: '' },
          { label: 'Email Templates', link: '' }
        ]}
        actionItems={[
            { label: 'Setup Customer', link: '' },
            { label: 'Setup Supplier', link: '' },
          ]}
      />
      <BillingSettings />
        </div>
        
    )
}

export default BillingConfigurationLayout;