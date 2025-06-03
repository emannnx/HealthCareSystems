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
                    <div className="nutrition-icon salad-icon"></div>
                    <h3 className="nutrition-card-title">Meal Planning</h3>
                  </div>
                  <div className="nutrition-card-content">
                    <p>Get personalized meal plans based on your health goals</p>
                  </div>
                </div>

                <div className="nutrition-card">
                  <div className="nutrition-card-header">
                    <div className="nutrition-icon book-icon"></div>
                    <h3 className="nutrition-card-title">Nutrition Education</h3>
                  </div>
                  <div className="nutrition-card-content">
                    <p>Learn about balanced diets and healthy eating habits</p>
                  </div>
                </div>

                <div className="nutrition-card">
                  <div className="nutrition-card-header">
                    <div className="nutrition-icon search-icon"></div>
                    <h3 className="nutrition-card-title">Ingredient Search</h3>
                  </div>
                  <div className="nutrition-card-content">
                    <p>Explore the nutritional value of your favorite foods</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'recipes' && (
            <div className="nutrition-tab-content">
              <p>Recipe content goes here...</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default NutritionGuide;
