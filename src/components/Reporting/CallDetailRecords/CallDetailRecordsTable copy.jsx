import React, { useState, useEffect } from "react";
import axios from "axios";

const CallDetailRecordsTable = () => {
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

  // Function to fetch data from the API
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const params = {
        startTimestamp,
        endTimestamp,
        ingressZone,
        egressZone,
        status,
        statusCode,
      };

      // Making the GET request to the backend API with query params
      const response = await axios.get("http://localhost:3001/records", { params });

      // Assuming response.data contains an object with the 'records' property
      const records = response.data.records;

      console.log('Fetched records:', records);

      // Set the records in filteredData state
      setFilteredData(records);
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handler for search action
  const handleSearch = () => {
    fetchData();
  };

  // Handler for export action
  const handleExport = () => {
    const csvData = [
      ["INGRES", "EGRES", "CALLING PARTY", "CALLED PARTY", "STATUS", "STATUS CODE", "SIGNALLING TIMESTAMP"],
      ...filteredData.map((row) => [
        row.Ingress,
        row.Egress,
        row.CallingParty,
        row.CalledParty,
        row.Status,
        row.StatusCode,
        row.SignallingTimestamp,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "call_records.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Fetch data on component load
    fetchData();
  }, []); // empty dependency array means it will run once after the initial render

  return (
    <div className="p-4 space-y-6">
      {/* Date Selection and Actions */}
      <div className="flex justify-end space-x-4">
        <input
          type="date"
          className="border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-skyBlue"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
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

      {/* Start and End Timestamp */}
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

      {/* Filters Section */}
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

      {/* Loading Spinner or Error Message */}
      {loading && <p>Loading data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md">
          <thead>
            <tr className="bg-skyBlue text-white">
              <th className="py-2 px-4 text-left">INGRES</th>
              <th className="py-2 px-4 text-left">EGRES</th>
              <th className="py-2 px-4 text-left">CALLING PARTY</th>
              <th className="py-2 px-4 text-left">CALLED PARTY</th>
              <th className="py-2 px-4 text-left">STATUS</th>
              <th className="py-2 px-4 text-left">STATUS CODE</th>
              <th className="py-2 px-4 text-left">SIGNALLING TIMESTAMP</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((record, index) => (
                <tr key={index} className="border-t">
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
    </div>
  );
};

export default CallDetailRecordsTable;
