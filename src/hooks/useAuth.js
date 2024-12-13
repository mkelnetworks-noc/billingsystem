// 2.1. hooks/
// This folder will contain all custom hooks. For example, you can create a useAuth.js hook that will handle authentication logic.

// Custom hooks for code reuse
import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    // Add logic for login
  };

  const logout = () => {
    setUser(null);
    // Add logic for logout
  };

  return { user, login, logout };
};

export default useAuth;
