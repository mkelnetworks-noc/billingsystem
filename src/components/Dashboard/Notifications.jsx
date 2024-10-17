import React from 'react';

const Notifications = () => {
  const notifications = [
    { id: 1, message: 'Your order #1234 has been shipped!' },
    { id: 2, message: 'You have a new promotion for 10% off!' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <ul className="space-y-4">
        {notifications.map(notification => (
          <li key={notification.id} className="border-b pb-4">
            <p className="font-semibold">{notification.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
