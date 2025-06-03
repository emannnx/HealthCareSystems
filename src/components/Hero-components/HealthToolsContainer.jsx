import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HealthToolsContainer.css';
import { useDarkMode } from '../DarkModeContext';

const HealthToolsContainer = () => {
  const { darkMode: isDarkMode } = useDarkMode();
  return (
    <div>
      <div className={`health-tools-container ${isDarkMode ? 'dark' : ''}`}>
        <h2 className="health-tools-title">Powerful Health Tools</h2>
        <p className="health-tools-description">
          Discover our complete suite of tools designed to help you manage and improve your health.
        </p>
      </div>
      <div className={`feature-grid-wrapper ${isDarkMode ? 'dark' : ''}`}>
        <div className="feature-grid">
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pie-chart-icon"
            >
              <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
            </svg>
            <h3 className="feature-title">Health Calculators</h3>
            <p className="feature-description">
              Calculate key health metrics like BMI, calorie needs, target heart rate, and more.
            </p>
            <Link to="/health-calculators" className="feature-link">
              Try calculators
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow-right-icon"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="file-text-icon"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
            <h3 className="feature-title">Symptom Checker</h3>
            <p className="feature-description">
              Identify possible causes of your symptoms and get guidance on next steps.
            </p>
            <Link to="/symptom-checker" className="feature-link">
              Check symptoms
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow-right-icon"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="user-icon"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <h3 className="feature-title">Personal Health Dashboard</h3>
            <p className="feature-description">
              Track your health journey with personalized recommendations and progress monitoring.
            </p>
            <Link to="/health-dashboard" className="feature-link">
              View dashboard
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow-right-icon"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HealthToolsContainer;
