import React from "react";
import Modal from "../../../utility/ModalNew";
import { FiInfo } from "react-icons/fi";

const AddBillingCycle = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Billing Cycle">
      <div className="flex flex-col md:flex-row gap-6 p-4 ">
        <div className="flex-1 bg-gray-50 p-4 rounded-md shadow-md">

          <h2 className="mt-4 font-semibold">Billing Cycle Details</h2>

          <label className="block mt-2">Billing Cycle</label>
          <input
            type="text"
            placeholder="Enter Billing Type"
            className="w-full p-2 border rounded-md mt-1"
          />
        <div className="mt-4">
        <h2 className="mt-4 font-semibold">Scheduling</h2>
          <label className="block mt-2">Billing Cycle</label>
          <div className="flex gap-2">
            <select className="w-1/2 p-2 border rounded-md mt-1">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
            <select className="p-2 border rounded-md mt-1">
              {[...Array(5)].map((_, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </select>
            <label className="block mt-2">Per month</label>
          </div>
        </div>

          <label className="block mt-2">Bill On</label>
          <select className="w-full p-2 border rounded-md mt-1">
            {[...Array(31)].map((_, i) => (
              <option key={i + 1}>{i + 1}</option>
            ))}
          </select>

          <label className="block mt-2">First Invoice</label>
          <select className="w-full p-2 border rounded-md mt-1">
            <option>Invoice on next billing cycle</option>
            <option>Invoice after first complete billing cycle</option>
          </select>
           
          <label className="block mt-2">Invoice Scheduling</label>
          <div className="flex flex-row">
          <input
            type="number"
            placeholder="Enter hours after billing period end"
            className="p-2 border rounded-md mt-1"
          />
          <label className="block mt-2">hours after billing period end</label>
          </div>
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

export default AddBillingCycle;

