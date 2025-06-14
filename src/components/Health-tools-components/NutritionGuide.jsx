import React, { useState } from 'react';
import './NutritionGuide.css';

const NutritionGuide = () => {
  const [activeTab, setActiveTab] = useState('resources');

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

        <div className="nutrition-tabs">
          <div className="nutrition-tab-list">
            <button
              className={`nutrition-tab-trigger ${activeTab === 'resources' ? 'active' : ''}`}
              onClick={() => setActiveTab('resources')}
            >
              Nutrition Resources
            </button>
            <button
              className={`nutrition-tab-trigger ${activeTab === 'recipes' ? 'active' : ''}`}
              onClick={() => setActiveTab('recipes')}
            >
              Healthy Recipes
            </button>
          </div>

          {activeTab === 'resources' && (
            <div className="nutrition-tab-content">
              <div className="nutrition-card-grid">
                <div className="nutrition-card">
      <div className="nutrition-card-header">
        <div className="nutrition-card-icon">
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
            className="nutrition-icon"
          >
            <path d="M7 21h10"></path>
            <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"></path>
            <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"></path>
            <path d="m13 12 4-4"></path>
            <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"></path>
          </svg>
        </div>
        <h3 className="nutrition-card-title">Meal Planning</h3>
      </div>
      <div className="nutrition-card-content">
        <p className="nutrition-card-description">
          Get personalized meal plans based on your health goals
        </p>
      </div>
    </div>

    <div className="nutrition-card">
      <div className="nutrition-card-header">
        <div className="nutrition-card-icon">
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
    className="lucide lucide-book w-6 h-6 mb-2"
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
  </svg>
        </div>
        <h3 className="nutrition-card-title">Nutrition Education</h3>
      </div>
      <div className="nutrition-card-content">
        <p className="nutrition-card-description">
        Learn about balanced diets and healthy eating habits
        </p>
      </div>
    </div>

                <div className="nutrition-card">
      <div className="nutrition-card-header">
        <div className="nutrition-card-icon">
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
    className="lucide lucide-search w-6 h-6 mb-2"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
        </div>
        <h3 className="nutrition-card-title">Food Database</h3>
      </div>
      <div className="nutrition-card-content">
        <p className="nutrition-card-description">
        Access detailed nutritional information for thousands of foods
        </p>
      </div>
    </div>
              </div>
            </div>
          )}

          {activeTab === 'recipes' && (
            <div className="nutrition-tab-content">
              <div className="nutrition-card-grid">
              {/* <p>Recipe content goes here...</p> */}
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
            <span className='span2'>450 cal</span>
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
            <span className='span2'>450 cal</span>
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
            <span className='span2'>450 cal</span>
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
        <div className="nutrition-cards">
      <div className="nutrition-cards-header">
        <h3 className="nutrition-cards-title">Personalized Nutrition Planning</h3>
        <p className="nutrition-cards-description">
          Get customized meal plans and nutrition advice tailored to your needs
        </p>
      </div>
      <div className="nutrition-cards-content">
        <p className="nutrition-cards-message">
          Our comprehensive nutrition tools are being developed to help you achieve your health goals.
          Sign up now to be notified when these features become available.
        </p>
        <button className="nutrition-joins-button">Join Waitlist</button>
      </div>
    </div>
      </div>
    </main>
  );
};

export default NutritionGuide;
