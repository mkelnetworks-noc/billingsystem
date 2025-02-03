import React from "react";
import Modal from "../../../utility/ModalNew";
import { FiInfo } from "react-icons/fi";

const SetupCustomer = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Setup Customer">
      <div className="flex flex-col md:flex-row gap-6 p-4 ">
        <div className="flex-1 bg-gray-50 p-4 rounded-md shadow-md">
          <label className="block font-semibold">Select Carrier</label>
          <input
            type="text"
            placeholder="Enter Carrier"
            className="w-full p-2 border rounded-md mt-2"
          />

          <h2 className="mt-4 font-semibold">Billing Initial</h2>
          <label className="block mt-2">Billing Start</label>
          <input type="date" className="w-full p-2 border rounded-md mt-1" />

          <label className="block mt-2">Opening Balance</label>
          <input
            type="number"
            placeholder="0.0"
            className="w-full p-2 border rounded-md mt-1"
          />

          <label className="block mt-2">Billing Cycle</label>
          <select className="w-full p-2 border rounded-md mt-1">
            <option>Bi-Weekly</option>
            <option>Daily-BT</option>
            <option>Monthly</option>
            <option>Monthly-BT</option>
            <option>Weekly Billing</option>
          </select>
        </div>

        <div className="flex-1 bg-blue-50 p-4 rounded-md shadow-md border-l-4 border-blue-500">
          <FiInfo className="text-blue-500 text-3xl mb-2" />

          <h1 className="text-lg font-bold">Billing Start Date</h1>
          <p className="text-sm mt-1">
            The billing start date defines the start date that will be applied to the
            first invoice. For all subsequent invoices, the start date will be based
            on the end date of the previous invoice.
          </p>

          <h1 className="text-lg font-bold mt-4">Opening Balance</h1>
          <p className="text-sm mt-1">
            The opening balance is the amount owed by the customer at the billing
            start date. When adding billing configurations for a new customer with
            no billing history, this value can be left as zero.
          </p>

          <h1 className="text-lg font-bold mt-4">Copy Setting</h1>
          <p className="text-sm mt-1">
            Where a Billing Setting exists for the same Carrier but in a different
            currency, it is possible to copy all configuration settings.
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-4 p-4">
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          onClick={onClose}
        >
          Cancel
        </button>
        <button className="bg-navyBlue text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
          Save
        </button>
      </div>
    </Modal>
  );
};

export default SetupCustomer;
