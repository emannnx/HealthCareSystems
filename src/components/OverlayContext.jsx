// OverlayContext.js
import React, { createContext, useState, useContext } from 'react';

const OverlayContext = createContext();

export const useOverlay = () => {
  return useContext(OverlayContext);
};

export const OverlayProvider = ({ children }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <OverlayContext.Provider value={{ isOverlayOpen, toggleOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};
