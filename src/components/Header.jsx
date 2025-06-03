import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import './NavbarMenu.css';
import { useDarkMode } from './DarkModeContext';
import AuthModal from '../Pages/AuthModal';
import NavbarMenu from './NavbarMenu';
import { useAuth } from './AuthContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [signinOpen, setSigninOpen] = useState(false);
  const [query, setQuery] = useState('');

  const [suggestions, setSuggestions] = useState([
    'Cardiovascular Health',
    'Diabetes Management',
    'Mental Health',
    'Nutrition & Diet',
    'Fitness & Exercise',
    'Preventive Care',
  ]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useDarkMode();
  const { isAuthenticated, signOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => {
    setDialogOpen(false);
    setQuery('');
    setFilteredSuggestions([]);
  };

  const openSignin = () => setSigninOpen(true);
  const closeSignin = () => setSigninOpen(false);

  const isActive = (path) => location.pathname === path;
  const isHealthToolsActive = () =>
    ['/symptom-checker', '/health-calculators', '/nutrition-guide', '/exercise-library', '/emergency-guide']
      .some((toolPath) => location.pathname.startsWith(toolPath));

  const handleSignOut = () => {
    signOut();
    setSigninOpen(false);
    navigate('/');
  };

  useEffect(() => {
    if (!query.trim()) {
      setFilteredSuggestions([]);
      return;
    }
  
    const timer = setTimeout(() => {
      const fetchSuggestions = async () => {
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:8091/searches/get/${query.trim()}`);
          if (!response.ok) throw new Error('No results');
          const data = await response.json();
          const resultsArray = Array.isArray(data) ? data : [data];
          const names = resultsArray.map((item) => item.name);
          setFilteredSuggestions(names);
          setError('');
        } catch (err) {
          setFilteredSuggestions([]);
          setError('No results found');
        } finally {
          setLoading(false);
        }
      };
  
      fetchSuggestions();
    }, 300); // Debounce delay
  
    return () => clearTimeout(timer); // Cancel previous search on new keystroke
  }, [query]);
  
  

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <nav className="header-nav">
        <div className="header-container">
          <div className="header-inner">
            <div className="header-left">
              <div className="logo-container">
                <Link to="/" className="logo-link">
                  <span className="logo-primary">Health</span>
                  <span className="logo-secondary">Hub</span>
                </Link>
              </div>

              <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <Link to="/" className={`nav-link ${isActive('/') ? 'active-link' : ''}`}><p>Home</p></Link>
                <Link to="/health-topics" className={`nav-link ${isActive('/health-topics') ? 'active-link' : ''}`}><p>Health Topics</p></Link>
                <Link to="/health-search" className={`nav-link ${isActive('/health-search') ? 'active-link' : ''}`}><p>Search Conditions</p></Link>

                <div className={`dropdown ${isHealthToolsActive() ? 'active-links' : ''}`}>
                  <p className="navs-link dropdown-trigger">Health Tools</p>
                  <div className="dropdown-menu">
                    <Link to="/symptom-checker" className="dropdown-item">Symptom Checker</Link>
                    <Link to="/health-calculators" className="dropdown-item">Health Calculators</Link>
                    <Link to="/nutrition-guide" className="dropdown-item">Nutrition Guide</Link>
                    <Link to="/emergency-guide" className="dropdown-item">Emergency Guide</Link>
                  </div>
                </div>

                {isAuthenticated && (
                  <div className={`dropdown ${isHealthToolsActive() ? 'active-links' : ''}`}>
                    <p className="navs-link dropdown-trigger">My Health</p>
                    <div className="dropdown-menu">
                      <Link to="/health-dashboard" className="dropdown-item">Health Dashboard</Link>
                      <Link to="/medication-tracker" className="dropdown-item">Medication Tracker</Link>
                      <Link to="/my-dashboard" className="dropdown-item">My Dashboard</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="header-right">
              <div className="search-container" onClick={openDialog}>
                <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>

              <button type="button" aria-label="Toggle theme" className="theme-toggle" onClick={toggleTheme}>
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                )}
              </button>

              {isAuthenticated && (
                <Link to="/profile" className="profile-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="grey"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </Link>
              )}

              <button className="signin-button" onClick={isAuthenticated ? handleSignOut : openSignin}>
                {isAuthenticated ? 'Sign Out' : 'Sign In'}
              </button>

              <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
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
                  className="menu-icon" 
                  aria-hidden="true"
                >
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-navbar-menu">
            <NavbarMenu onLinkClick={() => setMenuOpen(false)} />
          </div>
        )}
      </nav>

      {dialogOpen && (
        <div className="search-popup-overlay">
          <div className="search-popup">
            <div className="popup-header">
              <div className="search-input-container">
                <div className="input-wrapper">
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
                    className="searches-icons"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search health topics..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                <button onClick={closeDialog} className="close-popup">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                   

                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="search-results">
            <div className="topic-cover">
              <p className="topic">Health Topics</p>
            </div>

            {loading && <p className="search-loading">Loading...</p>}
{error && <p className="search-error">{error}</p>}
{filteredSuggestions.length > 0 && (
  <ul className="suggestion-list">
    {filteredSuggestions.map((suggestion, index) => (
      <li key={index} onClick={() => {
        navigate(`/health-topics/${encodeURIComponent(suggestion)}`);
        closeDialog();
      }}>
        {suggestion}
      </li>
    ))}
  </ul>
)}

          </div>
        </div>
      </div>
    )}


      {signinOpen && !isAuthenticated && (
        <div className="signin-overlay">
          <AuthModal
            isOpen={signinOpen}
            onClose={closeSignin}
            onSuccess={() => {
              closeSignin();
            }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
