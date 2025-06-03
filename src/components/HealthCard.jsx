import React from 'react';
import './HealthCard.css'; // Import the CSS file

const HealthCard = () => {
  return (
    <div className="cards rounded-lg bg-card text-card-foreground shadow-none">
      <h3 className="card-title font-semibold tracking-tight text-xl text-foreground flex items-center gap-2 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          Overview
        </h3>
      <div className="card-content p-6 pt-0">
        <p className="text-foreground">
          Cardiovascular diseases affect the heart and blood vessels. They're often linked to atherosclerosis, where plaque builds up in arteries.
        </p>
      </div>
    </div>
  );
};

export default HealthCard;