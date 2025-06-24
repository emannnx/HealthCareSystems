import React from 'react';
import { Flame } from 'lucide-react';
import './MoodStreak.css';

const MoodStreak = ({ streak }) => {
  return (
    <div className="mmood-streak-container">
      <Flame className={`mmood-streak-icon ${streak > 0 ? 'mmood-streak-icon--active' : 'mmood-streak-icon--inactive'}`} />
      <div>
        <span className="mmood-streak-count">{streak}</span>
        <span className="mmood-streak-label">day streak</span>
      </div>
    </div>
  );
};

export default MoodStreak;
