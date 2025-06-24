import React from 'react';
import './MoodTracker.css';
import moodImage from '../assets/mood-illustration.png';

const MoodTracker = () => {
  return (
    <div className="mood-tracker-container">
      <header className="tracker-header">
        <h1>🧠 Mood Tracker</h1>
        <p className="tracker-sub">Exclusive to our app</p>
      </header>

      <section className="mood-visual-section">
      <img src={moodImage} alt="Mood Visual" />
      </section>

      <section className="download-banner">
  <p className="bannner-text">
    📲 Download the app to log your mood daily and stay emotionally aware.
  </p>
  <button className="download-button">
    Download Now
  </button>
</section>

    </div>
  );
};

export default MoodTracker;
