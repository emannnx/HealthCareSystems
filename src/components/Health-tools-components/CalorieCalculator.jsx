import React, { useState } from 'react';
import './CalorieCalculator.css'; // Assuming you have a CSS file for styling
import { Utensils, Activity } from 'lucide-react';

const CalorieCalculator = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    height: '',
    weight: '',
    activityLevel: ''
  });
  const [results, setResults] = useState(null);

  const calculateCalories = () => {
    if (!formData.age || !formData.gender || !formData.height || !formData.weight || !formData.activityLevel) return;

    const age = parseInt(formData.age);
    const height = parseInt(formData.height);
    const weight = parseInt(formData.weight);

    let bmr;
    if (formData.gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9
    };

    const tdee = Math.round(bmr * activityMultipliers[formData.activityLevel]);

    setResults({
      bmr: Math.round(bmr),
      tdee,
      weightLoss: {
        mild: tdee - 250,
        moderate: tdee - 500,
        aggressive: tdee - 750
      },
      weightGain: {
        mild: tdee + 250,
        moderate: tdee + 500
      }
    });
  };

  return (
    <div className="calorie-card">
      <div className="calorie-header">
        <h2 className="calorie-title"> <Utensils/> Daily Calorie Calculator</h2>
        <p className="calorie-description">Calculate your daily caloric needs based on your goals</p>
      </div>
      <div className="calorie-form">
        <div className="calorie-grid">
          <div className="calorie-field">
            <label htmlFor="age">Age (years)</label>
            <input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              placeholder="Enter your age"
            />
          </div>
          <div className="calorie-field">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="calorie-field">
            <label htmlFor="height">Height (cm)</label>
            <input
              id="height"
              type="number"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
              placeholder="170"
            />
          </div>
          <div className="calorie-field">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              id="weight"
              type="number"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              placeholder="70"
            />
          </div>
        </div>

        <div className="calorie-field">
          <label htmlFor="activity">Activity Level</label>
          <select
            id="activity"
            value={formData.activityLevel}
            onChange={(e) => setFormData({ ...formData, activityLevel: e.target.value })}
          >
            <option value="">Select your activity level</option>
            <option value="sedentary">Sedentary (little/no exercise)</option>
            <option value="light">Light (1–3 days/week)</option>
            <option value="moderate">Moderate (3–5 days/week)</option>
            <option value="active">Active (6–7 days/week)</option>
            <option value="very_active">Very Active (hard physical job)</option>
          </select>
        </div>

        {/* <button onClick={calculateCalories} className="calorie-button">
          Calculate Daily Calories
        </button> */}

        <button
        onClick={calculateCalories}
        className="heartrate-button"
      >
        <Activity className="heartrate-icon" /> Calculate Heart Rate Zones
      </button>

        {results && (
          <div className="calorie-results">
            <div className="calorie-box">
              <h3>BMR (Resting)</h3>
              <p className="calorie-value">{results.bmr} calories/day</p>
              <span className="calorie-note">Calories needed at rest</span>
            </div>

            <div className="calorie-box">
              <h3>TDEE (Maintenance)</h3>
              <p className="calorie-value">{results.tdee} calories/day</p>
              <span className="calorie-note">To maintain weight</span>
            </div>

            <div className="calorie-goals">
              <div className="calorie-goal-box">
                <h4>Weight Loss Goals</h4>
                <p>Mild (0.25 kg/week): {results.weightLoss.mild} cal/day</p>
                <p>Moderate (0.5 kg/week): {results.weightLoss.moderate} cal/day</p>
                <p>Aggressive (0.75 kg/week): {results.weightLoss.aggressive} cal/day</p>
              </div>
              <div className="calorie-goal-box">
                <h4>Weight Gain Goals</h4>
                <p>Mild (0.25 kg/week): {results.weightGain.mild} cal/day</p>
                <p>Moderate (0.5 kg/week): {results.weightGain.moderate} cal/day</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalorieCalculator;
