import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavbarMenu.css';
import { useDarkMode } from './DarkModeContext';
import { useAuth } from './AuthContext';
import AuthModal from '../Pages/AuthModal';

const NavbarMenu = ({ onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isSigninOpen, setSigninOpen] = useState(false);
  const { isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useDarkMode();


  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openSignin = () => setSigninOpen(true);
  const closeSignin = () => setSigninOpen(false);

  const handleSignOut = () => {
    signOut();
    closeSignin();
    navigate('/');
  };

  return (
    <div className={`navbar-container ${darkMode ? 'dark' : ''}`}>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : 'closed'}`}>
        <Link to="/" className="navv-link" onClick={onLinkClick}>Home</Link>
        <Link to="/health-topics" className="navv-link" onClick={onLinkClick}>Health Topics</Link>
        <Link to="/health-search" className="navv-link" onClick={onLinkClick}>Search Conditions</Link>

        <div className="nav-section-title">Health Tools</div>
        <div className="nav-submenu">
          <Link to="/symptom-checker" className="nav-sublink" onClick={onLinkClick}>Symptom Checker</Link>
          <Link to="/health-calculators" className="nav-sublink" onClick={onLinkClick}>Health Calculators</Link>
          <Link to="/nutrition-guide" className="nav-sublink" onClick={onLinkClick}>Nutrition Guide</Link>
          <Link to="/emergency-guide" className="nav-sublink" onClick={onLinkClick}>Emergency Guide</Link>
        </div>

        {isAuthenticated && (
          <>
            <div className="nav-section-title">My Health</div>
            <div className="nav-submenu">
              <Link to="/health-dashboard" className="nav-sublink" onClick={onLinkClick}>Health Dashboard</Link>
              <Link to="/medication-tracker" className="nav-sublink" onClick={onLinkClick}>Medication Tracker</Link>
              <Link to="/my-dashboard" className="nav-sublink" onClick={onLinkClick}>My Dashboard</Link>
            </div>
          </>
        )}

        {isAuthenticated && (
          <Link to="/profile" className="navv-link" onClick={onLinkClick}>Profile</Link>
        )}

        <button className="signout-button" onClick={isAuthenticated ? handleSignOut : openSignin}>
          {isAuthenticated ? 'Sign Out' : 'Sign In'}
        </button>
      </div>

      <AuthModal
        isOpen={isSigninOpen}
        onClose={closeSignin}
        onSuccess={closeSignin}
      />
    </div>
  );
};

export default NavbarMenu;
