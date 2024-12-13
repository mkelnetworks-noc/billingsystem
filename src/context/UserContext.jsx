// 2.2. context/
// The context/ folder will be used for managing the global state using React's Context API. This is useful if we need to share data (like user info or theme settings) across different components.

// Context. state for glonal state management

import React, { createContext, useContext, useState } from 'react';

// Create the context
const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
