import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import AuthModal from '../Pages/AuthModal';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [isAuthenticated]);

  const handleClose = () => {
    setShowModal(false);
  };

  if (!isAuthenticated) {
    return (
      <>
        {showModal && (
          <div className="signin-overlay">
            <AuthModal
              isOpen={showModal}
              onClose={handleClose}
              onSuccess={handleClose}
              initialTab="login"
            />
          </div>
        )}
      </>
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
