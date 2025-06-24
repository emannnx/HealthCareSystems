import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="top-footer">
          <div className="footer-logo-section">
            <Link to="/" className="footer-logo-link">
              <span className="footer-logo-blue">Health</span>
              <span className="footer-logo-green">Hub</span>
            </Link>
            <p className="footer-description">
              Comprehensive health information and personalized recommendations for your well-being.
            </p>
          </div>

          <div className="footer-explore">
            <h3 className="footer-heading">Explore</h3>
            <ul className="footer-links">
              <li><Link to="/articles?category=cardiovascular" className="footer-link">Cardiovascular Health</Link></li>
              <li><Link to="/articles?category=diabetes" className="footer-link">Diabetes Management</Link></li>
              <li><Link to="/articles?category=mental-health" className="footer-link">Mental Health</Link></li>
              <li><Link to="/articles?category=nutrition" className="footer-link">Nutrition & Diet</Link></li>
              <li><Link to="/articles?category=fitness" className="footer-link">Fitness & Exercise</Link></li>
              <li><Link to="/articles?category=preventive-care" className="footer-link">Preventive Care</Link></li>
            </ul>
          </div>

          <div className="footer-quick-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/articles" className="footer-link">Health Articles</Link></li>
              <li><Link to="/my-dashboard" className="footer-link">My Dashboard</Link></li>
              <li><Link to="/profile" className="footer-link">Health Profile</Link></li>
              <li><Link to="/?auth=login" className="footer-link">Sign In</Link></li>
              <li><Link to="/?auth=register" className="footer-link">Register</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
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
                  className="h-6 w-6 text-health-blue mr-2"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>123 Health Street, Medical City, MC 12345</span>
              </li>
              <li className="flex">
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
                  className="h-6 w-6 text-health-blue mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex">
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
                  className="h-6 w-6 text-health-blue mr-2"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>info@healthhub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom-footer">
        <div className="footer-bottom mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
            <p className="text-base text-gray-400 md:mb-0">
              © 2025 HealthHub. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link className="text-gray-400 hover:text-white" to="/terms">
                Terms of Service
              </Link>
              <Link className="text-gray-400 hover:text-white" to="/privacy">
                Privacy Policy
              </Link>
              <Link className="text-gray-400 hover:text-white" to="/cookies">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
