import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useLoading } from "../components/LoadingContext";
import { RiCloseLine } from "react-icons/ri";
import "./AuthModal.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const [showPassword, setShowPassword] = useState(false);

  const [popup, setPopup] = useState({
    open: false,
    message: "",
    type: "success", // or "error"
  });

  const closePopup = () => {
    setPopup({ open: false, message: "", type: "success" });
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, terms: e.target.checked }));
  };

  const isValidEmail = (email) => /^[\w.+-]+@(gmail|yahoo)\.com$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setPopup({ open: true, message: "Email must be a valid Gmail or Yahoo address.", type: "error" });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPopup({ open: true, message: "Passwords do not match.", type: "error" });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://healthhubuser.onrender.com/home/createuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        setPopup({ open: true, message: "User registered successfully!, Please go to Login form to Sign in", type: "success" });
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          terms: false,
        });
      } else if (response.status === 409) {
        setPopup({ open: true, message: "User already exists!", type: "error" });
      } else {
        const errorMessage = await response.text();
        setPopup({ open: true, message: errorMessage || "Registration failed", type: "error" });
      }
    } catch (error) {
      setPopup({ open: true, message: "Something went wrong. Please try again.", type: "error" });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="label">Full name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="label">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="form-group password-wrapper">
          <label htmlFor="password" className="label">Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input"
              required
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

        <div className="form-group password-wrapper">
          <label htmlFor="confirmPassword" className="label">Confirm password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input"
              required
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

        <div className="form-groups">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleCheckboxChange}
            required
            className="checkbox"
          />
          <label htmlFor="terms" className="checkbox-labels">
            I agree to the <a href="#" className="link">Terms of Service</a> and <a href="#" className="link">Privacy Policy</a>
          </label>
        </div>

        <div className="form-group">
          <button type="submit" className="submit-btn" disabled={!formData.terms}>
            Create account
          </button>
        </div>
      </form>

      {popup.open && (
        <div className={`popup-error ${popup.type}`}>
          <RiCloseLine
            size={24}
            onClick={closePopup}
            className="close-btn"
            style={{ cursor: "pointer", float: "right" }}
          />
          <p>{popup.message}</p>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
