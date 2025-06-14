import React, { useState } from "react";
import { useAuth } from "../components/AuthContext";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginForm({ onSuccess, onOpenAuth }) {
  const { signIn, authError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      const success = await signIn(email, password);
      if (!success) {
        setError(authError || "Invalid email or password.");
        setPopupVisible(true);
      } else {
        onSuccess?.();
      }
    } catch (err) {
      setError("Failed to sign in. Please check your credentials and try again.");
      setPopupVisible(true);
    }
  };  

  return (
    <>
      {popupVisible && (
        <div className="popup-error">
          <RiCloseLine
            size={24}
            onClick={closePopup}
            color="white"
            className="close-btn"
          />
          <p>{error}</p>
        </div>
      )}

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group password-wrapper">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="password-input-container">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
            <span
              className="password-toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
          </div>
        </div>

        <div className="form-options">
          <label className="checkbox-wrapper">
            <input type="checkbox" name="remember-me" className="checkbox" />
            Remember me
          </label>
          <span
            style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
            onClick={() => onOpenAuth("register")}
            className="forgot-password"
          >
            Forgot your password?
          </span>
        </div>

        <button type="submit" className="submit-button">
          Sign In
        </button>
      </form>
    </>
  );
}
