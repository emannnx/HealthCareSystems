import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [user, setUser] = useState(null);

  // On mount, load user and auth state from localStorage
  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem('isAuthenticated');
      const storedUser = localStorage.getItem('healthhub-user');
  
      if (storedAuth === 'true' && storedUser) {
        setIsAuthenticated(true);
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, []);
  

  // Validate email to only allow Gmail or Yahoo
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    return regex.test(email);
  };

  // Validate password to ensure strength
  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  // Handle sign-in by calling backend
  const signIn = async (email, password) => {
    if (!validateEmail(email)) {
      setAuthError('Email must be a valid Gmail or Yahoo address');
      return false;
    }
    if (!validatePassword(password)) {
      setAuthError('Password must be at least 8 characters long, contain a number and a special character "!"');
      return false;
    }
  
    try {
      const response = await fetch('http://localhost:8099/home/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      const result = await response.json();
  
      if (response.ok && result.message === 'Login successful') {
        const loggedInUser = {
          username: result.username,
          email: result.email,
        };
  
        setUser(loggedInUser);
        setIsAuthenticated(true);
        setAuthError('');
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('healthhub-user', JSON.stringify(loggedInUser));
        return true;
      } else {
        setAuthError('Invalid email or password');
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      setAuthError('Failed to connect to server');
      return false;
    }
  };
  

  // Handle sign-out
  const signOut = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('healthhub-user');
  };

  // Update health profile data
  const updateHealthProfile = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem('healthhub-user', JSON.stringify(updatedUser));
  };
  

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        signOut,
        authError,
        user,
        updateHealthProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to access auth context
export const useAuth = () => useContext(AuthContext);
