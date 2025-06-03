import React from 'react';
import { Card, CardContent } from './Card';
import { BarChart, Quote, Flame } from 'lucide-react';


const MoodRecap = ({ moodEntries, streak }) => {
  const getWeekSummary = () => {
    const distribution = {};

    moodEntries.forEach((entry) => {
      if (!distribution[entry.mood]) {
        distribution[entry.mood] = 1;
      } else {
        distribution[entry.mood]++;
      }
    });

    return Object.entries(distribution)
      .sort(([, countA], [, countB]) => countB - countA)
      .map(([mood, count]) => ({
        mood,
        count
      }));
  };

  const getBestQuote = () => {
    const entriesWithNotes = moodEntries.filter(
      (entry) => entry.note && entry.note.trim() !== ''
    );
    return entriesWithNotes.length ? entriesWithNotes[0] : null;
  };

  const getEmoji = (mood) => {
    switch (mood) {
      case 'happy':
        return '😊';
      case 'sad':
        return '😢';
      case 'anxious':
        return '😰';
      case 'tired':
        return '😴';
      case 'energized':
        return '⚡';
      case 'neutral':
        return '😐';
      case 'calm':
        return '😌';
      case 'stressed':
        return '😫';
      case 'excited':
        return '🤩';
      default:
        return '😐';
    }
  };

  const weekSummary = getWeekSummary();
  const bestQuote = getBestQuote();

  if (moodEntries.length === 0) {
    return (
      <div className="mood-recap-empty">
        <p className="mood-text-muted">No mood entries to recap this week</p>
      </div>
    );
  }

  return (
    <div className="mood-recap-container">
      <Card>
        <CardContent className="mood-card-content">
          <div className="mood-section">
            <BarChart className="mood-icon" />
            <div>
              <h3 className="mood-title">7-Day Mood Pattern</h3>
              <p className="mood-summary">
                {weekSummary.map((item, index) => (
                  <React.Fragment key={item.mood}>
                    <span className="mood-summary-count">{item.count}</span>
                    <span> {item.count === 1 ? 'day' : 'days'} feeling </span>
                    <span className="mood-summary-label">{item.mood}</span>
                    {index < weekSummary.length - 1 && <span>, </span>}
                  </React.Fragment>
                ))}
              </p>
              <div className="mood-week-grid">
                {Array(7)
                  .fill(0)
                  .map((_, i) => {
                    const entry = i < moodEntries.length ? moodEntries[i] : null;
                    return (
                      <div
                        key={i}
                        className={`mood-day-box ${
                          entry ? 'mood-day-filled' : 'mood-day-empty'
                        }`}
                      >
                        {entry ? (
                          <span className="mood-day-emoji">{getEmoji(entry.mood)}</span>
                        ) : (
                          <span className="mood-day-placeholder">No data</span>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {bestQuote && (
        <Card>
          <CardContent className="mood-card-content">
            <div className="mood-section">
              <Quote className="mood-icon" />
              <div>
                <h3 className="mood-title">Highlight of the Week</h3>
                <blockquote className="mood-quote">
                  "{bestQuote.note}"
                </blockquote>
                <div className="mood-quote-date">
                  <span className="mood-text-muted">
                    {new Date(bestQuote.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="mood-card-content">
          <div className="mood-section">
            <Flame className="mood-icon mood-orange" />
            <div>
              <h3 className="mood-title">Streak Status</h3>
              <p className="mood-text">
                {streak > 0 ? (
                  <>
                    You're on a <span className="mood-bold">{streak}-day streak</span> of
                    logging your mood. Keep it up!
                  </>
                ) : (
                  <>Start a new streak by logging your mood today!</>
                )}
              </p>
              <div className="mood-streak-bars">
                {Array(7)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className={`mood-streak-bar ${
                        i < streak ? 'mood-streak-filled' : 'mood-streak-empty'
                      }`}
                    />
                  ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoodRecap;
