import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import './Mood.css';

const MoodSuggestion = ({ mood }) => {
  const [suggestion, setSuggestion] = useState('');

  const moodSuggestions = {
    happy: [
      "Take a moment to appreciate what's going well in your life.",
      "Share your positive energy with someone today.",
      "Your positive state can help you tackle that challenging task you've been postponing.",
      "Remember this feeling by writing down what contributed to your happiness today.",
      "Happiness is contagious - spread the joy to others today.",
    ],
    sad: [
      "It's okay to feel down sometimes. Be gentle with yourself today.",
      "Try going for a short walk outside to lift your spirits.",
      "Consider reaching out to a friend or family member for support.",
      "Deep breathing for just 2 minutes can help relieve some sadness.",
      "List three simple things you're grateful for, even on hard days.",
    ],
    anxious: [
      "Try box breathing: Inhale for 4, hold for 4, exhale for 4, hold for 4. Repeat.",
      "Ground yourself by naming 5 things you see, 4 things you feel, 3 things you hear, 2 things you smell, and 1 thing you taste.",
      "Write down what's causing your anxiety to externalize your thoughts.",
      "Progressive muscle relaxation can help - tense and then release each muscle group.",
      "Remember that most of what we worry about never happens.",
    ],
    tired: [
      "Consider a 20-minute power nap to recharge if possible.",
      "Hydrate - tiredness is often a sign of mild dehydration.",
      "Step outside for 5 minutes - fresh air can boost your energy.",
      "Try a quick stretching routine to get your blood flowing.",
      "Consider your sleep routine. Could you improve your sleep hygiene?",
    ],
    energized: [
      "You're on a roll! Schedule your hardest task now.",
      "Channel this energy into something productive that you've been putting off.",
      "Use this energy boost to plan or organize something that requires focus.",
      "Physical activity right now could be extra effective and enjoyable.",
      "Share your positive energy by helping someone else today.",
    ],
    neutral: [
      "This balanced state is perfect for mindfulness practice.",
      "Consider what would make today slightly better and take a small step toward it.",
      "Neutral days are good for reflection - what's been working well lately?",
      "Sometimes a neutral mood is the perfect time to tackle routine tasks.",
      "Try something new today - even something small can add a positive spark.",
    ],
    calm: [
      "This peaceful state is ideal for creative thinking or planning.",
      "Use this calmness for decisions you've been postponing.",
      "Enhance this state with a few minutes of meditation.",
      "Capture this feeling by journaling about what brings you peace.",
      "Your calm state can help others - consider connecting with someone who needs support.",
    ],
    stressed: [
      "Take three deep breaths right now, focusing only on your breathing.",
      "Break down what's stressing you into smaller, manageable parts.",
      "Step away briefly and change your environment for a fresh perspective.",
      "Physical movement, even for 5 minutes, can reduce stress hormones.",
      "Ask yourself: 'Will this matter in a month? A year? Five years?'",
    ],
    excited: [
      "Channel this excitement into something creative or productive.",
      "Share your enthusiasm with others - positive energy is contagious.",
      "Document this moment - excited states are great for inspiration later.",
      "Set a small goal to accomplish while your motivation is high.",
      "Use this energy to tackle something challenging that you've been avoiding.",
    ],
  };

  useEffect(() => {
    if (mood && moodSuggestions[mood]) {
      const suggestions = moodSuggestions[mood];
      const randomIndex = Math.floor(Math.random() * suggestions.length);
      setSuggestion(suggestions[randomIndex]);
    }
  }, [mood]);

  return (
    <div className="mood-card">
      <div className="mood-card-content">
        <div className="mood-flex">
          <Sparkles className="mood-icon" />
          <div>
            <h3 className="mood-heading">Suggestion for when you're feeling {mood}</h3>
            <p className="mood-text">{suggestion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodSuggestion;
