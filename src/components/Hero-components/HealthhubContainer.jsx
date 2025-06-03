import React from 'react'
import './HealthhubContainer.css'
import { Heart, Shield, Brain } from 'lucide-react'
import { motion } from 'framer-motion'
import { useDarkMode } from '../DarkModeContext';

const HealthhubContainer = () => {
  const { darkMode: isDarkMode } = useDarkMode();
  return (
    <div>
      <div className={`healthhubs-container ${isDarkMode ? 'dark' : ''}`}>
        <div className="healthhub-wrapper">
          <div className="text-center">
          <h2 className="heading">Why Choose HealthHub?</h2>
          <p className="subtext">
            Our platform offers comprehensive health information and personalized recommendations.
          </p>
        </div>

        <div className="features-grid">
          <motion.div
            className="feature-item1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="icon-wrapper">
              <Heart className="icon" />
            </div>
            <h3 className="feature-title">Personalized Health Insights</h3>
            <p className="feature-text">
              Receive tailored health recommendations based on your unique health profile.
            </p>
          </motion.div>

          <motion.div
            className="feature-item1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="icon-wrapper">
              <Shield className="icon" />
            </div>
            <h3 className="feature-title">Secure Health Data</h3>
            <p className="feature-text">
              Your health information is protected with enterprise-grade security.
            </p>
          </motion.div>

          <motion.div
            className="feature-item1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="icon-wrapper">
              <Brain className="icon" />
            </div>
            <h3 className="feature-title">Expert-Verified Content</h3>
            <p className="feature-text">
              All health information is reviewed and verified by medical professionals.
            </p>
          </motion.div>

          <motion.div
            className="feature-item1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="icon-wrapper">
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
            <h3 className="feature-title">Progress Tracking</h3>
            <p className="feature-text">
              Monitor improvements in your health metrics over time.
            </p>
          </motion.div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HealthhubContainer
