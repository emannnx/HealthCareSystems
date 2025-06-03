import React from 'react'
import './HeroTopicsContainer.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDarkMode } from '../DarkModeContext';

const HeroTopicsContainer = () => {
  const { darkMode: isDarkMode } = useDarkMode();
  return (
    <div>
      <div className={`health-topic-container ${isDarkMode ? 'dark' : ''}`}>
        <h2 className="health-topic-title">Explore Health Topics</h2>
        <p className="health-topic-description">
          Discover reliable information on a wide range of health topics, curated by medical professionals.
        </p>
      </div>

      <div className={`health-topics-wrapper ${isDarkMode ? 'dark' : ''}`}>
        <div className="health-topics-container">
          
          <motion.div
            className="health-topic-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }} // Starts from below
            transition={{ duration: 1 }}
          >
            <Link to="/health-topics?category=cardiovascular" className="card-hover">
              <div className="card-contents">
                <div className="icon-container">
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
                    className="lucide lucide-heart icon-heart"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="card-title">Cardiovascular Health</h3>
                <p className="card-description">
                  Learn about heart disease, high blood pressure, and ways to maintain cardiovascular health.
                </p>
              </div>
              <div className="card-footer">
                <span className="explore-text">Explore →</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="health-topic-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }} // Starts from below
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Link to="/health-topics?category=diabetes" className="card-hover">
              <div className="card-contents">
                <div className="icon-container">
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
                    className="lucide lucide-heart icon-heart"
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                </div>
                <h3 className="card-title">Diabetes Management</h3>
                <p className="card-description">
                  Information on managing diabetes, blood sugar monitoring, and healthy living strategies.
                </p>
              </div>
              <div className="card-footer">
                <span className="explore-text">Explore →</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="health-topic-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }} // Starts from below
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link to="/health-topics?category=mental-health" className="card-hover">
              <div className="card-contents">
                <div className="icon-container">
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
                    className="lucide lucide-heart icon-heart"
                  >
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                  </svg>
                </div>
                <h3 className="card-title">Mental Health</h3>
                <p className="card-description">
                  Resources for anxiety, depression, stress management, and overall mental wellbeing.
                </p>
              </div>
              <div className="card-footer">
                <span className="explore-text">Explore →</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="health-topic-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }} // Starts from below
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link className="card-hover flex flex-col bg-white rounded-lg shadow-lg overflow-hidden" to="/health-topics?category=nutrition">
              <div className="card-contents px-6 py-8 flex-1">
                <div className="icon-containers mbs-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-apple h-8 w-8">
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                    <path d="M10 2c1 .5 2 2 2 5"></path>
                  </svg>
                </div>
                <h3 className="card-title text-xl font-bold text-gray-900 mb-2">Nutrition & Diet</h3>
                <p className="card-description text-gray-600">Expert advice on balanced diets, nutritional needs, and healthy eating habits.</p>
              </div>
              <div className="card-footer">
                <span className="explore-texts">Explore →</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="health-topic-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link className="card-hover flex flex-col bg-white rounded-lg shadow-lg overflow-hidden" to="/health-topics?category=fitness">
              <div className="card-contents px-6 py-8 flex-1">
                <div className="icon-container mbs-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dumbbell h-8 w-8">
                    <path d="M14.4 14.4 9.6 9.6"></path>
                    <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path>
                    <path d="m21.5 21.5-1.4-1.4"></path>
                    <path d="M3.9 3.9 2.5 2.5"></path>
                    <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></path>
                  </svg>
                </div>
                <h3 className="card-title text-xl font-bold text-gray-900 mb-2">Fitness & Exercise</h3>
                <p className="card-description text-gray-600">Exercise recommendations, workout plans, and physical activity guidelines for all ages.</p>
              </div>
              <div className="card-footer">
                <span className="explore-texts">Explore →</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="health-topic-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }} // Starts from below
            transition={{ duration: 1, delay: 1 }}
          >
            <Link className="card-hover flex flex-col bg-white rounded-lg shadow-lg overflow-hidden" to="/health-topics?category=preventive-care">
              <div className="card-contents px-6 py-8 flex-1">
                <div className="icon-container mbs-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-apple h-8 w-8">
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                  </svg>
                </div>
                <h3 className="card-title text-xl font-bold text-gray-900 mb-2">Preventive Care</h3>
                <p className="card-description text-gray-600">Guidance on screenings, vaccinations, and preventive health measures for better well-being.</p>
              </div>
              <div className="card-footer">
                <span className="explore-texts">Explore →</span>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroTopicsContainer;
