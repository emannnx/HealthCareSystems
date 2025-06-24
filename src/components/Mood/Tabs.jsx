// Tabs.js
import React, { createContext, useContext } from 'react';
import './Tabs.css';

const TabsContext = createContext();

export const Tabs = ({ value, onValueChange, children }) => {
  return (
    <TabsContext.Provider value={{ activeTab: value, setActiveTab: onValueChange }}>
      <div className="mmood-tabs">{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children }) => {
  return <div className="mmood-tabs-list">{children}</div>;
};

export const TabsTrigger = ({ value, children }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      className={`mmood-tabs-trigger ${isActive ? 'mmood-tabs-trigger--active' : ''}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children }) => {
  const { activeTab } = useContext(TabsContext);
  return activeTab === value ? <div className="mmood-tabs-content">{children}</div> : null;
};
