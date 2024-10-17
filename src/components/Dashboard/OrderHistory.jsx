import React from 'react';

const OrderHistory = () => {
  const orders = [
    { id: 1, date: '2024-01-01', status: 'Delivered', total: '₦120.00' },
    { id: 2, date: '2024-02-15', status: 'In Transit', total: '₦340.00' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      <ul className="space-y-4">
        {orders.map(order => (
          <li key={order.id} className="flex justify-between items-center border-b pb-4">
            <div>
              <p className="font-semibold">Order #{order.id}</p>
              <p className="text-sm">Date: {order.date}</p>
              <p className="text-sm">Status: {order.status}</p>
            </div>
            <p className="font-semibold text-lg">{order.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
