import React from "react";
import Navbar from "../../components/Headers/Navbar"
import ReportLayout from "../../components/Reporting/Reports/reportLayout";
// import CallDetailRecordsTable from "../components/Reporting/CallDetailRecords/CallDetailRecordsTable";
// import CallDetailRecordsInterface from '../components/Reporting/CallDetailRecords/CallDetailRecordsInterface'

const Reports = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      {/* <div className="container mx-auto mt-4 px-6">
        <h1 className="text-2xl font-bold text-navyBlue mb-4">
          Call Detail Records
        </h1>
        <p className="text-gray-600">
          View and manage detailed call records here.
        </p>
      </div> */}
      

      {/* Main Content */}
      {/* <div className="container mx-auto p-6 bg-white rounded shadow-md">
        <CallDetailRecordsTable />
      </div> */}

      <ReportLayout />
    </div>
    
  );
};

export default Reports;
