import React, { useEffect } from 'react';
import { useUserContext } from '../context/UserContext';
import Navbar from '../components/Headers/Navbar'

const Dashboard = () => {
  const { user, login, logout } = useUserContext();

  useEffect(() => {
    // Simulate login
    login({ name: 'John Doe' });
  }, []);
  // }, [login]);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-100 p-6">
        <h2 className="text-2xl font-bold text-navyBlue mb-4">Dashboard</h2>
        {/* <p className="text-gray-700">Welcome, {user?.name}</p>
        <button onClick={() => logout()} className="mt-4 text-red-500">Logout</button> */}
      </main>
    </div>
  );
};

export default Dashboard;


/* import React from 'react';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-100 p-6">
        <h2 className="text-2xl font-bold text-navyBlue mb-4">Dashboard</h2>
        <p className="text-gray-700">
          dashboard
        </p>
      </main>
    </div>
  );
};

export default Dashboard; */
