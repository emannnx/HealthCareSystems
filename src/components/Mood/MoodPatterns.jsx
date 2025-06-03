import React from 'react';
import { AlertCircle, Info, TrendingUp } from 'lucide-react';
import './MoodPatterns.css';

const MoodPatterns = ({ moodEntries }) => {
  const getDayOfWeek = (date) => {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
  };

  const getMoodByDayPattern = () => {
    const dayMap = {
      Monday: {}, Tuesday: {}, Wednesday: {}, Thursday: {}, Friday: {}, Saturday: {}, Sunday: {},
    };

    moodEntries.forEach(entry => {
      const day = getDayOfWeek(new Date(entry.date));
      dayMap[day][entry.mood] = (dayMap[day][entry.mood] || 0) + 1;
    });

    return Object.entries(dayMap).map(([day, moods]) => {
      if (Object.keys(moods).length === 0) return null;
      const [mood, count] = Object.entries(moods).reduce((a, b) => (b[1] > a[1] ? b : a), ['', 0]);
      return { day, mood, count };
    }).filter(Boolean).filter(p => p.count > 0);
  };

  const getMoodByTimePattern = () => {
    const timeMap = { morning: {}, afternoon: {}, evening: {} };

    moodEntries.forEach(entry => {
      const time = entry.timeOfDay;
      timeMap[time][entry.mood] = (timeMap[time][entry.mood] || 0) + 1;
    });

    return Object.entries(timeMap).map(([time, moods]) => {
      if (Object.keys(moods).length === 0) return { time, mood: null, count: 0 };
      const [mood, count] = Object.entries(moods).reduce((a, b) => (b[1] > a[1] ? b : a), ['', 0]);
      return { time, mood, count };
    });
  };

  const getMoodDistribution = () => {
    const distribution = {};
    moodEntries.forEach(entry => {
      distribution[entry.mood] = (distribution[entry.mood] || 0) + 1;
    });

    return Object.entries(distribution)
      .sort(([, a], [, b]) => b - a)
      .map(([mood, count]) => ({
        mood,
        count,
        percentage: (count / moodEntries.length) * 100,
      }));
  };

  const moodIcons = {
    happy: '😊', sad: '😢', anxious: '😰', tired: '😴', energized: '⚡',
    neutral: '😐', calm: '😌', stressed: '😫', excited: '🤩',
  };

  const dayPatterns = getMoodByDayPattern();
  const timePatterns = getMoodByTimePattern().filter(p => p.mood);
  const moodDistribution = getMoodDistribution();

  if (moodEntries.length < 3) {
    return (
      <div className="mood-text-center mood-py-10">
        <AlertCircle className="mood-icon-muted mood-mb-4" />
        <h3 className="mood-heading">Not Enough Data Yet</h3>
        <p className="mood-muted">Add more mood entries to see patterns and insights about your mood trends.</p>
      </div>
    );
  }

  return (
    <div className="mood-space-y">
      <div className="mood-grid">
        <div className="mood-card mood-highlight">
          <TrendingUp className="mood-icon" />
          <div>
            <h3 className="mood-heading">Your Most Common Mood</h3>
            {moodDistribution.length > 0 && (
              <div className="mood-flex">
                <span className="mood-emoji">{moodIcons[moodDistribution[0].mood]}</span>
                <p className="mood-label">{moodDistribution[0].mood}</p>
                <p className="mood-small">
                  ({Math.round(moodDistribution[0].percentage)}%)
                </p>
              </div>
            )}
          </div>
        </div>

        {dayPatterns.length > 0 && (
          <div className="mood-card mood-highlight">
            <Info className="mood-icon" />
            <div>
              <h3 className="mood-heading">Day of Week Pattern</h3>
              <p className="mood-text">
                You feel most <span className="mood-bold">{dayPatterns[0].mood}</span> on <span className="mood-bold">{dayPatterns[0].day}s</span>.
              </p>
            </div>
          </div>
        )}

        {timePatterns.length > 0 && (
          <div className="mood-card mood-highlight">
            <Info className="mood-icon" />
            <div>
              <h3 className="mood-heading">Time of Day Pattern</h3>
              <p className="mood-text">
                You're typically <span className="mood-bold">{timePatterns[0].mood}</span> in the <span className="mood-bold">{timePatterns[0].time}</span>.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mood-card">
        <h3 className="mood-heading mood-mb-4">Your Mood Distribution</h3>
        <div className="mood-space-y">
          {moodDistribution.map(item => (
            <div key={item.mood}>
              <div className="mood-flex-between">
                <span className="mood-flex">
                  <span>{moodIcons[item.mood]}</span>
                  <span className="mood-label">{item.mood}</span>
                </span>
                <span className="mood-small">{Math.round(item.percentage)}%</span>
              </div>
              <div className="mood-bar-bg">
                <div className="mood-bar-fill" style={{ width: `${item.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodPatterns;
