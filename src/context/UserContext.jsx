import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the UserContext
const UserContext = createContext();

// Custom Hook to Access Context
export const useUserContext = () => {
  return useContext(UserContext);
};

// Provider Component
export const UserProvider = ({ children }) => {
  // State to Store User Data
  const [user, setUser] = useState(null);

  // Load User from localStorage on Initialization
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login Function
  const login = (userData) => {
    setUser(userData); // Update state
    localStorage.setItem('user', JSON.stringify(userData)); // Store in localStorage
  };

  // Logout Function
  const logout = () => {
    setUser(null); // Clear state
    localStorage.removeItem('user'); // Remove from localStorage
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
