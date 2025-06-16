import React, { useState } from 'react';
import './NutritionGuide.css';

const NutritionGuide = () => {
  const [activeTab, setActiveTab] = useState('recipes');

  // Local static recipes array
  const recipes = [
    {
      id: "684fe056864403158746cd3c",
      title: "Grilled Chicken Salad",
      description: "A healthy salad with grilled chicken and fresh vegetables.",
      category: "Salad",
      ingredients: ["Chicken Breast", "Lettuce", "Tomatoes", "Cucumber", "Olive Oil"],
      calories: 350,
      instructions: "Grill the chicken. Mix with vegetables and drizzle with olive oil.",
      nutrition: { protein: 30.0, carbs: 15.0, fat: 12.0 },
      createdAt: "2025-06-15"
    },
    {
      id: "68501793a492e9843b5ced8d",
      title: "Avocado Toast",
      description: "A simple and healthy avocado toast with a twist of lemon.",
      category: "Breakfast",
      ingredients: ["2 slices whole grain bread", "1 avocado", "1/2 lemon", "Salt", "Chili flakes"],
      calories: 250,
      instructions: "Toast bread. Mash avocado with lemon juice, salt, and chili flakes. Spread on toast.",
      nutrition: { protein: 5.0, carbs: 0.0, fat: 15.0 },
      createdAt: "2025-06-16"
    },
    {
      id: "68501809a492e9843b5ced8e",
      title: "Stuffed Bell Peppers",
      description: "Colorful bell peppers stuffed with a savory rice and bean mixture.",
      category: "Dinner",
      ingredients: ["3 bell peppers", "1 cup cooked rice", "1/2 cup black beans", "Tomato sauce", "Cheese (optional)"],
      calories: 390,
      instructions: "Mix rice, beans, and tomato sauce. Fill peppers and bake for 25 mins at 180°C. Add cheese if desired.",
      nutrition: { protein: 14.0, carbs: 0.0, fat: 8.0 },
      createdAt: "2025-06-16"
    },
    {
      id: "68501814a492e9843b5ced8f",
      title: "Banana Oat Smoothie",
      description: "A refreshing and filling smoothie great for post-workout.",
      category: "Snack",
      ingredients: ["1 banana", "1/4 cup oats", "1 cup almond milk", "1 tbsp honey", "Ice"],
      calories: 280,
      instructions: "Blend all ingredients until smooth. Serve chilled.",
      nutrition: { protein: 6.0, carbs: 0.0, fat: 5.0 },
      createdAt: "2025-06-16"
    },
    {
      id: "6850181da492e9843b5ced90",
      title: "Lentil Soup",
      description: "A hearty and nutritious lentil soup, perfect for dinner.",
      category: "Dinner",
      ingredients: ["1 cup lentils", "1 carrot", "1 celery stalk", "1 onion", "Garlic", "Vegetable broth"],
      calories: 320,
      instructions: "Sauté vegetables, add lentils and broth. Simmer for 30 minutes until lentils are soft.",
      nutrition: { protein: 18.0, carbs: 0.0, fat: 4.0 },
      createdAt: "2025-06-16"
    },
    {
      id: "68501828a492e9843b5ced91",
      title: "Quinoa Veggie Bowl",
      description: "A protein-packed veggie bowl with quinoa and roasted vegetables.",
      category: "Lunch",
      ingredients: ["1 cup cooked quinoa", "1/2 cup roasted sweet potatoes", "1/2 cup broccoli", "Hummus", "Olive oil"],
      calories: 400,
      instructions: "Arrange all ingredients in a bowl. Drizzle with olive oil and add hummus on the side.",
      nutrition: { protein: 12.0, carbs: 0.0, fat: 10.0 },
      createdAt: "2025-06-16"
    }
  ];

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

        {activeTab === 'recipes' && (
          <div className="nutrition-tab-content">
            <div className="nutrition-card-grid">
              {recipes.map((recipe, index) => (
                <div className="nutritions-cards-container" key={index}>
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
                        <h3 className="nutritions-cards-title">{recipe.title}</h3>
                      </div>
                      <span className="nutritions-cards-meal">{recipe.category}</span>
                    </div>
                  </div>
                  <div className="nutritions-cards-content">
                    <div className="nutritions-cards-info">
                      <div className="nutritions-cards-meta">
                        <span>Prep time: {recipe.prepTime || '20 mins'}</span>
                        <span className="span2">{recipe.calories} cal</span>
                      </div>
                      <div>
                        <h4 className="nutritions-cards-subtitle">Ingredients:</h4>
                        <ul className="nutritions-cards-list">
                          {recipe.ingredients.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {recipes.length === 0 && (
                <p style={{ textAlign: 'center', marginTop: '2rem' }}>
                  Loading recipes or none available.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default NutritionGuide;
