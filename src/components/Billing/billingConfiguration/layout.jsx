import React, { useState } from 'react';
import PageHeader from '../../../components/Headers/PageHeader';
import BillingSettings from './billingSettings/billingSettings';
import SetupCustomer from './billingSettings/setupCustomer';

const BillingConfigurationLayout = () => {
    const [isSetupCustomerOpen, setSetupCustomerOpen] = useState(true);

    return (
        <div className='p-6'>
            <PageHeader
                title="Billing Configuration"
                menuItems={[
                    { label: 'Billing Settings', link: '' },
                    { label: 'BIlling Cycles', link: '/billing-cycles' },
                    { label: 'Global Numbering', link: '' },
                    { label: 'File Names', link: '' },
                    { label: 'Documents Templates', link: '' },
                    { label: 'Email Templates', link: '' }
                ]}
                actionItems={[
                    { label: 'Setup Customer', onClick: () => setSetupCustomerOpen(true) },
                    { label: 'Setup Supplier', link: '' },
                ]}
            />
            <BillingSettings />
            <SetupCustomer isOpen={isSetupCustomerOpen} onClose={() => setSetupCustomerOpen(false)} />
        </div>
    );
};

export default BillingConfigurationLayout;
