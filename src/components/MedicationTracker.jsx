// MedicationTracker.jsx
import React, { useState } from 'react';
import './MedicationTracker.css';

const tabs = [
  { id: "active", label: "Active Medications" },
  { id: "all", label: "All Medications" },
  { id: "adherence", label: "Adherence Calendar" },
];

const medications = [
  {
    id: 1,
    name: "Lisinopril",
    dosage: "10mg",
    schedule: "Once daily - 8:00 AM",
    refillDate: "May 15, 2025",
  },
  {
    id: 2,
    name: "Metformin",
    dosage: "500mg",
    schedule: "Twice daily - 8:00 AM, 8:00 PM",
    refillDate: "May 20, 2025",
  },
  {
    id: 3,
    name: "Atorvastatin",
    dosage: "20mg",
    schedule: "Once daily - 9:00 PM",
    refillDate: "Jun 10, 2025",
  },
];

const medications1 = [
  {
    name: "Lisinopril 10mg",
    status: "Active",
    startDate: "Oct 1, 2023",
    prescriber: "Dr. Smith",
    notes: "For blood pressure control",
  },
  {
    name: "Metformin 500mg",
    status: "Active",
    startDate: "Dec 15, 2023",
    prescriber: "Dr. Johnson",
    notes: "For diabetes management",
  },
  {
    name: "Atorvastatin 20mg",
    status: "Active",
    startDate: "Jan 10, 2024",
    prescriber: "Dr. Smith",
    notes: "For cholesterol management",
  },
];

const medications2 = [
  {
    name: 'Lisinopril 10mg',
    doses: [true, true, false, true, true, true, false],
  },
  {
    name: 'Metformin 500mg',
    doses: [true, true, false, true, true, false, false],
  },
  {
    name: 'Atorvastatin 20mg',
    doses: [true, false, true, true, false, true, true],
  },
];

const MedicationTracker = ({ onClick, disabled = false }) => {
  const [selectedTab, setSelectedTab] = useState("active");
  const [taken, setTaken] = useState(false);

  const renderAdherenceIcon = (taken) => (
    taken ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="icon-check-circle" viewBox="0 0 24 24" fill="none" stroke="#34B463" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
        <path d="m9 11 3 3L22 4" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  );  

  return (
    <div className="medication-tracker-container">
      <div className="medication-tracker-header">
        <div className="medication-tracker-title-group">
          <h1 className="medication-tracker-title">Medication Tracker</h1>
          <p className="medication-tracker-subtitle">
            Track and manage your medications, set reminders, and monitor adherence
          </p>
        </div>

        <div className="medication-tracker-actions">
          <button className="reminder-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              // className="icon"
              >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Reminders
          </button>
          <button className="add-medication-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              // className="icon"
              >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Add Medication
          </button>
        </div>
      </div>

      <div className="medication-card-grid">
        <div className="medication-card">
          <div className="medication-card-header">
            <h3 className="medication-card-title">
              <span>Active Medications</span>
              <svg className="medication-card-icon medication-card-text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path>
                <path d="m8.5 8.5 7 7"></path>
              </svg>
            </h3>
          </div>
          <div className="medication-card-content">
            <p className="medication-card-value">3</p>
            <p className="medication-card-subtext">of 3 total</p>
          </div>
        </div>

        <div className="medication-card">
          <div className="medication-card-header">
            <h3 className="medication-card-title">
              <span>Adherence Rate</span>
              <svg className="medication-card-icon medication-card-text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
            </h3>
          </div>
          <div className="medication-card-content">
            <p className="medication-card-value">76%</p>
            <p className="medication-card-subtext">last 7 days</p>
          </div>
        </div>

        <div className="medication-card">
          <div className="medication-card-header">
            <h3 className="medication-card-title">
              <span>Next Refill</span>
              <svg className="medication-card-icon medication-card-text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </h3>
          </div>
          <div className="medication-card-content">
            <p className="medication-card-value">May 15</p>
            <p className="medication-card-subtext">Lisinopril</p>
          </div>
        </div>
      </div>

      <h2 className="medication-heading">Today's Medications</h2>
      <div className="medication-card-grid">
            {taken ? (
              <div className="card-done">
                {renderAdherenceIcon(true)}
                <h3 className="done-title">All Done for Today!</h3>
                <p className="done-text">You've taken all your medications for today.</p>
              </div>
            ) : (
              <div className="medication-card">
                <div className="medication-card-header">
                  <h1 className="medication-card-title">Metformin 500mg <svg className="medication-card-icon medication-card-text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path>
                <path d="m8.5 8.5 7 7"></path>
              </svg></h1>
                  <p className="medication-card-subtext">Twice daily - 8:00 AM, 8:00 PM</p>
                </div>
                <div className="medication-card-content">
                  <p className="medication-card-subtext">Take with food to reduce stomach upset</p>
                </div>
                <div className="medication-card-footer">
                  <button className="medication-card-button medication-card-button-outline"><svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="icon-clock"
>
  <circle cx="12" cy="12" r="10" />
  <polyline points="12 6 12 12 16 14" />
</svg>
Remind</button>
                  <button
                    className="medication-card-button medication-card-button-primary"
                    onClick={() => setTaken(true)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-4 w-4 mr-2" data-lov-id="src/pages/MedicationTracker.tsx:311:22" data-lov-name="CheckCircle" data-component-path="src/pages/MedicationTracker.tsx" data-component-line="311" data-component-file="MedicationTracker.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>Mark as Taken
                  </button>
                </div>
              </div>
            )}
          </div>

      <h2 className="medication-heading">Medication Log</h2>

      <div className="tab-cont">
      <div className="tab-container-wrapper">
    <div role="tablist" aria-orientation="horizontal" className="tabs-list" tabIndex={0}>
      {tabs.map(({ id, label }) => {
        const isSelected = selectedTab === id;
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            aria-controls={`tab-content-${id}`}
            id={`tab-triggers-${id}`}
            className={`tab-triggers ${isSelected ? "active" : ""}`}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => setSelectedTab(id)}
          >
            {label}
          </button>
        );
      })}
    </div>
  </div>

      {/* Tab Panels */}
      <div
        id="tab-content-active"
        role="tabpanel"
        aria-labelledby="tab-triggers-active"
        hidden={selectedTab !== "active"}
        tabIndex={0}
        className="tabpanel"
      >
        {/* Active Medications content - placeholder */}
        <div className="table-wrapper">
          <table className="medication-table">
            <caption className="sr-only">Medication List</caption>
            <thead>
              <tr>
                <th>Medication</th>
                <th>Dosage</th>
                <th>Schedule</th>
                <th>Refill Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {medications.map(({ id, name, dosage, schedule, refillDate }) => (
                <tr key={id} tabIndex={-1}>
                  <td className="font-medium">{name}</td>
                  <td>{dosage}</td>
                  <td>{schedule}</td>
                  <td>{refillDate}</td>
                  <td>
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className="action-button"
                      aria-label={`Actions for ${name}`}
                    >
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
                        className="icon"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                      <span className="sr-only">Actions</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        id="tab-content-all"
        role="tabpanel"
        aria-labelledby="tab-triggers-all"
        hidden={selectedTab !== "all"}
        tabIndex={0}
        className="tabpanel"
      >
        <div
      role="tabpanel"
      tabIndex={0}
      aria-labelledby="tab-all"
      className="tabpanel"
    >
      <div className="table-wrapper">
        <table className="medication-table">
          <thead>
            <tr>
              <th>Medication</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>Prescriber</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {medications1.map((med, idx) => (
              <tr key={idx} className="table-row">
                <td className="med-name">{med.name}</td>
                <td>
                  <span className={`status-badge status-${med.status.toLowerCase()}`}>
                    {med.status}
                  </span>
                </td>
                <td>{med.startDate}</td>
                <td>{med.prescriber}</td>
                <td className="notes">{med.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </div>

      <div
        id="tab-content-adherence"
        role="tabpanel"
        aria-labelledby="tab-triggers-adherence"
        hidden={selectedTab !== "adherence"}
        tabIndex={0}
        className="tabpanel"
      >
        <div className="table-wrapper">
        <table className="medication-table">
        <thead className="table-header">
      <tr className="table-row">
        <th className="table-head">Medication</th>
        <th className="table-head">Sun</th>
        <th className="table-head">Mon</th>
        <th className="table-head">Tue</th>
        <th className="table-head">Wed</th>
        <th className="table-head">Thu</th>
        <th className="table-head">Fri</th>
        <th className="table-head">Sat</th>
      </tr>
    </thead>
    <tbody>
        {medications2.map((med, i) => (
          <tr key={i} className="med-table-row">
            <td className="med-name">{med.name}</td>
            {med.doses.map((taken, idx) => (
              <td key={idx} className="med-dose-cell">
                {taken ? (
                    <button
      type="button"
      className="btn-check-circle"
      onClick={onClick}
      disabled={false}
      aria-label="Check Circle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon-check-circle"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
        <path d="m9 11 3 3L22 4"></path>
      </svg>
    </button>
                ) : (
                  <button
      type="button"
      className="btn-close"
      onClick={onClick}
      disabled={disabled}
      aria-label="Close"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon-close"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
        </table>
      </div>
      </div>
      </div>
    </div>
  );
};

export default MedicationTracker;
