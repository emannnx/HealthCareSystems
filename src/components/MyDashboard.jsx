import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useAuth } from './AuthContext';
import './MyDashboard.css';

const MyDashboard = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const location = useLocation();
  const [refreshProfile, setRefreshProfile] = useState(false);

  // Helper function to get days difference
  const timeAgo = (dateString) => {
    const updatedDate = new Date(dateString);
    const now = new Date();
    const diffMs = Math.abs(now - updatedDate);
  
    const seconds = Math.floor(diffMs / 1000);
    if (seconds < 60) {
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }
  
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    }
  
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }
  
    const days = Math.floor(hours / 24);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  };
  

  useEffect(() => {
    if (location.state?.refresh) {
      setRefreshProfile(true);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  useEffect(() => {
    if (!user?.email) return;

    if (!refreshProfile && profile) {
      setLoadingProfile(false);
      return;
    }

    const fetchUserProfile = async () => {
      setLoadingProfile(true);
      try {
        const response = await fetch(`http://localhost:8099/home/profile/${user.email}`);
        if (!response.ok) throw new Error('Failed to fetch user profile');
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        setLoadingProfile(false);
        setRefreshProfile(false);
      }
    };

    fetchUserProfile();
  }, [user, refreshProfile]);

  if (isLoading || loadingProfile) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/?auth=login" replace />;
  }

  // Use fields directly from profile (no healthProfile wrapper)
  const {
    bmi,
    bloodType,
    genotype,
    oxygenLevel,
    medicalConditions = [],
  } = profile || {};

  // Profile is considered complete if these key fields exist
  const isProfileComplete = bmi && bloodType && genotype && oxygenLevel;

  const daysSinceUpdate = profile?.updatedAt ? timeAgo(profile.updatedAt) : null;

  return (
    <div className="dashboard">
      <main className="dashboard-main">
        <div className="dashboard-content">
          <div className="dashboard-header">
            <div className="header-text">
              <h1 className="dashboard-title">Welcome back, {profile?.username || 'User'}!</h1>
              <p className="dashboard-subtitle">Here's your health dashboard</p>
            </div>
            <div className="dashboard-link-wrapper">
              <Link to="/profile" className={isProfileComplete ? "dashboard-link" : "complete-profile-link"}>
                {isProfileComplete ? "Update health profile" : (<><Plus className="icon-plus" /> Complete health profile</>)}
              </Link>
            </div>
          </div>  
          <div className="completes-dashboard-grid">
            {/* Overall Status Card */}
            <div className="completes-card">
              <div className="completes-card-header">
                <div className="completes-icon-wrapper">
                  <svg className="completes-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="completes-card-title">Overall Status</h3>
              </div>
              <div className="completes-card-metrics">
                <div className="completes-metric-good">Good</div>
                <div className="completes-metric-subtext">2 concerns</div>
              </div>
              <div className="completes-progress-bar-bg">
                <div className="completes-progress-bar-fill" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Vital Signs Card */}
            <div className="completes-card">
              <div className="completes-card-header">
                <div className="completes-icon-wrapper">
                  <svg className="completes-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                  </svg>
                </div>
                <h3 className="completes-card-title">Vital Signs</h3>
              </div>
              <div className="completes-grid-two-cols">
                <div className="completes">
                  <p className="completes-label">O₂ Level</p>
                  <p className="completes-value">{oxygenLevel}</p>
                </div>
                <div className="completes">
                  <p className="completes-label">BMI</p>
                  <p className="completes-value">{bmi?.toFixed(2)}</p>
                </div>
              </div>
            </div>

            {/* Blood Info Card */}
            <div className="completes-card">
              <div className="completes-card-header">
                <div className="completes-icon-wrapper">
                  <svg className="completes-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect width="16" height="20" x="4" y="2" rx="2" />
                    <line x1="8" x2="16" y1="6" y2="6" />
                    <line x1="16" x2="16" y1="14" y2="18" />
                    <path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" />
                  </svg>
                </div>
                <h3 className="completes-card-title">Blood Info</h3>
              </div>
              <div className="completes-grid-two-cols">
                <div className="completes">
                  <p className="completes-label">Blood Type</p>
                  <p className="completes-value">{bloodType}</p>
                </div>
                <div className="completes">
                  <p className="completes-label">Genotype</p>
                  <p className="completes-value">{genotype}</p>
                </div>
              </div>
            </div>

            {/* Conditions Card */}
            <div className="completes-card">
              <div className="completes-card-header">
                <div className="completes-icon-wrapper">
                  <svg className="completes-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect width="16" height="20" x="4" y="2" rx="2" />
                    <line x1="8" x2="16" y1="6" y2="6" />
                    <line x1="16" x2="16" y1="14" y2="18" />
                    <path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" />
                  </svg>
                </div>
                <h3 className="completes-card-title">Conditions</h3>
              </div>
              <ul className="completes-label">
                {medicalConditions.length === 0 ? (
                  <li>No known conditions</li>
                ) : (
                  medicalConditions.map(condition => <li key={condition}>{condition}</li>)
                )}
                
              </ul>
            </div>
          </div>
          <div className="completess-grid">
      <div className="completess-left-column">
        <div className="completess-card">
          <div className="completess-card-header">
            <h2 className="completess-title">Personalized Recommendations</h2>
            <Link to="/health-topics" className="completess-view-all">View all</Link>
          </div>
        </div>
      </div>

      <div>
        <div className="completess-card">
          <div className="completess-card-header">
            <h2 className="completess-title">Alerts</h2>
            <svg className="completess-bell-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
          </div>

          <div className="completess-alert-list">
            <div className="completess-alert completess-green">
              <p className="completess-alert-title">Annual Physical Exam</p>
              <p className="completess-alert-subtext">Due in 3 months</p>
            </div>
            <div className="completess-alert completess-blue">
              <p className="completess-alert-title">Update Health Profile</p>
              <p className="completess-alert-subtext">
  {profile?.updatedAt ? timeAgo(profile.updatedAt) : 'Last updated date unavailable'}
</p>

            </div>
          </div>

          <div className="completess-recommendation-section">
            <h3 className="completess-recommendation-title">Recommended readings</h3>
            <ul className="completess-reading-list">
              <li>
                <a className="completess-reading-link" href="/article/understanding-hypertension">
                  <p className="completess-reading-title">Understanding Hypertension</p>
                  <p className="completess-reading-time">7 min read</p>
                </a>
              </li>
              <li>
                <a className="completess-reading-link" href="/article/nutrition-essentials">
                  <p className="completess-reading-title">Essential Nutrition</p>
                  <p className="completess-reading-time">10 min read</p>
                </a>
              </li>
              <li>
                <a className="completess-reading-link" href="/article/exercise-benefits">
                  <p className="completess-reading-title">Benefits of Exercise</p>
                  <p className="completess-reading-time">8 min read</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        </div>
      </main>
    </div>
  );
};

export default MyDashboard;
