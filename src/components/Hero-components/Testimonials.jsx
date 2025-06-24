import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';
import { useDarkMode } from '../DarkModeContext';

const Testimonials = () => {
  const { darkMode: isDarkMode } = useDarkMode();
  return (
    <div>
      <div className={`container ${isDarkMode ? 'dark' : ''}`}>
        <div className="section-header">
          <h2>What Our Users Say</h2>
          <p>
            Real experiences from people who have transformed their health journey
            with HealthHub.
          </p>
        </div>

        <div className="testimonials-grid-wrapper">
          <div className="testimonials-grid">
            <motion.div
              className="testimonial-card"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="user-info">
                <div className="avatar blue">JD</div>
                <div className="user-details">
                  <h4>John Doe</h4>
                  <p className="subtitle">Diabetes Management</p>
                </div>
              </div>
              <p className="message">
                "HealthHub helped me understand my diabetes better than any other
                resource. The personalized recommendations have made managing my
                condition so much easier."
              </p>
            </motion.div>

            <motion.div
              className="testimonial-card"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="user-info">
                <div className="avatar green">MS</div>
                <div className="user-details">
                  <h4>Maria Smith</h4>
                  <p className="subtitle">Heart Health</p>
                </div>
              </div>
              <p className="message">
                "After my heart attack, I was overwhelmed with information.
                HealthHub curated exactly what I needed to know and tracked my
                recovery progress."
              </p>
            </motion.div>

            <motion.div
              className="testimonial-card"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="user-info">
                <div className="avatar blue">RJ</div>
                <div className="user-details">
                  <h4>Robert Johnson</h4>
                  <p className="subtitle">Fitness Goals</p>
                </div>
              </div>
              <p className="message">
                "Using HealthHub, I’ve finally been able to stick to my fitness
                goals. The app’s reminders and progress tracking keep me motivated
                daily."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
