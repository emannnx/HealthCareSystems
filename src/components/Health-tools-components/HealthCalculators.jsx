import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import './HealthCalculators.css';
import './BMICalculator.css';
import BMICalculator from './BMICalculator';
import HeartrateZone from './HeartrateZone';

const HealthCalculators = () => {
  return (
    <div className="health-calculators-container">
      <h1 className="health-calculators-title">Health Calculators</h1>
      <p className="health-calculators-description">
        Useful tools to calculate important health metrics and track your progress.
      </p>

      <div className="mee">
        <BMICalculator />
        <HeartrateZone />
      </div>

      <div className="more-health-tools-container">
        <h2 className="section-title">More Health Tools</h2>
        <div className="tools-grid">
          <Link className="tool-card" to="/symptom-checker">
            <p className="tool-title">Symptom Checker</p>
            <p className="tool-description">Identify possible conditions based on symptoms</p>
          </Link>

          {/* <Link className="tool-card" to="/nutrition-guide">
            <p className="tool-title">Nutrition Guide</p>
            <p className="tool-description">Learn about healthy eating and meal planning</p>
          </Link> */}

          <Link className="tool-card" to="/exercise-library">
            <p className="tool-title">Exercise Library</p>
            <p className="tool-description">Browse our collection of exercises and workouts</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthCalculators;
