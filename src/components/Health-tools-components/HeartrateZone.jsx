import React from 'react';
import './HeartrateZone.css';

export default function HeartrateZone() {
  return (
    <div className="health-calculators">
      <div className="heart-card">
        <div className="heart-card-header">
          <h3 className="heart-card-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="heart-icon">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            Heart Rate Zones
          </h3>
          <div className='heart-card-des-div'>
          <p className="heart-card-description">Calculate proper medication dosages</p>
          <p className="heart-card-description">Coming Soon</p>
          <p className="heart-card-description">Helps to optimize workout intensity </p>
          </div>        </div>
      </div>

      {/* Calorie Calculator */}
      <div className="heart-card">
        <div className="heart-card-header">
          <h3 className="heart-card-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="heart-icon">
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
            </svg>
            Calorie Calculator
          </h3>
          <div className='heart-card-des-div'>
          <p className="heart-card-description">Estimate your daily caloric needs</p>
          <p className="heart-card-description">Coming soon</p>
          <p className="heart-card-description">Based on your activity level and goals</p>
          </div>        
          </div>
      </div>

      {/* Medication Dosage */}
      <div className="heart-card">
        <div className="heart-card-header">
          <h3 className="heart-card-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="heart-icon">
              <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path>
              <path d="m8.5 8.5 7 7"></path>
            </svg>
            Medication Dosage
          </h3>
        <div className='heart-card-des-div'>
          <p className="heart-card-description">Calculate proper medication dosages</p>
          <p className="heart-card-description">Coming soon</p>
          <p className="heart-card-description">Always consult with your healthcare provider</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
