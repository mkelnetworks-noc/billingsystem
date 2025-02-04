import React, { useState } from 'react';
import PageHeader from '../../../components/Headers/PageHeaderBillingConfig';
import BillingSettings from './billingSettings/billingSettings';
import BillingCycles from './billingCycles';
import SetupCustomer from './billingSettings/setupCustomer';
import SetupSupplier from './billingSettings/setupSupplier';
import AddBillingCycle from './billingCycles/addBillingCycles';

const BillingConfigurationLayout = () => {
    const [selectedTab, setSelectedTab] = useState('billing-settings');
    const [isSetupCustomerOpen, setSetupCustomerOpen] = useState(false);
    const [isSetupSupplierOpen, setSetupSupplierOpen] = useState(false);
    const [isAddBillingCycleOpen, setAddBillingCycle] = useState(false);

    const menuItems = [
        { label: 'Billing Settings', key: 'billing-settings' },
        { label: 'Billing Cycles', key: 'billing-cycles' },
        { label: 'Global Numbering', key: 'global-numbering' },
        { label: 'File Names', key: 'file-names' },
        { label: 'Documents Templates', key: 'documents-templates' },
        { label: 'Email Templates', key: 'email-templates' }
    ];

    // Dynamic action buttons based on the selected tab
    const getActionButtons = () => {
        if (selectedTab === 'billing-settings') {
            return [
                {
                    label: 'Setup Customer',
                    onClick: () => setSetupCustomerOpen(true),
                    className: 'bg-green-500 text-white'
                },
                {
                    label: 'Setup Supplier',
                    onClick: () => setSetupSupplierOpen(true),
                    className: 'bg-blue-500 text-white'
                }
            ];
        }
        if (selectedTab === 'billing-cycles') {
            return [
                {
                    label: 'Add Billing Cycle',
                    onClick: () => setAddBillingCycle(true),
                    className: 'bg-blue-500 text-white'
                }
            ];
        }
        return [];
    };

    return (
        <div className='p-6'>
            <PageHeader title="Billing Configuration" />

            {/* Menu & Buttons in the same row */}
            <div className="mb-4 flex items-center justify-between border-b pb-2">
                {/* Navigation Tabs */}
                <div className="flex gap-4">
                    {menuItems.map((item) => (
                        <button
                            key={item.key}
                            className={`px-4 py-2 ${
                                selectedTab === item.key ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-600'
                            }`}
                            onClick={() => setSelectedTab(item.key)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Dynamic Action Buttons */}
                <div className="flex gap-2">
                    {getActionButtons().map((button) => (
                        <button
                            key={button.label}
                            className={`px-4 py-2 rounded ${button.className}`}
                            onClick={button.onClick}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Conditionally Render Components Based on Selected Tab */}
            {selectedTab === 'billing-settings' && <BillingSettings />}
            {selectedTab === 'billing-cycles' && <BillingCycles />}

            {/* Setup Modals */}
            <SetupCustomer isOpen={isSetupCustomerOpen} onClose={() => setSetupCustomerOpen(false)} />
            <SetupSupplier isOpen={isSetupSupplierOpen} onClose={() => setSetupSupplierOpen(false)} />
            <AddBillingCycle isOpen={isAddBillingCycleOpen} onClose={() => setAddBillingCycle(false)} />
        </div>
    );
};

export default BillingConfigurationLayout;
