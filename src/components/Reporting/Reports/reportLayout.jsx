import React, {useState} from 'react';
import PageHeader from '../../Headers/PageHeader';
import Card from '../../utility/Card';
import PageHeaderReportPage from '../../Headers/PageHeaderReportPage';
import ReportTable from './reportTable';

const reportLayout = () => {
    return (
        <div className='p-6'>
            {/* Call records page header */}
            <PageHeaderReportPage
                title="Reports / Report Builder"
                menuItems={[
                    { label: 'Report', link: '/call-detail-records' },
                  ]}
                  actionItems={[
                    { label: 'New Report', link: '' },
                    { label: 'Save Report', link: '' },
                    { label: 'Rename/Delete Report', link: '' },
                    { label: 'Export', link: '/export' },
                    { label: 'CDR Rerating', link: '' },
                  ]}
            />
            {/* call records content */}
            <Card>
                {/* <CallDetailRecordsTable /> */}
                <ReportTable />
            </Card>
        </div>
    )
}

export default reportLayout