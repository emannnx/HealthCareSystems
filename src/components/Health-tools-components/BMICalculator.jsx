import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  const [unit, setUnit] = useState('metric');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const handleReset = () => {
    setUnit('metric');
    setWeight('');
    setHeight('');
    setHeightInches('');
    setBmi(null);
    setCategory('');
  };

  const handleCalculate = () => {
    if (!weight || !height || (unit === 'imperial' && !heightInches)) {
      alert('Please enter all required fields.');
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const hInches = parseFloat(heightInches || '0');

    if (w <= 0 || h <= 0 || (unit === 'imperial' && hInches < 0)) {
      alert('Please enter valid positive numbers.');
      return;
    }

    let calculatedBmi = 0;
    if (unit === 'metric') {
      calculatedBmi = w / ((h / 100) * (h / 100));
    } else {
      const totalInches = h * 12 + hInches;
      calculatedBmi = (w / (totalInches * totalInches)) * 703;
    }

    calculatedBmi = parseFloat(calculatedBmi.toFixed(1));
    setBmi(calculatedBmi);

    if (calculatedBmi < 18.5) setCategory('Underweight');
    else if (calculatedBmi < 25) setCategory('Normal weight');
    else if (calculatedBmi < 30) setCategory('Overweight');
    else setCategory('Obesity');
  };

  return (
    <div className="calculator-card" style={{ background: 'white', height: '100%' }}>
      <div className="bmi-card-header">
        <h3 className="bmi-card-title">BMI Calculator</h3>
        <p className="bmi-card-description">Calculate your Body Mass Index</p>
      </div>

      <div className="bmi-card-content">
        <div className="bmi-form-group">
          <label className="unitt">Unit System</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="metric"
                checked={unit === 'metric'}
                onChange={() => {
                  setUnit('metric');
                  setHeightInches('');
                }}
              />
              Metric (kg/cm)
            </label>
            <label>
              <input
                type="radio"
                value="imperial"
                checked={unit === 'imperial'}
                onChange={() => {
                  setUnit('imperial');
                  setHeightInches('');
                }}
              />
              Imperial (lb/ft)
            </label>
          </div>
        </div>

        <div className="bmi-form-group">
          <label className="unitt" htmlFor="weight">
            Weight ({unit === 'metric' ? 'kg' : 'lb'})
          </label>
          <input
            className="inputtttt"
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={`Enter weight in ${unit === 'metric' ? 'kilograms' : 'pounds'}`}
          />
        </div>

        {unit === 'metric' ? (
          <div className="bmi-form-group">
            <label className="unitt" htmlFor="height">Height (cm)</label>
            <input
              className="inputtttt"
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height in centimeters"
            />
          </div>
        ) : (
          <div className="bmi-form-group">
            <label className="unitt">Height (feet + inches)</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                className="inputtttt"
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Feet"
              />
              <input
                className="inputtttt"
                type="number"
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
                placeholder="Inches"
              />
            </div>
          </div>
        )}

{bmi !== null && (
  <div className="calculators-bmi-result">
    <p className="calculators-bmi-label">Your BMI</p>
    <p className="calculators-bmi-value">{bmi}</p>
    <p className={`calculators-bmi-category ${
      category === 'Normal weight' ? 'normal' :
      category === 'Underweight' ? 'underweight' :
      category === 'Overweight' ? 'overweight' : 'obesity'
    }`}>
      {category}
    </p>
  </div>
)}


        <div className="info-boxes">
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
            className="info-icon"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <p style={{ width: '100%', height: 'auto', textAlign: 'left', color: '#1D4ED8' }}>
            BMI is a screening tool but it does not directly measure body fat. Consult a healthcare provider for a complete health assessment.
          </p>
        </div>
      </div>

      <div className="card-footerrr">
        <button className="btns secondary" onClick={handleReset}>
          Reset
        </button>
        <button className="btns primary" onClick={handleCalculate}>
          Calculate BMI
        </button>
      </div>
    </div>
  );
};

export default BMICalculator;
