import React from 'react';

const SavedAddresses = () => {
  const addresses = [
    { id: 1, type: 'Home', address: '1234 Main St, Lagos, Nigeria' },
    { id: 2, type: 'Work', address: '4567 Office Blvd, Abuja, Nigeria' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Saved Addresses</h2>
      <ul className="space-y-4">
        {addresses.map(address => (
          <li key={address.id} className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-semibold">{address.type} Address</p>
              <p className="text-sm">{address.address}</p>
            </div>
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedAddresses;
