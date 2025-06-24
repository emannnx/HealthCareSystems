// CallToAction.jsx
import React from 'react';
import './CallToAction.css';
import { useDarkMode } from '../DarkModeContext';

const CallToAction = ({ onOpenAuth }) => {
  const { darkMode: isDarkMode } = useDarkMode();

  return (
    <section className={`call-to-action ${isDarkMode ? 'dark' : ''}`}>
      <div className="cta-content">
        <h2 className="cta-title">Take control of your health today</h2>
        <p className="cta-subtitle">
          Join thousands of users who have transformed their health journey with HealthHub.
        </p>
        <div className="cta-buttons">
          <div className="button-wrappers">
            <button className="btns btns-primary" onClick={() => onOpenAuth("register")}>
              Create free account
            </button>
          </div>
          <div className="button-wrapper ml">
            <a href="/health-topics" className="btns btns-secondary">
              Browse health topics
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
