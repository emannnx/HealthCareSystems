import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "../components/Toast"; // adjust path as needed
import { useLoading } from "../components/LoadingContext"; // ✅ import the loading context
import "./AuthModal.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading(); // ✅ grab setLoading from context

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState({ open: false, message: "", variant: "default" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (toast.open) setToast({ ...toast, open: false });
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, terms: e.target.checked }));
  };

  const isValidEmail = (email) => /^[\w.+-]+@(gmail|yahoo)\.com$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setToast({ open: true, message: "Email must be a valid Gmail or Yahoo address.", variant: "destructive" });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setToast({ open: true, message: "Passwords do not match.", variant: "destructive" });
      return;
    }

    setLoading(true); // ✅ show loading
    try {
      const response = await fetch("https://healthhubuser.onrender.com/home/createuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToast({ open: true, message: "User registered successfully!", variant: "success" });
        setFormData({ name: "", email: "", password: "", confirmPassword: "", terms: false });
      } else if (response.status === 409) {
        setToast({ open: true, message: "User already exists!", variant: "destructive" });
      } else {
        const errorMessage = await response.text();
        setToast({ open: true, message: errorMessage || "Registration failed", variant: "destructive" });
      }
    } catch (error) {
      setToast({ open: true, message: "Something went wrong. Please try again.", variant: "destructive" });
      console.error(error);
    } finally {
      setLoading(false); // ✅ hide loading
    }
  };

  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div className="form-group">
          <label htmlFor="name" className="label">Full name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
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

      {toast.open && (
        <Toast
          variant={toast.variant}
          open={toast.open}
          onOpenChange={(v) => setToast({ ...toast, open: v })}
        >
          <ToastTitle>{toast.variant === "destructive" ? "Error" : "Success"}</ToastTitle>
          <ToastDescription>{toast.message}</ToastDescription>
          <ToastClose />
        </Toast>
      )}
    </div>
  );
};

export default RegisterForm;
