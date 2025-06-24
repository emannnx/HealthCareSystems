import React from 'react';
import './MoodSelector.css'; // Make sure to create this CSS file

const MoodSelector = ({ selectedMood, setSelectedMood }) => {
  const moods = [
    { type: 'happy', emoji: '😊', label: 'Happy' },
    { type: 'sad', emoji: '😢', label: 'Sad' },
    { type: 'anxious', emoji: '😰', label: 'Anxious' },
    { type: 'tired', emoji: '😴', label: 'Tired' },
    { type: 'energized', emoji: '⚡', label: 'Energized' },
    { type: 'neutral', emoji: '😐', label: 'Neutral' },
    { type: 'calm', emoji: '😌', label: 'Calm' },
    { type: 'stressed', emoji: '😫', label: 'Stressed' },
    { type: 'excited', emoji: '🤩', label: 'Excited' }
  ];

  return (
    <div className="mmood-grid">
      {moods.map((mood) => (
        <button
          key={mood.type}
          onClick={() => setSelectedMood(mood.type)}
          className={`mmood-button ${selectedMood === mood.type ? 'mmood-button--active' : ''}`}
        >
          <span className="mmood-emoji">{mood.emoji}</span>
          <span className="mmood-label">{mood.label}</span>
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;
