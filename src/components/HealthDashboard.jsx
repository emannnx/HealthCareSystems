import React, { useState } from 'react'
import './HealthDashboard.css'
import { Link } from 'react-router-dom'

const HealthDashboard = () => {

  const [selectedToggle, setSelectedToggle] = useState('weekly');

  const toggles = ['daily', 'weekly', 'monthly'];

  return (
    <div className="my-health-container">
    <div className="my-health-dashboard">
      <div className="my-health-header">
        <div className="header-text">
          <h1 className="titlee">My Health</h1>
          <p className="subtitles">Your personalized health dashboard and recommendations</p>
        </div>
        <div className="toggle-group" role="group" dir="ltr" tabIndex={0}>
          {toggles.map((toggle) => (
            <button key={toggle} type="button" className={`toggle-button ${selectedToggle === toggle ? 'active' : ''}`} aria-checked={selectedToggle === toggle} role="radio" aria-label={`Toggle ${toggle}`} onClick={() => setSelectedToggle(toggle)} >
              {toggle.charAt(0).toUpperCase() + toggle.slice(1)}
            </button>))}
        </div>
      </div>
    <div className="grid-container">
      <Link to="/mood-tracker">
        <div className="ccards">
          <div className="card-content">
            <div className="card-inner">
              <div className="icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="smile-plus-icon">
                  <path d="M22 11v1a10 10 0 1 1-9-10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                  <path d="M16 5h6" />
                  <path d="M19 2v6" />
                </svg>
              </div>
              <div className="title-wrapper">
                <h3 className="titles">Mood Tracker</h3>
                <span className="badge">New</span>
              </div>
              <p className="description">
                Log your daily mood and track patterns over time
              </p>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/medication-tracker">
        <div className="ccards">
          <div className="card-content">
            <div className="card-inner">
              <div className="icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="thermometer-icon">
                <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
              </svg>
              </div>
              <div className="title-wrapper">
                <h3 className="titles">Medication Tracker</h3>
              </div>
              <p className="description">
                Manage your medications and set reminders
              </p>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/symptom-checker">
        <div className="ccards">
          <div className="card-content">
            <div className="card-inner">
              <div className="icon-circle">
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
    className="thermometer-icon"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
              </div>
              <div className="title-wrapper">
                <h3 className="titles">Symptom Checker</h3>
              </div>
              <p className="description">
                Manage your medications and set reminders
              </p>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/health-calculators">
        <div className="ccards">
          <div className="card-content">
            <div className="card-inner">
              <div className="icon-circle">
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
    className="thermometer-icon"
  >
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
              </div>
              <div className="title-wrapper">
                <h3 className="titles">Health Calculators</h3>
              </div>
              <p className="description">
                Manage your medications and set reminders
              </p>
            </div>
          </div>
        </div>
      </Link>
      </div>
      <div className="cardd slide-up">
      <div className="cardd-header">
        <h3 className="cardd-title">
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
            className="icons"
          >
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
          </svg>
          Health Profile Summary
        </h3>
      </div>
      <div className="cardd-content">
        <div className="info-grid">
          <div className="info-box">
            <div className="info-label">BMI</div>
            <div className="info-value">22.9</div>
            <div className="info-subtext">Normal weight</div>
          </div>
          <div className="info-box">
            <div className="info-label">Blood Type</div>
            <div className="info-value">A+</div>
            <div className="info-subtext">Genotype: AA</div>
          </div>
          <div className="info-box">
            <div className="info-label">Oxygen Level</div>
            <div className="info-value">
              98<span className="info-unit">%</span>
            </div>
            <div className="info-subtext">Normal</div>
          </div>
          <div className="info-box">
            <div className="info-label">Conditions</div>
            <div className="info-values">Mild Hypertension <br /> Seasonal Allergies</div>
          </div>
        </div>
      </div>
    </div>

    <h2 className="health-insights-heading">Your Health Goals</h2>
    <div className="health-gridd">
      {/* Daily Steps */}
      <div className="health-cardss">
        <div className="caard-header">
          <h3 className="caard-title">
            Daily Steps <svg
      className="clock-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
          </h3>
        </div>
        <div className="caard-content">
          
        <div className="values">
  <p className="labels">Pressure</p>
  <p>7500 / 10000 steps</p>
</div>

          <div className="progress-wrapper">
            <div className="progress-bars" style={{ width: "75%"}} />
          </div>
        </div>
      </div>

      {/* Water Intake */}
      <div className="health-cardss">
        <div className="caard-header">
          <h3 className="caard-title">
            Water Intake <svg
      className="clock-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
          </h3>
        </div>
        <div className="caard-content">
        <div className="values">
  <p className="labels">Pressure</p>
  <p>6 / 8 glasses</p>
</div>

          <div className="progress-wrapper">
            <div className="progress-bars" style={{ width: "75%" }} />
          </div>
        </div>
      </div>

      <div className="health-cardss">
        <div className="caard-header">
          <h3 className="caard-title">
          Exercise <svg
      className="clock-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
          </h3>
        </div>
        <div className="caard-content">
        <div className="values">
  <p className="labels">Pressure</p>
  <p>3 / 5 days</p>
</div>

          <div className="progress-wrapper">
            <div className="progress-bars" style={{ width: "75%" }} />
          </div>
        </div>
      </div>

      <div className="health-cardss">
        <div className="caard-header">
          <h3 className="caard-title">
          Sleep <svg
      className="clock-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
          </h3>
        </div>
        <div className="caard-content">
        <div className="values">
  <p className="labels">Pressure</p>
  <p>7 / 8 hours</p>
</div>

          <div className="progress-wrapper">
            <div className="progress-bars" style={{ width: "75%" }} />
          </div>
        </div>
      </div>

      

      {/* Add more cards here as needed */}
    </div>

    <h2 className="health-insights-heading">Personalized Recommendations</h2>
    <div className='main-cards'>
    <div className="the-card">
      <div className="the-card-header">
        <h3 className="the-card-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0EA2F1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            // className="icon primary"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          Lower Blood Pressure
        </h3>
        <p className="the-card-description">
          Reduce sodium intake and practice stress management to help with your mild hypertension.
        </p>
      </div>
      <div className="the-card-content">
        <ul className="task-list">
          <li className="task done">
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
              className="check-icon"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            <span>Limit salt intake to less than 2300mg daily</span>
          </li>
          <li className="task pending">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0EA2F1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="alert-icons"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
            <span>Practice 10 minutes of meditation daily</span>
          </li>
          <li className="task done">
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
              className="check-icon"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            <span>Monitor blood pressure 3x weekly</span>
          </li>
        </ul>
      </div>
      <div className="the-card-footer">
        <button className="view-plan-btn">View detailed plan
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
            // className="icon arrow-icon"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
    <div className="action-card">
      <div className="action-card-header">
        <h3 className="action-card-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0EA2F1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            // className="icon droplet-icon"
          >
            <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
          </svg>
          Manage Seasonal Allergies
        </h3>
        <p className="action-card-description">
          Take preventive measures during high pollen seasons to reduce allergy
          symptoms.
        </p>
      </div>
      <div className="action-card-content">
        <ul className="action-list">
          <li className="action-item completed">
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
              // className="icon check-icon"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            <span className="completed-text">Take antihistamine during high pollen count days</span>
          </li>
          <li className="action-item completed">
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
              // className="icon check-icon"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            <span className="completed-text">Keep windows closed during peak pollen times</span>
          </li>
          <li className="action-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0EA2F1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="alert-icons"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
            <span className="action-text">Shower after outdoor activities</span>
          </li>
        </ul>
      </div>
      <div className="action-card-footer">
        <button className="view-plan-btn">
          View detailed plan
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
            // className="icon arrow-icon"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
    </div>

    <h2 className="health-insights-heading">Health Insights</h2>

    <div className="chart-card">
  <div className="chart-card-header">
    <h3 className="chart-card-title">
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
        className="chart-icon"
      >
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
      </svg>
      Weekly Health Trends
    </h3>
  </div>

  <div className="chart-card-content">
    <div className="chart-placeholder">
      <p className="placeholder-text">
        Health trend visualization will appear here
      </p>
    </div>
  </div>
</div>

    </div>
    </div>
  )
}

export default HealthDashboard