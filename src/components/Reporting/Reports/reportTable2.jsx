import React, { useState, useEffect } from "react";
import axios from "axios";

const ReportTable = () => {
  // State variables
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const pageSize = 10;

  // Fetch data from the JSON file
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("/report.json");
      const records = response.data;
      setData(records);
      setTotalPages(Math.ceil(records.length / pageSize));
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handle pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Calculate paginated data
  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="p-4 space-y-6">
      {loading && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500"></div>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}

      <div className="overflow-y-auto overflow-x-auto max-h-screen">
        <table className="min-w-full bg-white border rounded-md h-screen">
          <thead className="sticky top-0 bg-skyBlue text-white z-10">
            <tr>
              <th className="py-2 px-4 text-left">Customer Carrier</th>
              <th className="py-2 px-4 text-left">Supplier Carrier</th>
              <th className="py-2 px-4 text-left">Metrics Connected</th>
              <th className="py-2 px-4 text-left">Customer ASR</th>
              <th className="py-2 px-4 text-left">Customer Avg PDD</th>
              <th className="py-2 px-4 text-left">Supplier ASR</th>
              <th className="py-2 px-4 text-left">Supplier Avg PDD</th>
              <th className="py-2 px-4 text-left">Metrics ACD</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((record, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="py-2 px-4">{record.CustomerCarrier}</td>
                  <td className="py-2 px-4">{record.SupplierCarrier}</td>
                  <td className="py-2 px-4">{record.MetricsConnected}</td>
                  <td className="py-2 px-4">{record.CustomerASR}%</td>
                  <td className="py-2 px-4">{record.CustomerAvgPDD}</td>
                  <td className="py-2 px-4">{record.SupplierASR}%</td>
                  <td className="py-2 px-4">{record.SupplierAvgPDD}</td>
                  <td className="py-2 px-4">{record.MetricsACD}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-4 px-4 text-center" colSpan="8">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-4">
        <button
          className="bg-skyBlue text-white px-4 py-2 rounded-md"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="flex items-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="bg-skyBlue text-white px-4 py-2 rounded-md"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReportTable;
