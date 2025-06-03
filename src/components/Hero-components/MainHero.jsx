import React, { useState } from 'react';
import './MainHero.css'
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useDarkMode } from '../DarkModeContext';
import photo from '/src/components/Hero-components/photo.png';
import AuthModal from '/src/Pages/AuthModal';
import { useAuth } from '../AuthContext';


const MainHero = ({ onOpenAuth }) => {
  const { darkMode: isDarkMode } = useDarkMode();
  const [signinOpen, setSigninOpen] = useState(false);

  const openSignin = () => setSigninOpen(true);
  const closeSignin = () => setSigninOpen(false);

  const { isAuthenticated } = useAuth();

  return (
    <div className={`main-hero ${isDarkMode ? 'dark' : ''}`}>
      <div className="hero-wrapper">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-inner">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="hero-heading">
                <span className="block">Your health,</span>
                <span className="highlighted">personalized</span>
              </h1>
              <p className="hero-description">
                HealthHub provides reliable health information and personalized recommendations based on your unique health profile.
              </p>

              <div className="hero-features">
                {["Evidence-based health information", "Personalized wellness recommendations", "Track medications and symptoms"].map((text, index) => (
                  <motion.div 
                    className="feature-item"
                    key={text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.4 }}
                  >
                    <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#0EA2F1" strokeWidth="2">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="hero-buttonss">
                <motion.div 
                  className="button-wrapper"
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to= "/health-search" className="search-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    Search Conditions
                  </Link>
                </motion.div>
                <motion.div 
                  className="button-wrapper secondary"
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to= "/health-dashboard" className="secondary-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0L6.41 10.54A2 2 0 0 1 4.49 12H2" />
                    </svg>
                    My Health
                  </Link>
                </motion.div>
              </div>

              <motion.div 
                className="hero-grid fade-in delay-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} // Add exit animation for backward scroll
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {[ 
                  { label: "Health Tracking", iconPath: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" },
                  { label: "Medication Reminders", iconPath: "M8 2v4M16 2v4M3 10h18M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"},
                  { label: "Emergency Guide", iconPath: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }
                ].map((item, i) => (
                  <motion.div 
                    className="hero-item" 
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }} // Add exit animation for backward scroll
                    transition={{ delay: 0.7 + i * 0.2, duration: 0.4 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d={item.iconPath} />
                    </svg>
                    <p className="hero-label">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {!isAuthenticated && (
  <motion.div 
    className="cta-section"
    whileHover={{ y: -3 }}
  >
    <Link className="cta-link" onClick={() => onOpenAuth("register")}>
  <svg className="cta-icon-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
  Create free account
  <svg className="cta-icon-right" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
</Link>

  </motion.div>
)}

            </motion.div>
          </div>
        </motion.div>

        <div className="hero-section">
          <img className="hero-image" src={photo} alt="Hero" />
        </div>
      </div>

      {signinOpen && (
              <div className="signin-overlay">
                <AuthModal
                  isOpen={signinOpen}
                  onClose={closeSignin}
                  onSuccess={closeSignin}
                />
              </div>
            )}
    </div>
  );
}

export default MainHero;
