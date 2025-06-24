import React, { useState } from 'react';
import { Calendar } from './Calendar';
import { Card, CardContent } from './Card';

const MoodCalendar = ({ moodEntries }) => {
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const getEntryForDate = (date) => {
    if (!date) return null;
    return (
      moodEntries.find(
        (entry) =>
          new Date(entry.date).toDateString() === new Date(date).toDateString()
      ) || null
    );
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedEntry(getEntryForDate(date));
  };

  const getMoodColor = (mood) => {
    switch (mood) {
      case 'happy':
        return 'mood-bg-green';
      case 'sad':
        return 'mood-bg-blue';
      case 'anxious':
        return 'mood-bg-amber';
      case 'tired':
        return 'mood-bg-gray';
      case 'energized':
        return 'mood-bg-yellow';
      case 'neutral':
        return 'mood-bg-lightgray';
      case 'calm':
        return 'mood-bg-teal';
      case 'stressed':
        return 'mood-bg-red';
      case 'excited':
        return 'mood-bg-purple';
      default:
        return 'mood-bg-default';
    }
  };

  const decorateDay = (date) => {
    const entry = moodEntries.find(
      (e) => new Date(e.date).toDateString() === date.toDateString()
    );
    if (!entry) return {};
    return {
      className: 'mood-calendar-dot-wrapper',
      children: (
        <div
          className={`mood-calendar-dot ${getMoodColor(entry.mood)}`}
        />
      ),
    };
  };

  const getMoodEmoji = (mood) => {
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

  return (
    <div className="mood-calendar-wrapper">
      <div className="mood-calendar-panel">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          className="mood-calendar"
          modifiers={{
            booked: moodEntries.map((e) => new Date(e.date)),
          }}
          modifiersStyles={{
            booked: {
              fontWeight: 'bold',
            },
          }}
          components={{
            DayContent: (props) => {
              const dateIsInEntries = moodEntries.some(
                (entry) =>
                  new Date(entry.date).toDateString() ===
                  props.date.toDateString()
              );
              if (!dateIsInEntries) return <>{props.date.getDate()}</>;

              return (
                <div>
                  {props.date.getDate()}
                  {decorateDay(props.date).children}
                </div>
              );
            },
          }}
        />
      </div>

      <div className="mood-entry-panel">
        {selectedEntry ? (
          <Card>
            <CardContent className="mood-card-content">
              <div className="mood-entry-details">
                <span className="mood-emoji">{getMoodEmoji(selectedEntry.mood)}</span>
                <div className="mood-entry-text">
                  <div className="mood-entry-header">
                    <h3 className="mood-entry-mood">{selectedEntry.mood}</h3>
                    <p className="mood-entry-meta">
                      {new Date(selectedEntry.date).toLocaleDateString()} •{' '}
                      {selectedEntry.timeOfDay}
                    </p>
                  </div>
                  {selectedEntry.note ? (
                    <p className="mood-note">{selectedEntry.note}</p>
                  ) : (
                    <p className="mood-note-empty">No note added</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ) : selectedDate ? (
          <div className="mood-entry-placeholder">
            <p className="mood-muted">No mood entry for</p>
            <p className="mood-date">{selectedDate.toLocaleDateString()}</p>
          </div>
        ) : (
          <div className="mood-entry-placeholder">
            <p className="mood-muted">Select a date to see your mood entry</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodCalendar;
