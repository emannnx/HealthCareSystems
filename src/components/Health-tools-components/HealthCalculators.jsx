import React, { useState } from 'react';
import './HealthCalculators.css';
import BMICalculator from './BMICalculator';
import HeartrateZone from './HeartrateZone';
import CalorieCalculator from './CalorieCalculator';
import { Link } from 'react-router-dom';

const HealthCalculators = () => {
  const [activeTab, setActiveTab] = useState('bmi');

  const tabs = [
    { id: 'bmi', label: 'BMI Calculator' },
    { id: 'heart-rate', label: 'Heart Rate Zones' },
    { id: 'calories', label: 'Calorie Calculator' },
    { id: 'medication', label: 'Medication Dosage' },
  ];

  return (
    <div className="calculators-container">
      <main className="calculators-main-content">
        <div className="calculators-header-section">
          <h1>Health Calculators</h1>
          <p>Useful tools to calculate important health metrics and track your progress.</p>
        </div>

        <div className="calculators-tabs" role="tablist" aria-orientation="horizontal">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          role="tab"
          aria-selected={activeTab === id}
          aria-controls={`content-${id}`}
          className={`calculators-tabs-trigger ${activeTab === id ? 'active' : ''}`}
          onClick={() => setActiveTab(id)}
        >
          {label}
        </button>
      ))}
    </div>

        <div className="calculators-tab-content">
          {activeTab === 'bmi' && <BMICalculator />}
          {activeTab === 'heart-rate' && <HeartrateZone />}
          {activeTab === 'calories' && <CalorieCalculator />}
          {activeTab === 'medication' && (
            <div className="calculators-card">
              <div className="calculators-card-header">
                <h2>Medication Dosage Calculator</h2>
                <p>Calculate proper medication dosages based on weight and condition</p>
              </div>
              <div className="calculators-card-warning">
                <p><strong>⚠️ Important Medical Disclaimer</strong></p>
                <p>This calculator is for educational purposes only. Always consult with your healthcare provider or pharmacist for proper medication dosing. Never adjust medication doses without professional medical guidance.</p>
              </div>
              <div className="calculators-card-content">
                <p>This feature requires medical supervision and will be available in future updates with proper safety measures.</p>
              </div>
              <div className="calculators-card-footer">
                <p>Contact your healthcare provider for medication dosing questions.</p>
              </div>
            </div>
          )}
        </div>

        <div className="calculators-more-tools">
          <h2>More Health Tools</h2>
          <div className="calculators-tools-grid">
            <Link to="/symptom-checker" className="calculators-tool-link">
              <p className="calculators-tool-title">Symptom Checker</p>
              <p className="calculators-tool-desc">Identify possible conditions based on symptoms</p>
            </Link>
            <Link to="/nutrition-guide" className="calculators-tool-link">
              <p className="calculators-tool-title">Nutrition Guide</p>
              <p className="calculators-tool-desc">Learn about healthy eating and meal planning</p>
            </Link>
            <Link to="/exercise-library" className="calculators-tool-link">
              <p className="calculators-tool-title">Exercise Library</p>
              <p className="calculators-tool-desc">Browse our collection of exercises and workouts</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HealthCalculators;
