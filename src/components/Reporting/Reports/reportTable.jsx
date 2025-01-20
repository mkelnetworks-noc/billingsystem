import React, { useState, useEffect } from "react";
import axios from "axios";

const ReportTable = () => {
  // State variables
  const [date, setDate] = useState("");
  const [startTimestamp, setStartTimestamp] = useState("");
  const [endTimestamp, setEndTimestamp] = useState("");
  const [ingressZone, setIngressZone] = useState("");
  const [egressZone, setEgressZone] = useState("");
  const [status, setStatus] = useState("");
  const [statusCode, setStatusCode] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Sorting configuration
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Function to fetch data from the API without filters (on page load)
  const fetchData = async (sortKey = null, sortDirection = "asc") => {
    setLoading(true);
    setError(null);

    try {
      const params = {};
      if (sortKey) {
        params.sortKey = sortKey;
        params.sortDirection = sortDirection;
      }
      const response = await axios.get("http://62.173.46.166:3001/records", { params }); //("http://localhost:3001/records");
      const records = response.data.records;
      setFilteredData(records);
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch filtered data when search button is clicked
  const fetchFilteredData = async () => {
    setLoading(true);
    setError(null);

    try {
      const params = {
        startTimestamp,
        endTimestamp,
        ingress: ingressZone,
        egress: egressZone,
        status,
        statusCode,
        page: currentPage,
        pageSize: 10000,
        sortDirection: sortConfig.direction,
      };

      const response = await axios.get("http://localhost:3001/records/filtered-records", { params });
      const { records, totalRecords } = response.data;

      setFilteredData(records);
      setTotalPages(Math.ceil(totalRecords / 500));
    } catch (err) {
      setError("Failed to fetch filtered data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const validateTimestamps = () => {
    if (!startTimestamp || !endTimestamp) {
      setError("Start Timestamp and End Timestamp required.");
      return false;
    }
    return true;
  };

  const handleSearch = () => {
    setIsFilterVisible(!isFilterVisible);
    if (!validateTimestamps()) return;
    setCurrentPage(1);
    fetchFilteredData();
  };

  const handleExport = async () => {
    setIsFilterVisible(!isFilterVisible);
    if (!validateTimestamps()) return;
    setLoading(true);
    setError(null);

    try {
      const filters = {
        startTimestamp,
        endTimestamp,
        ingress: ingressZone,
        egress: egressZone,
        status,
        statusCode,
      };

      const response = await axios.post("http://localhost:3001/download", filters, {
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: "text/csv" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.setAttribute("download", `cdr-${filters.startTimestamp.replace(/[: ]/g, "-")}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert("Export completed! The file is downloading.");
    } catch (err) {
      setError("Failed to initiate export. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    // fetchFilteredData();

    if (isFilterVisible) {
      fetchFilteredData(); // Fetch filtered and sorted data
    } else {
      // Sort the existing unfiltered data locally
      const sortedData = [...filteredData].sort((a, b) => {
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
        return 0;
      });
      setFilteredData(sortedData);
    }
  };

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

  useEffect(() => {
    if (currentPage > 1) {
      fetchFilteredData();
    }
  }, [currentPage]);

  return (
    <div className="p-4 space-y-6 ">
      <div className="flex justify-end space-x-4">
        <button
          className="bg-skyBlue text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleExport}
        >
          Export
        </button>
        <button
          className="bg-skyBlue text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleSearch}
        >
          Filter
        </button>
      </div>

      {isFilterVisible && (
        <div className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-grow">
              <label className="block text-gray-700 text-sm mb-1">Start Timestamp</label>
              <input
                type="datetime-local"
                className="w-full border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-skyBlue"
                value={startTimestamp}
                onChange={(e) => setStartTimestamp(e.target.value)}
              />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-sm mb-1">End Timestamp</label>
              <input
                type="datetime-local"
                className="w-full border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-skyBlue"
                value={endTimestamp}
                onChange={(e) => setEndTimestamp(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap space-x-4 items-end">
            <div className="flex-grow">
              <label className="block text-gray-700 text-sm mb-1">Ingress Zone</label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-skyBlue"
                value={ingressZone}
                onChange={(e) => setIngressZone(e.target.value)}
              />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-sm mb-1">Egress Zone</label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-skyBlue"
                value={egressZone}
                onChange={(e) => setEgressZone(e.target.value)}
              />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-sm mb-1">Status</label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 text-gray-700 focus:outline-none"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 text-sm mb-1">Status Code</label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 text-gray-700 focus:outline-none"
                value={statusCode}
                onChange={(e) => setStatusCode(e.target.value)}
              />
            </div>
            <div>
              <button
                className="bg-skyBlue text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>

          {loading && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
              <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500"></div>
            </div>
          )}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      )}

      <div className="overflow-y-auto overflow-x-auto max-h-screen">
        <table className="min-w-full bg-white border rounded-md h-screen">
          <thead className="sticky top-0 bg-skyBlue text-sm text-white z-10">
            <tr className="bg-skyBlue text-white">
              <th className="py-2 px-4 text-left">
                INGRES
                <button className="ml-2 text-white" onClick={() => handleSort("Ingress")}>
                  {sortConfig.key === "Ingress" && sortConfig.direction === "asc" ? "▲" : "▼"}
                </button>
              </th>
              <th className="py-2 px-4 text-left">
                EGRES
                <button className="ml-2 text-white" onClick={() => handleSort("Egress")}>
                  {sortConfig.key === "Egress" && sortConfig.direction === "asc" ? "▲" : "▼"}
                </button>
              </th>
              <th className="py-2 px-4 text-left">CALLING PARTY</th>
              <th className="py-2 px-4 text-left">CALLED PARTY</th>
              <th className="py-2 px-4 text-left">STATUS</th>
              <th className="py-2 px-4 text-left">
                STATUS CODE
                <button className="ml-2 text-white" onClick={() => handleSort("StatusCode")}> 
                  {sortConfig.key === "StatusCode" && sortConfig.direction === "asc" ? "▲" : "▼"}
                </button>
              </th>
              <th className="py-2 px-4 text-left">SIGNALLING TIMESTAMP</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((record, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="py-2 px-4">{record.Ingress}</td>
                  <td className="py-2 px-4">{record.Egress}</td>
                  <td className="py-2 px-4">{record.CallingParty}</td>
                  <td className="py-2 px-4">{record.CalledParty}</td>
                  <td className="py-2 px-4">{record.Status}</td>
                  <td className="py-2 px-4">{record.StatusCode}</td>
                  <td className="py-2 px-4">{new Date(record.SignallingTimestamp).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-4 px-4 text-center" colSpan="7">
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
