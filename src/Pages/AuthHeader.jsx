import React from 'react';
import { RiCloseLine } from "react-icons/ri";

export default function AuthHeader({ isLogin, setIsLogin, onClose }) {
  return (
    <div className="auth-modal-header">
      <div className="auth-tab-wrapper">
        <button
          className={`auth-tab ${isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(true)}
        >
          Sign In
        </button>
        <button
          className={`auth-tab ${!isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>
      <RiCloseLine
        size={24}
        onClick={onClose}
        color="#000"
        className="auth-close-icon"
      />
    </div>
  );
}
