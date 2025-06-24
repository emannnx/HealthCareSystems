// Converted to JSX and plain CSS with `exercise-` className prefixes
import React, { useState } from 'react';
import { Search, Play, Clock, Target, Dumbbell} from 'lucide-react';
import "./ExerciseLibrary.css"; // Assuming you have a CSS file for stylingq

const ExerciseLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');

  const exercises = [
    {
      id: 1,
      name: 'Walking',
      category: 'Cardio',
      duration: '30 minutes',
      difficulty: 'Beginner',
      conditions: ['Heart Disease', 'Diabetes', 'Arthritis', 'General Fitness'],
      description: 'Low-impact cardiovascular exercise suitable for most fitness levels',
      benefits: ['Improves cardiovascular health', 'Low impact on joints', 'Easy to start'],
      instructions: ['Start with 10-15 minutes', 'Maintain a comfortable pace', 'Gradually increase duration', 'Focus on proper posture']
    },
    {
      id: 2,
      name: 'Chair Exercises',
      category: 'Strength',
      duration: '20 minutes',
      difficulty: 'Beginner',
      conditions: ['Arthritis', 'Limited Mobility', 'Senior Fitness'],
      description: 'Strength training exercises that can be performed while seated',
      benefits: ['Builds muscle strength', 'Improves flexibility', 'Safe for limited mobility'],
      instructions: ['Sit up straight in chair', 'Perform arm circles', 'Do seated marches', 'Add resistance bands if available']
    },
    {
      id: 3,
      name: 'Swimming',
      category: 'Cardio',
      duration: '45 minutes',
      difficulty: 'Intermediate',
      conditions: ['Arthritis', 'Back Pain', 'Heart Disease'],
      description: 'Full-body, low-impact exercise in water',
      benefits: ['Full body workout', 'Joint-friendly', 'Builds endurance'],
      instructions: ['Start with 15-20 minutes', 'Alternate strokes', 'Include rest periods', 'Stay hydrated']
    },
    {
      id: 4,
      name: 'Resistance Band Training',
      category: 'Strength',
      duration: '25 minutes',
      difficulty: 'Beginner',
      conditions: ['Diabetes', 'Osteoporosis', 'General Fitness'],
      description: 'Strength training using elastic resistance bands',
      benefits: ['Builds muscle strength', 'Improves bone density', 'Portable equipment'],
      instructions: ['Choose appropriate resistance', 'Control the movement', 'Focus on form', 'Breathe properly']
    },
    {
      id: 5,
      name: 'Yoga',
      category: 'Flexibility',
      duration: '30 minutes',
      difficulty: 'Beginner',
      conditions: ['Anxiety', 'Back Pain', 'Arthritis', 'Stress'],
      description: 'Mind-body practice combining physical poses, breathing, and meditation',
      benefits: ['Improves flexibility', 'Reduces stress', 'Enhances balance'],
      instructions: ['Start with basic poses', 'Focus on breathing', 'Listen to your body', 'Use props if needed']
    },
    {
      id: 6,
      name: 'Cycling',
      category: 'Cardio',
      duration: '45 minutes',
      difficulty: 'Intermediate',
      conditions: ['Heart Disease', 'Diabetes', 'Weight Management'],
      description: 'Low-impact cardiovascular exercise on stationary or regular bike',
      benefits: ['Builds leg strength', 'Improves cardiovascular health', 'Low joint impact'],
      instructions: ['Adjust seat height properly', 'Start at comfortable pace', 'Gradually increase intensity', 'Stay hydrated']
    }
  ];

  const conditions = ['Heart Disease', 'Diabetes', 'Arthritis', 'Back Pain', 'Anxiety', 'Osteoporosis', 'Limited Mobility', 'Senior Fitness', 'General Fitness', 'Weight Management', 'Stress'];

  const filteredExercises = exercises.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCondition = selectedCondition === '' || exercise.conditions.includes(selectedCondition);
    return matchesSearch && matchesCondition;
  });

  return (
    <div className="exercise-container">
      <div className="exercise-header text-center exercise-mb-8">
  <h1 className="exercise-title">Exercise Library</h1>
  <p className="exercise-subtitle">
    Discover exercises and workouts tailored to your health needs and fitness level.
  </p>
</div>


<div className="exercise-search-block">
  <div className="exercise-search-bar">
    <div className="exercise-search-input-wrapper">
      <svg
        className="exercise-search-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1016.65 16.65z" />
      </svg>
      <input
        type="text"
        className="exercise-search-input"
        placeholder="Search exercises..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    <button
      className={`exercise-condition-btn ${selectedCondition === '' ? 'active' : ''}`}
      onClick={() => setSelectedCondition('')}
    >
      All Conditions
    </button>
  </div>

  <div className="exercise-filters">
  {conditions.map((condition) => (
    <span
      key={condition}
      className={`exercise-filter-badge ${selectedCondition === condition ? 'active' : ''}`}
      onClick={() =>
        setSelectedCondition(selectedCondition === condition ? '' : condition)
      }
    >
      {condition}
    </span>
  ))}
</div>

</div>



      <section className="exercise-grid">
      {filteredExercises.map((exercise) => (
  <div key={exercise.id} className="exercise-card">
    <div className="exercise-card-header">
      <div className="exercise-card-header-top">
        <h3 className="exercise-card-title">{exercise.name}</h3>
        <span className="exercise-badge">{exercise.category}</span>
      </div>
      <p className="exercise-card-description">{exercise.description}</p>
    </div>

    <div className="exercise-card-content">
      {/* Details */}
      <div className="exercise-meta">
        <div className="exercise-meta-item">
          🕒 {exercise.duration}
        </div>
        <div className="exercise-meta-item">
          🎯 {exercise.difficulty}
        </div>
      </div>

      {/* Health Conditions */}
      <div>
        <p className="exercise-section-title">Good for:</p>
        <div className="exercise-condition-badges">
          {exercise.conditions.map((condition) => (
            <span key={condition} className="exercise-badge-secondary">
              {condition}
            </span>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div>
        <p className="exercise-section-title">Benefits:</p>
        <ul className="exercise-list">
          {exercise.benefits.slice(0, 2).map((benefit, index) => (
            <li key={index} className="exercise-list-item">
              <span className="exercise-dot"></span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div>
        <p className="exercise-section-title">Getting Started:</p>
        <ul className="exercise-list">
          {exercise.instructions.slice(0, 2).map((instruction, index) => (
            <li key={index} className="exercise-list-item">
              <span className="exercise-step-number">{index + 1}</span>
              {instruction}
            </li>
          ))}
        </ul>
      </div>

      <button className="exercise-button">
        ▶️ View Full Exercise
      </button>
    </div>
  </div>
))}


        {filteredExercises.length === 0 && (
          <div className="exercise-empty">
            <Dumbbell className="exercise-icon" />
            <h3>No exercises found</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ExerciseLibrary;
