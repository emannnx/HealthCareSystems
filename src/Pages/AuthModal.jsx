// AuthModal.jsx
import React, { useState, useEffect } from "react";
import AuthHeader from "./AuthHeader";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ErrorBoundary from "./ErrorBoundary";
import "./AuthModal.css";

export default function AuthModal({ isOpen, onClose, onSuccess, onOpenAuth, initialTab = "login" }) {
  const [isLogin, setIsLogin] = useState(initialTab === "login");

  // Sync state when modal is reopened
  useEffect(() => {
    setIsLogin(initialTab === "login");
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-container" onClick={(e) => e.stopPropagation()}>
        <AuthHeader isLogin={isLogin} setIsLogin={setIsLogin} onClose={onClose} />
        <div className="auth-modal-body">
          <ErrorBoundary>
            {isLogin ? <LoginForm onSuccess={onSuccess} onOpenAuth={onOpenAuth}/> : <RegisterForm onOpenAuth={onOpenAuth}/>}
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}
