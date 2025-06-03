import React from 'react'
import './EmergencyGuide.css' // Import the CSS file for styling


const emergencyTabs = [
  {
    id: 'cardiac',
    label: 'Cardiac Emergencies',
    icon: (
      <svg className="emergency-icon emergency-icon--danger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    ),
  },
  {
    id: 'breathing',
    label: 'Breathing Difficulties',
    icon: (
      <svg className="emergency-icon emergency-icon--primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
        <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>
      </svg>
    ),
  },
  {
    id: 'injury',
    label: 'Severe Injuries',
    icon: (
      <svg className="emergency-icon emergency-icon--amber" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 12h8M12 8v8"></path>
      </svg>
    ),
  },
  {
    id: 'poison',
    label: 'Poisoning',
    icon: (
      <svg className="emergency-icon emergency-icon--danger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="m12.5 17-.5-1-.5 1h1z"/>
        <path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"/>
        <circle cx="15" cy="12" r="1"/>
        <circle cx="9" cy="12" r="1"/>
      </svg>
    ),
  },
  {
    id: 'burn',
    label: 'Burns',
    icon: (
      <svg className="emergency-icon emergency-icon--orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
        <path d="M20 3v4M22 5h-4M4 17v2M5 18H3"/>
      </svg>
    ),
  },
  {
    id: 'stroke',
    label: 'Stroke',
    icon: (
      <svg className="emergency-icon emergency-icon--red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>
      </svg>
    ),
  },
];

const EmergencyGuide = ({ activeTab, onTabChange }) => {
  return (
    <div>
      <div>
      <div className="emergency-alert-box">
  <div className="emergency-alert-header">
    <div className="emergency-alert-icon-text">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="emergency-alert-icon"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
      </svg>
      <div>
        <h2 className="emergency-alert-title">If this is an emergency</h2>
        <p>Call 911 or your local emergency number immediately</p>
      </div>
    </div>
    <button className="emergency-alert-call-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="emergency-alert-phone-icon"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      Call 911
    </button>
  </div>
</div>

<div className="emergency-guide-intro">
  <h1 className="emergency-guide-title">Emergency First Aid Guide</h1>
  <p className="emergency-guide-description">
    Quick reference for emergency situations. This guide is not a substitute for professional medical training or emergency medical services.
  </p>
</div>

<div className="emergency-search-container">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="emergency-search-icon"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
  <input
    className="emergency-search-input"
    placeholder="Search emergency procedures..."
  />
</div>

<div className="emergency-tablist" role="tablist" aria-orientation="horizontal">
      {emergencyTabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`content-${tab.id}`}
          id={`trigger-${tab.id}`}
          className={`emergency-tab ${activeTab === tab.id ? 'emergency-tab--active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>

      </div>
    </div>
  )
}

export default EmergencyGuide