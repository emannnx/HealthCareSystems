import React, { createContext, useContext, useState } from 'react';

// Create the context
const DarkModeContext = createContext();

// Custom hook for easy access
export const useDarkMode = () => useContext(DarkModeContext);

// Provider component
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
