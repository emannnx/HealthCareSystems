import React, { useState } from 'react';
import './NutritionGuide.css';

const NutritionGuide = () => {
  const [activeTab, setActiveTab] = useState('recipes');

  return (
    <main className="nutrition-main">
      <div className="nutrition-container">
        <div className="nutrition-header">
          <h1 className="nutrition-title">Nutrition Guide</h1>
          <p className="nutrition-subtitle">
            Discover personalized nutrition recommendations, healthy recipes,
            and expert dietary guidance for optimal health.
          </p>
        </div>

        {/* Tabs */}
        

        {/* Recipes Tab Content */}
        {activeTab === 'recipes' && (
          <div className="nutrition-tab-content">
            {/* <h2 className="nutrition-tab-heading"> Healthy Recipes </h2> */}
            <div className="nutrition-card-grid">

              {/* Repeat this block for each recipe */}
              <div className="nutritions-cards-container">
                <div className="nutritions-cards-header">
                  <div className="nutritions-cards-header-top">
                    <div className="nutritions-cards-header-title">
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
                        className="nutritions-cards-icon"
                      >
                        <path d="M7 21h10"></path>
                        <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"></path>
                        <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"></path>
                        <path d="m13 12 4-4"></path>
                        <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"></path>
                      </svg>
                      <h3 className="nutritions-cards-title">Quinoa Buddha Bowl</h3>
                    </div>
                    <span className="nutritions-cards-meal">Lunch</span>
                  </div>
                </div>
                <div className="nutritions-cards-content">
                  <div className="nutritions-cards-info">
                    <div className="nutritions-cards-meta">
                      <span>Prep time: 20 mins</span>
                      <span className="span2">450 cal</span>
                    </div>
                    <div>
                      <h4 className="nutritions-cards-subtitle">Ingredients:</h4>
                      <ul className="nutritions-cards-list">
                        <li>Quinoa</li>
                        <li>Chickpeas</li>
                        <li>Avocado</li>
                        <li>Sweet Potato</li>
                        <li>Kale</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of recipe card */}

              {/* You can duplicate the card above for more recipes if needed */}
              <div className="nutritions-cards-container">
                <div className="nutritions-cards-header">
                  <div className="nutritions-cards-header-top">
                    <div className="nutritions-cards-header-title">
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
                        className="nutritions-cards-icon"
                      >
                        <path d="M7 21h10"></path>
                        <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"></path>
                        <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"></path>
                        <path d="m13 12 4-4"></path>
                        <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"></path>
                      </svg>
                      <h3 className="nutritions-cards-title">Quinoa Buddha Bowl</h3>
                    </div>
                    <span className="nutritions-cards-meal">Lunch</span>
                  </div>
                </div>
                <div className="nutritions-cards-content">
                  <div className="nutritions-cards-info">
                    <div className="nutritions-cards-meta">
                      <span>Prep time: 20 mins</span>
                      <span className="span2">450 cal</span>
                    </div>
                    <div>
                      <h4 className="nutritions-cards-subtitle">Ingredients:</h4>
                      <ul className="nutritions-cards-list">
                        <li>Quinoa</li>
                        <li>Chickpeas</li>
                        <li>Avocado</li>
                        <li>Sweet Potato</li>
                        <li>Kale</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nutritions-cards-container">
                <div className="nutritions-cards-header">
                  <div className="nutritions-cards-header-top">
                    <div className="nutritions-cards-header-title">
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
                        className="nutritions-cards-icon"
                      >
                        <path d="M7 21h10"></path>
                        <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"></path>
                        <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"></path>
                        <path d="m13 12 4-4"></path>
                        <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"></path>
                      </svg>
                      <h3 className="nutritions-cards-title">Quinoa Buddha Bowl</h3>
                    </div>
                    <span className="nutritions-cards-meal">Lunch</span>
                  </div>
                </div>
                <div className="nutritions-cards-content">
                  <div className="nutritions-cards-info">
                    <div className="nutritions-cards-meta">
                      <span>Prep time: 20 mins</span>
                      <span className="span2">450 cal</span>
                    </div>
                    <div>
                      <h4 className="nutritions-cards-subtitle">Ingredients:</h4>
                      <ul className="nutritions-cards-list">
                        <li>Quinoa</li>
                        <li>Chickpeas</li>
                        <li>Avocado</li>
                        <li>Sweet Potato</li>
                        <li>Kale</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default NutritionGuide;
