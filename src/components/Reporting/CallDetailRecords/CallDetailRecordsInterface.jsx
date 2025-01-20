import React, {useState} from 'react';
import PageHeader from '../../Headers/PageHeader';
import Card from '../../utility/Card';
import PageHeaderReportPage from '../../Headers/PageHeaderReportPage';
import CallDetailRecordsTable from './CallDetailRecordsTable';

const CallDetailRecordsInterface = () => {
    return (
        <div className='p-6'>
            {/* Call records page header */}
            <PageHeaderReportPage
                title="Call Detail Records"
                menuItems={[
                    { label: 'Report', link: '/call-detail-records' },
                  ]}
                  actionItems={[
                    { label: 'Report', link: '/report' },
                    { label: 'Save Report', link: '/Save-Report' },
                    { label: 'Rename/Delete Report', link: '/rename-or-delete-report' },
                    { label: 'Export', link: '/export' },
                    { label: 'Export Templates', link: '/export-templates' },
                    { label: 'Add Plan', link: '/add-plan' },
                    { label: 'Copy Plan', link: '/copy-plan' },
                    { label: 'Export Rates', link: '/export-rates' },
                  ]}
            />
            {/* call records content */}
            <Card>
                <CallDetailRecordsTable />
            </Card>
        </div>
    )
}

export default CallDetailRecordsInterface