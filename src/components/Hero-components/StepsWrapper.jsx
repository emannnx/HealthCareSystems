import React from 'react';
import { motion } from 'framer-motion';
import './StepsWrapper.css';
import { useDarkMode } from '../DarkModeContext';


const StepsWrapper = () => {
  const { darkMode: isDarkMode } = useDarkMode();
  return (
    <div>
      <div className={`healthhub-container ${isDarkMode ? 'dark' : ''}`}>
        <h2 className="healthhub-title">How HealthHub Works</h2>
        <p className="healthhub-description">
          Our simple process to help you achieve better health outcomes
        </p>
      </div>

      <div className={`steps-wrapper ${isDarkMode ? 'dark' : ''}`}>
        <div className="steps-container">
          {/* <div className="steps-line"></div> */}
          <div className="steps-grid">
            <motion.div
              className="step"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="step-number">1</div>
              <h3 className="step-title">Create Account</h3>
              <p className="step-description">
                Sign up and set up your personal health profile with key information.
              </p>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="step-number">2</div>
              <h3 className="step-title">Get Personalized Plan</h3>
              <p className="step-description">
                Receive customized recommendations based on your health data.
              </p>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="step-number">3</div>
              <h3 className="step-title">Track Progress</h3>
              <p className="step-description">
                Monitor your health improvements and adjust your plan as needed.
              </p>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="step-number">4</div>
              <h3 className="step-title">Achieve Goals</h3>
              <p className="step-description">
                Reach your health targets and maintain your improved wellbeing.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsWrapper;
