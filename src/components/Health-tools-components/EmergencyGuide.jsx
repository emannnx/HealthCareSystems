import React, { useState } from 'react';
import './EmergencyGuide.css';
import { AlertTriangle, Search, Zap, Heart, Shield, Phone } from 'lucide-react'; // Assuming you have lucide-react installed for icons

const emergencyGuides = {
  'heart attack': {
    type: 'Heart Attack',
    immediateActions: [
      'Call emergency services (911) immediately',
      'Keep the person calm and seated',
      'Loosen tight clothing around neck and chest'
    ],
    steps: [
      'Check if person is conscious and breathing',
      'Give aspirin if available and person is not allergic',
      'Prepare for CPR if person becomes unconscious',
      'Stay with the person until help arrives',
      'Monitor vital signs continuously'
    ],
    warnings: [
      'Do not leave the person alone',
      'Do not give food or water',
      'Do not give aspirin if allergic or bleeding disorder'
    ]
  },
  'snake bite': {
    type: 'Snake Bite',
    immediateActions: [
      'Call emergency services immediately',
      'Keep the person calm and still',
      'Remove jewelry near the bite before swelling'
    ],
    steps: [
      'Position bite below heart level if possible',
      'Clean the bite with soap and water if available',
      'Cover with clean, dry bandage',
      'Mark swelling progression with pen',
      'Take photo of snake if safe to do so'
    ],
    warnings: [
      'Do not cut the bite or try to suck out venom',
      'Do not apply ice or tourniquet',
      'Do not give alcohol or caffeine'
    ]
  },
  'earthquake': {
    type: 'Earthquake',
    immediateActions: [
      'Drop to hands and knees immediately',
      'Take cover under sturdy desk or table',
      'Hold on to shelter and protect head/neck'
    ],
    steps: [
      'Stay where you are until shaking stops',
      'If outdoors, move away from buildings and trees',
      'If in car, pull over and stay inside',
      'After shaking stops, evacuate if building damaged',
      'Check for injuries and provide first aid'
    ],
    warnings: [
      'Do not run outside during shaking',
      'Do not stand in doorways',
      'Avoid elevators and stairs during shaking'
    ]
  }
};

const EmergencyGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [showSearch, setShowSearch] = useState(true);

  const handleSearch = () => {
    const guide = emergencyGuides[searchTerm.toLowerCase()];
    if (guide) {
      setSelectedGuide(guide);
      setShowSearch(false);
    }
  };

  const resetSearch = () => {
    setSearchTerm('');
    setSelectedGuide(null);
    setShowSearch(true);
  };

  return (
    <div className="emergency-guide-page">
      {/* <Navbar /> */}
      <main className="emergency-guide-main">
        <div className="emergency-guide-container">
        <div className="emergency-guide-alert">
  <div className="emergency-guide-alert-header">
    <AlertTriangle className="emergency-guide-icon" />
    <h2 className="emergency-guide-title">EMERGENCY ASSISTANCE</h2>
  </div>
  <p className="emergency-guide-text">
    For immediate life-threatening emergencies, call 911 first!
  </p>
</div>

<div className="emergency-guide-intro">
  <h1 className="emergency-guide-heading">Emergency Guide</h1>
  <p className="emergency-guide-description">
    Get immediate, step-by-step guidance for emergency situations. Enter your emergency type below for instant help.
  </p>
</div>


          {showSearch && (
            <div className="emergency-guide-cards">
            <div className="emergency-guide-cards-header">
              <div className="emergency-guide-cards-title">
                <Search className="emergency-guide-search-icon" />
                <span>What's your emergency?</span>
              </div>
              <p className="emergency-guide-cards-description">
                Type the emergency situation (e.g., "heart attack", "snake bite", "earthquake")
              </p>
            </div>
          
            <div className="emergency-guide-cards-content">
              <div className="emergency-guide-input-group">
                <input
                  type="text"
                  className="emergency-guide-input"
                  placeholder="Enter emergency type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button className="emergency-guide-button" onClick={handleSearch}>
                  Get Help
                </button>
              </div>
          
              <div className="emergency-guide-tags">
                <p className="emergency-guide-tag-label">Quick examples:</p>
                {Object.keys(emergencyGuides).map((emergency) => (
                  <span
                    key={emergency}
                    className="emergency-guide-badge"
                    onClick={() => {
                      setSearchTerm(emergency);
                      setSelectedGuide(emergencyGuides[emergency]);
                      setShowSearch(false);
                    }}
                  >
                    {emergency}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          )}

          {selectedGuide && (
            <div className="emergencies-guide-container">
            <div className="emergencies-guide-header-row">
  <h2 className="emergencies-guide-title-red">
    {selectedGuide.type} Emergency
  </h2>
  <button
    className="emergencies-guide-button outline"
    onClick={resetSearch}
  >
    Search Another Emergency
  </button>
</div>

      
            {/* Immediate Actions */}
            <div className="emergencies-guide-card red">
  <div className="emergencies-guide-card-header">
    <h3 className="emergencies-guide-card-title red">
      <Zap className="icons1" />
      IMMEDIATE ACTIONS
    </h3>
  </div>
  <div className="emergencies-guide-card-content">
    <ol className="emergencies-guide-list red">
      {selectedGuide.immediateActions.map((action, index) => (
        <li key={index} className="emergencies-guide-list-item red">
          {action}
        </li>
      ))}
    </ol>
  </div>
</div>

      
            {/* Step-by-step guide */}
            <div className="emergencies-guide-card">
  <div className="emergencies-guide-card-header">
    <h3 className="emergencies-guide-card-title">
      <Heart className="icons2" />
      Step-by-Step Actions
    </h3>
  </div>
  <div className="emergencies-guide-card-content">
    <ol className="emergencies-guide-step-list">
      {selectedGuide.steps.map((step, index) => (
        <li key={index} className="emergencies-guide-step-item">
          {step}
        </li>
      ))}
    </ol>
  </div>
</div>

      
            {/* Warnings */}
            <div className="emergencies-guide-warning-card">
  <div className="emergencies-guide-card-header">
    <h3 className="emergencies-guide-warning-title">
      <Shield className="icons3" />
      Important Warnings
    </h3>
  </div>
  <div className="emergencies-guide-card-content">
    <ul className="emergencies-guide-warning-list">
      {selectedGuide.warnings.map((warning, index) => (
        <li key={index} className="emergencies-guide-warning-item">
          {warning}
        </li>
      ))}
    </ul>
  </div>
</div>

      
            {/* Emergency Contacts */}
            <div className="emergencies-guide-contacts-card">
  <div className="emergencies-guide-card-header">
    <h3 className="emergencies-guide-contacts-title">
      <Phone className="icons4" />
      Emergency Contacts
    </h3>
  </div>
  <div className="emergencies-guide-card-content emergencies-guide-contacts-buttons">
    <button className="emergencies-guide-call-911">
      <Phone className="icon-sm" />
      Call 911
    </button>
    <button className="emergencies-guide-contact-outline">
      <Phone className="icon-sm" />
      Poison Control: 1-800-222-1222
    </button>
  </div>
</div>

          </div>
          )}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default EmergencyGuide;
