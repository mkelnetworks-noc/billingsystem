import React from 'react';

const PaymentMethods = () => {
  const paymentMethods = [
    { id: 1, type: 'Visa', last4: '1234', expiry: '12/24' },
    { id: 2, type: 'MasterCard', last4: '5678', expiry: '10/23' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
      <ul className="space-y-4">
        {paymentMethods.map(method => (
          <li key={method.id} className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-semibold">{method.type} ****{method.last4}</p>
              <p className="text-sm">Expiry: {method.expiry}</p>
            </div>
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentMethods;
