import React from 'react';

const Profile = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-md" 
            placeholder="John Doe" 
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            className="w-full p-2 border border-gray-300 rounded-md" 
            placeholder="john@example.com" 
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input 
            type="password" 
            className="w-full p-2 border border-gray-300 rounded-md" 
            placeholder="••••••••" 
          />
        </div>
        <button 
          type="submit" 
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
