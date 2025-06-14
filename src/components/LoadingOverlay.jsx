// src/components/LoadingOverlay.jsx
import React from "react";
import "./Loading.css";

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner" />
    </div>
  );
};

export default LoadingOverlay;
