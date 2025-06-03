import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MoodSelector from './MoodSelector';
import MoodCalendar from './MoodCalendar';
import MoodStreak from './MoodStreak';
import MoodSuggestion from './MoodSuggestion';
import MoodRecap from './MoodRecap';
import MoodPatterns from './MoodPatterns';
import { useToast } from './UseToast';
import { useAuth } from '../AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './Card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';
import { Button } from './Button';
import { Calendar, Clock, BarChart, LineChart, MessageSquare } from 'lucide-react';
import './MoodTracker.css';

const MoodTracker = () => {
  const { isAuthenticated, user } = useAuth();

  console.log('MoodTracker - Authenticated:', isAuthenticated);

  const navigate = useNavigate();
  const { toast } = useToast();

  const [activeTab, setActiveTab] = useState('today');
  const [moodEntries, setMoodEntries] = useState([
    {
      id: '1',
      mood: 'happy',
      note: 'Had a great workout today!',
      date: new Date(),
      timeOfDay: 'morning'
    },
    {
      id: '2',
      mood: 'tired',
      note: 'Woke up tired. Too much scrolling last night.',
      date: new Date(Date.now() - 86400000),
      timeOfDay: 'morning'
    },
    {
      id: '3',
      mood: 'energized',
      note: 'Productive day at work',
      date: new Date(Date.now() - 86400000 * 2),
      timeOfDay: 'afternoon'
    },
    {
      id: '4',
      mood: 'anxious',
      note: 'Big presentation tomorrow',
      date: new Date(Date.now() - 86400000 * 3),
      timeOfDay: 'evening'
    }
  ]);

  const [currentStreak, setCurrentStreak] = useState(3);
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodNote, setMoodNote] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/?auth=login');
    }
  }, [isAuthenticated, navigate]);

//   if (!isAuthenticated || !user) return null;

  const handleMoodSubmit = () => {
    if (!selectedMood) {
      toast({
        title: "Please select a mood",
        description: "Select how you're feeling today",
        variant: "destructive",
      });
      return;
    }

    const newEntry = {
      id: Date.now().toString(),
      mood: selectedMood,
      note: moodNote,
      date: new Date(),
      timeOfDay: getTimeOfDay(),
    };

    setMoodEntries([newEntry, ...moodEntries]);
    setCurrentStreak(currentStreak + 1);
    toast({ title: "Mood logged successfully!", description: "Keep up the streak!" });
    setSelectedMood(null);
    setMoodNote('');
  };

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
  };

  return (
    <div className="mood-tracker-container">
      <main className="mood-main">
        <div className="mood-content">
          <div className="mood-header">
            <div>
              <h1 className="mood-title">Mood Tracker</h1>
              <p className="mood-subtitle">Track your mood patterns and build healthy habits</p>
            </div>
            <MoodStreak streak={currentStreak} />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="today"><MessageSquare /> Today's Mood</TabsTrigger>
              <TabsTrigger value="calendar"><Calendar /> Mood Calendar</TabsTrigger>
              <TabsTrigger value="patterns"><BarChart /> Mood Patterns</TabsTrigger>
              <TabsTrigger value="recap"><LineChart /> Weekly Recap</TabsTrigger>
            </TabsList>

            <TabsContent value="today">
              <Card className="mood-card">
                <CardHeader>
                  <CardTitle><Clock /> How are you feeling today?</CardTitle>
                  <CardDescription>Select your mood and add an optional note</CardDescription>
                </CardHeader>
                <CardContent>
                  <MoodSelector selectedMood={selectedMood} setSelectedMood={setSelectedMood} />
                  <textarea
                    className="mood-textarea"
                    placeholder="Add a note... (optional)"
                    value={moodNote}
                    onChange={(e) => setMoodNote(e.target.value)}
                  />
                </CardContent>
                <CardFooter>
                  <Button onClick={handleMoodSubmit}>Log My Mood</Button>
                </CardFooter>
              </Card>

              {selectedMood && <MoodSuggestion mood={selectedMood} />}

              {moodEntries.length > 0 && (
                <Card className="mood-card">
                  <CardHeader><CardTitle>Recent Entries</CardTitle></CardHeader>
                  <CardContent>
                    <div className="mood-entries">
                      {moodEntries.slice(0, 3).map(entry => (
                        <div key={entry.id} className="mood-entry">
                          <div className="mood-icon">
                            {entry.mood === 'happy' && '😊'}
                            {entry.mood === 'sad' && '😢'}
                            {entry.mood === 'anxious' && '😰'}
                            {entry.mood === 'tired' && '😴'}
                            {entry.mood === 'energized' && '⚡'}
                            {entry.mood === 'neutral' && '😐'}
                            {entry.mood === 'calm' && '😌'}
                            {entry.mood === 'stressed' && '😫'}
                            {entry.mood === 'excited' && '🤩'}
                          </div>
                          <div className="mood-entry-details">
                            <div className="mood-entry-top">
                              <p className="mood-label">{entry.mood}</p>
                              <p className="mood-date">{new Date(entry.date).toLocaleDateString()}</p>
                            </div>
                            {entry.note && <p className="mood-note">{entry.note}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="calendar">
              <Card className="mood-card">
                <CardHeader>
                  <CardTitle><Calendar /> Mood Calendar</CardTitle>
                  <CardDescription>View your mood history</CardDescription>
                </CardHeader>
                <CardContent><MoodCalendar moodEntries={moodEntries} /></CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="patterns">
              <Card className="mood-card">
                <CardHeader>
                  <CardTitle><BarChart /> Mood Patterns</CardTitle>
                  <CardDescription>Insights from your mood logs</CardDescription>
                </CardHeader>
                <CardContent><MoodPatterns moodEntries={moodEntries} /></CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recap">
              <Card className="mood-card">
                <CardHeader>
                  <CardTitle><LineChart /> Weekly Recap</CardTitle>
                  <CardDescription>Your mood summary for the week</CardDescription>
                </CardHeader>
                <CardContent>
                  <MoodRecap moodEntries={moodEntries.slice(0, 7)} streak={currentStreak} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default MoodTracker;
