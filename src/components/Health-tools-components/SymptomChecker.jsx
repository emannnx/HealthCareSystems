import React, { useState } from 'react';
import './SymptomChecker.css';
import { motion } from 'framer-motion';
import { useDarkMode } from '../DarkModeContext';
import Select from 'react-select';

const SymptomChecker = ({
  firstAidInfo = {},
  conditionDetails = {},
  onContinue,
}) => {
  const { darkMode: isDarkMode } = useDarkMode();

  const [step, setStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState('');
  const [severity, setSeverity] = useState('');
  const [duration, setDuration] = useState('');
  const [possibleConditions, setPossibleConditions] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState(null);

  const bodyParts = [
    { id: "head", name: "Head & Face" },
    { id: "chest", name: "Chest & Heart" },
    { id: "abdomen", name: "Abdomen & Digestive" },
    { id: "limbs", name: "Arms & Legs" },
    { id: "skin", name: "Skin" },
    { id: "mental", name: "Mental & Neurological" },
    { id: "general", name: "General & Systemic" },
  ];
  
  const symptomsData = {
    head: [
      { id: "headache", name: "Headache" },
      { id: "dizziness", name: "Dizziness" },
      { id: "blurred_vision", name: "Blurred Vision" },
      { id: "ear_pain", name: "Ear Pain" },
      { id: "sinus_pain", name: "Sinus Pain" },
      { id: "sore_throat", name: "Sore Throat" },
    ],
    chest: [
      { id: "chest_pain", name: "Chest Pain" },
      { id: "shortness_of_breath", name: "Shortness of Breath" },
      { id: "palpitations", name: "Palpitations" },
      { id: "cough", name: "Cough" },
      { id: "wheezing", name: "Wheezing" },
    ],
    abdomen: [
      { id: "abdominal_pain", name: "Abdominal Pain" },
      { id: "nausea", name: "Nausea" },
      { id: "vomiting", name: "Vomiting" },
      { id: "diarrhea", name: "Diarrhea" },
      { id: "constipation", name: "Constipation" },
      { id: "bloating", name: "Bloating" },
    ],
    limbs: [
      { id: "joint_pain", name: "Joint Pain" },
      { id: "muscle_pain", name: "Muscle Pain" },
      { id: "swelling", name: "Swelling" },
      { id: "numbness", name: "Numbness or Tingling" },
      { id: "mobility_issues", name: "Difficulty Moving" },
    ],
    skin: [
      { id: "rash", name: "Rash" },
      { id: "itching", name: "Itching" },
      { id: "bruising", name: "Bruising" },
      { id: "discoloration", name: "Discoloration" },
      { id: "dryness", name: "Dryness" },
    ],
    mental: [
      { id: "fatigue", name: "Fatigue" },
      { id: "insomnia", name: "Insomnia" },
      { id: "anxiety", name: "Anxiety" },
      { id: "depression", name: "Depression" },
      { id: "confusion", name: "Confusion" },
      { id: "memory_loss", name: "Memory Loss" },
    ],
    general: [
      { id: "fever", name: "Fever" },
      { id: "chills", name: "Chills" },
      { id: "weight_loss", name: "Weight Loss" },
      { id: "weight_gain", name: "Weight Gain" },
      { id: "weakness", name: "General Weakness" },
      { id: "appetite_loss", name: "Loss of Appetite" },
    ],
  };

  // Filter symptoms based on selected body part or search query
  const filteredSymptoms = (() => {
    if (selectedBodyPart) {
      return symptomsData[selectedBodyPart] || [];
    }
  
    if (searchQuery) {
      // Check if the search query matches a body part key
      const matchedBodyPart = bodyParts.find(part =>
        part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      if (matchedBodyPart) {
        return symptomsData[matchedBodyPart.id] || [];
      }
  
      // Otherwise, search symptoms globally
      return Object.values(symptomsData)
        .flat()
        .filter(symptom =>
          symptom.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
  
    return [];
  })();
  



  const toggleSymptom = (symptomId) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId) ? prev.filter(s => s !== symptomId) : [...prev, symptomId]
    );
  };

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // For demo: create dummy conditions based on symptoms
      const conditions = selectedSymptoms.map(s => `Condition for ${s}`);
      setPossibleConditions(conditions);
      setStep(3);
    } else {
      setStep(prev => prev + 1); // fallback
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleStartOver = () => {
    setStep(1);
    setSearchQuery('');
    setSelectedSymptoms([]);
    setSelectedBodyPart('');
    setSeverity('');
    setDuration('');
    setPossibleConditions([]);
    setSelectedCondition(null);
  };
  

  return (
    <div className={`symptom-checker ${isDarkMode ? 'dark' : ''}`}>
      <motion.div 
        className="symptom-checker-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="symptom-checker-container">
          <h1 className="symptom-checker-title">Symptom Checker</h1>
          <p className="symptom-checker-description">
            Check your symptoms to find possible causes and treatments.
            This tool is for informational purposes and should not replace 
            professional medical advice.
          </p>
        </div>

        <motion.div 
          className="progress-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="progress-labels">
            <span>Start</span>
            <span>Symptoms</span>
            <span>Details</span>
            <span>Results</span>
          </div>

          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="20"
          >
            <div
              className="progress-indicator"
              style={{ transform: 'translateX(-80%)' }}
            ></div>
          </div>
        </motion.div>

        <motion.div 
          className="emergency-card-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="emergency-card">
            <div className="cards-header">
              <div className="header-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="alert-icon"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <h3 className="card-titles">Emergency Warning</h3>
              </div>
              <div className="card-content">
              <p className="card-text">
                If you're experiencing severe chest pain, difficulty breathing,
                severe bleeding, or other life-threatening symptoms, please call
                emergency services (911) or go to the nearest emergency room immediately.
              </p>
            </div>
            </div>
            
          </div>
        </motion.div>

        <motion.div 
          className="symptom-checker-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="card">
            {step === 1 && (
              <div className="card-headers">
                <h2 className="card-titles">Step 1: Select Your Symptoms</h2>
                <p className="card-description">Choose the symptoms you're experiencing either by searching or selecting a body area.</p>
                <div className="search-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="search-icons"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>

                  <input
                    type="text"
                    placeholder="Search symptoms..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setSelectedBodyPart(""); // clear body part if searching
                    }}
                    className="seearch-input"
                  />
                </div>

                <div className="bodypart-select">
                  <label htmlFor="bodyPartSelect">Or select area of the body</label>
                  <select
                    id="bodyPartSelect"
                    className='bodyPartSelect'
                    value={selectedBodyPart}
                    onChange={(e) => {
                      setSelectedBodyPart(e.target.value);
                      setSearchQuery("");
                    }}
                  >
                    <option className='options' value="">Select body area</option>
                    {bodyParts.map((part) => (
                      <option className='options' key={part.id} value={part.id}>
                        {part.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="symptom-options">
                  <label className="label">Select all that apply:</label>
                  {filteredSymptoms.length === 0 && searchQuery && (
                    <p className="no-results">No symptoms found for "{searchQuery}"</p>
                  )}
                  <div className="symptoms-grid">
                    {filteredSymptoms.map((symptom) => (
                      <div key={symptom.id} className="symptom-item">
                        <input
                          type="checkbox"
                          id={symptom.id}
                          checked={selectedSymptoms.includes(symptom.id)}
                          onChange={() => toggleSymptom(symptom.id)}
                        />
                        <label htmlFor={symptom.id}>{symptom.name}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedSymptoms.length > 0 && (
                  <div className="selected-symptoms">
                    <label>Selected symptoms:</label>
                    <div className="selected-list">
                      {selectedSymptoms.map((id) => {
                        const symptom = Object.values(symptomsData)
                          .flat()
                          .find((s) => s.id === id);
                        return symptom ? (
                          <div key={id} className="selected-item">
                            {symptom.name}
                            <button
                              type="button"
                              className="remove-btn"
                              onClick={() => toggleSymptom(id)}
                            >
                              &times;
                            </button>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}

                <div className="card-footers">
                  <button type="button" onClick={handleStartOver} className="btn-outline">
                    Clear All
                  </button>

                  <button
                    type="button"
                    onClick={handleContinue}
                    disabled={selectedSymptoms.length === 0}
                    className="btn-primary"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="checker-step">
                <h2 className="checker-title">Step 2: Symptom Details</h2>
                <p className="card-description">Choose the symptoms you're experiencing either by searching or selecting a body area.</p>
                <div className="checker-section">
                  <label className="checker-label">How severe are your symptoms?</label>
                  <select value={severity} onChange={e => setSeverity(e.target.value)} className="checker-select">
                    <option value="">Select severity</option>
                    <option value="mild">Mild - Noticeable but not interfering with daily activities</option>
                    <option value="moderate">Moderate - Affecting some daily activities</option>
                    <option value="severe">Severe - Significantly impacting daily life</option>
                    <option value="very-severe">Very Severe - Unable to perform daily activities</option>
                  </select>
                </div>

                <div className="checker-section">
                  <label className="checker-label">How long have you had these symptoms?</label>
                  <select value={duration} onChange={e => setDuration(e.target.value)} className="checker-select">
                    <option value="">Select duration</option>
                    <option value="hours">Hours (Less than a day)</option>
                    <option value="days">Days (1-6 days)</option>
                    <option value="week">About a week</option>
                    <option value="weeks">Weeks (2-3 weeks)</option>
                    <option value="month">About a month</option>
                    <option value="months">Months (2+ months)</option>
                  </select>
                </div>

                {selectedSymptoms.some(s => ['chest_pain', 'shortness_of_breath', 'severe_bleeding'].includes(s)) && (
                  <div className="checker-alert">
                    <h4>First Aid Information</h4>
                    {selectedSymptoms.includes('chest_pain') && <p>{firstAidInfo.chest_pain}</p>}
                    {selectedSymptoms.includes('shortness_of_breath') && <p>{firstAidInfo.shortness_of_breath}</p>}
                    {selectedSymptoms.includes('severe_bleeding') && <p>{firstAidInfo.severe_bleeding}</p>}
                  </div>
                )}

                <div className="checker-actions">
                  <button onClick={handleBack} className="checker-button-outline">Back</button>
                  <button
                    onClick={handleContinue}
                    className="checker-button"
                    disabled={!severity || !duration}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            

            {/* Additional steps like 3 and 4 can be added similarly */}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SymptomChecker;
