import React, { useState } from 'react';
import { Heart, Activity } from 'lucide-react';
import './HeartrateZone.css';

const HeartrateZone = () => {
  const [age, setAge] = useState('');
  const [restingHR, setRestingHR] = useState('');
  const [zones, setZones] = useState(null);

  const calculateZones = () => {
    if (!age) return;

    const ageNum = parseInt(age);
    const restingNum = parseInt(restingHR) || 60;
    const maxHR = 220 - ageNum;
    const hrReserve = maxHR - restingNum;

    const calculatedZones = {
      maxHR,
      restingHR: restingNum,
      zones: [
        {
          name: 'Active Recovery',
          range: '50–60%',
          bpm: `${Math.round(restingNum + hrReserve * 0.5)}–${Math.round(restingNum + hrReserve * 0.6)}`,
          description: 'Very light activity, promotes recovery',
        },
        {
          name: 'Aerobic Base',
          range: '60–70%',
          bpm: `${Math.round(restingNum + hrReserve * 0.6)}–${Math.round(restingNum + hrReserve * 0.7)}`,
          description: 'Light intensity, builds aerobic base',
        },
        {
          name: 'Aerobic',
          range: '70–80%',
          bpm: `${Math.round(restingNum + hrReserve * 0.7)}–${Math.round(restingNum + hrReserve * 0.8)}`,
          description: 'Moderate intensity, improves efficiency',
        },
        {
          name: 'Lactate Threshold',
          range: '80–90%',
          bpm: `${Math.round(restingNum + hrReserve * 0.8)}–${Math.round(restingNum + hrReserve * 0.9)}`,
          description: 'Hard intensity, lactate threshold training',
        },
        {
          name: 'Neuromuscular Power',
          range: '90–100%',
          bpm: `${Math.round(restingNum + hrReserve * 0.9)}–${maxHR}`,
          description: 'Very hard intensity, anaerobic power',
        },
      ],
    };

    setZones(calculatedZones);
  };

  return (
    <div className="heartrate-card">
      <div className="heartrate-card-header">
        <h2><Heart className="heartrate-icon" /> Heart Rate Zones Calculator</h2>
        <p>Calculate your target heart rate zones for optimal training</p>
      </div>

      <div className="heartrate-input-group">
        <div className="heartrate-input-field">
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={age}
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="heartrate-input-field">
          <label htmlFor="resting">Resting Heart Rate (optional)</label>
          <input
            id="resting"
            type="number"
            value={restingHR}
            placeholder="60"
            onChange={(e) => setRestingHR(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={calculateZones}
        className="heartrate-button"
        disabled={!age}
      >
        <Activity className="heartrate-icon" /> Calculate Heart Rate Zones
      </button>

      {zones && (
        <div className="heartrate-results">
          <div className="heartrate-summary">
            <h3>Your Heart Rate Profile</h3>
            <div className="heartrate-summary-values">
              <p>Maximum Heart Rate: <strong>{zones.maxHR} bpm</strong></p>
              <p>Resting Heart Rate: <strong>{zones.restingHR} bpm</strong></p>
            </div>
          </div>

          <div className="heartrate-zones">
            <h3>Training Zones</h3>
            {zones.zones.map((zone, i) => (
              <div key={i} className="heartrate-zone-card">
                <div className="heartrate-zone-header">
                  <span className="heartrate-zone-name">{zone.name}</span>
                  <span className="heartrate-zone-range">{zone.range}</span>
                </div>
                <div className="heartrate-zone-bpm">{zone.bpm} bpm</div>
                <div className="heartrate-zone-desc">{zone.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeartrateZone;
