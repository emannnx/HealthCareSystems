import React, { useState } from 'react';
import './NutritionGuide.css';
import { Apple, Ban, Heart, Search, CheckCircle, XCircle } from 'lucide-react';


const nutritionGuides = {
  diabetes: {
    condition: 'Diabetes',
    description: 'Manage blood sugar levels through careful food choices and portion control.',
    recommended: [
      'Whole grains (brown rice, quinoa, oats)',
      'Lean proteins (fish, chicken, tofu)',
      'Non-starchy vegetables (broccoli, spinach, peppers)',
      'Healthy fats (avocado, nuts, olive oil)',
      'Low-fat dairy products',
      'Legumes and beans',
      'Fresh fruits in moderation (berries, apples)'
    ],
    avoid: [
      'Refined sugars and sweets',
      'White bread and refined grains',
      'Sugary drinks and sodas',
      'Processed meats',
      'Fried foods',
      'High-sodium foods',
      'Fruit juices and dried fruits'
    ],
    tips: [
      'Eat regular meals to maintain stable blood sugar',
      'Control portion sizes',
      'Stay hydrated with water',
      'Monitor carbohydrate intake'
    ]
  },
  hypertension: {
    condition: 'High Blood Pressure (Hypertension)',
    description: 'Reduce sodium intake and focus on heart-healthy foods to manage blood pressure.',
    recommended: [
      'Leafy green vegetables',
      'Berries and fruits',
      'Whole grains',
      'Low-fat dairy products',
      'Lean proteins (fish, poultry)',
      'Nuts and seeds',
      'Garlic and herbs',
      'Dark chocolate (in moderation)'
    ],
    avoid: [
      'High-sodium processed foods',
      'Canned soups and sauces',
      'Deli meats and cured meats',
      'Frozen dinners',
      'Fast food',
      'Excessive alcohol',
      'Added salt and table salt'
    ],
    tips: [
      'Follow the DASH diet principles',
      'Limit sodium to 2,300mg per day',
      'Increase potassium-rich foods',
      'Maintain a healthy weight'
    ]
  },
  ulcer: {
    condition: 'Stomach Ulcer',
    description: 'Choose foods that promote healing and avoid irritants that can worsen symptoms.',
    recommended: [
      'Probiotic foods (yogurt, kefir)',
      'High-fiber foods',
      'Lean proteins',
      'Fruits (bananas, apples)',
      'Vegetables (broccoli, carrots)',
      'Whole grains',
      'Green tea',
      'Honey (in moderation)'
    ],
    avoid: [
      'Spicy foods',
      'Acidic foods (citrus, tomatoes)',
      'Alcohol',
      'Coffee and caffeine',
      'Fried and fatty foods',
      'Processed meats',
      'Chocolate',
      'Carbonated drinks'
    ],
    tips: [
      'Eat smaller, frequent meals',
      'Chew food thoroughly',
      'Avoid eating before bedtime',
      'Stay hydrated but avoid drinking with meals'
    ]
  }
};

const NutritionGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [showSearch, setShowSearch] = useState(true);

  const handleSearch = () => {
    const guide = nutritionGuides[searchTerm.toLowerCase()];
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
    <div className="nutrition-guide-container">
      <header className="nutrition-guide-header">
        <h1 className="nutrition-guide-title">
          <Apple className="nutrition-guide-apple" size={35}/>
          Nutrition Guide
        </h1>
        <p className="nutrition-guide-subtitle">
          Get personalized nutrition recommendations based on your health condition.
        </p>
      </header>

      {showSearch && (
        <div className="nutritions-card">
        <div className="nutritions-card-header">
          <h2 className="nutritions-card-title">
            <svg className="nutritions-icon-small" viewBox="0 0 24 24" fill="none">
              <path d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Enter Your Health Condition
          </h2>
          <p className="nutritions-card-description">
            Type your health condition to get personalized nutrition recommendations
          </p>
        </div>
        <div className="nutritions-card-content">
          <div className="nutritions-input-group">
            <input
              type="text"
              className="nutritions-input"
              placeholder="Enter health condition (e.g., diabetes, hypertension, ulcer)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button className="nutritions-btn" onClick={handleSearch}>Get Guide</button>
          </div>
          <div className="nutritions-available-conditions">
            <p className="nutritions-condition-label">Available conditions:</p>
            {Object.keys(nutritionGuides).map((condition) => (
              <span
                key={condition}
                className="nutritions-badge"
                onClick={() => {
                  setSearchTerm(condition);
                  setSelectedGuide(nutritionGuides[condition]);
                  setShowSearch(false);
                }}
              >
                {condition}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      )}

      {selectedGuide && (
        <section className="nutrition-guide-details">
          <div className="nutrition-guide-condition">
            <div className="nutrition-guide-conditions">
            <h2>{selectedGuide.condition}</h2>
            <p>{selectedGuide.description}</p>
            </div>
            <button className="nutrition-guide-button" onClick={resetSearch}>
              Search Another Condition
            </button>
          </div>

          <div className="nutrition-guide-columns">
            <div className="nutrition-guide-column nutrition-guide-recommended">
              <h3>
                <CheckCircle className="nutrition-guide-icon" />
                Recommended Foods
              </h3>
              <ul>
  {selectedGuide.recommended.map((food, index) => (
    <li key={index} className="flex items-start gap-2">
      <CheckCircle className="text-green-500 mt-1" size={18} />
      <span>{food}</span>
    </li>
  ))}
</ul>
            </div>

            <div className="nutrition-guide-column nutrition-guide-avoid">
              <h3>
                <XCircle className="nutrition-guide-icon" />
                Foods to Avoid
              </h3>
              <ul>
  {selectedGuide.avoid.map((food, index) => (
    <li key={index} className="flex items-start gap-2">
      <XCircle className="text-red-500 mt-1" size={18} />
      <span>{food}</span>
    </li>
  ))}
</ul>
            </div>
          </div>

          <div className="nutrition-guide-tips">
            <h3>
              <Heart className="nutrition-guide-icon" />
              Additional Tips
            </h3>
            <ul>
              {selectedGuide.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="nutrition-guide-note">
            <strong className='strong'>
              <Heart className="nutrition-guide-icon" />
              Important Note
              </strong> This nutrition guide is for informational purposes only. Always consult with your healthcare provider or a registered dietitian before making significant changes to your diet, especially if you have medical conditions.
          </div>
        </section>
      )}
    </div>
  );
};

export default NutritionGuide;
