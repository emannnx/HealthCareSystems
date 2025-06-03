import React, { useState } from "react";
import "./AuthModal.css"; // Import your CSS file
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({ ...prevData, terms: e.target.checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8099/home/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
  
      if (response.ok) {
        alert("User registered successfully!");
        // Optionally reset form or redirect
      } else if (response.status === 409) {
        alert("Email already exists.");
      } else if (response.status === 400) {
        alert("Username already exists.");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again.");
    }
  };
   

  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
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

        <div className="form-group">
          <label htmlFor="password" className="label">Password</label>
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

        <div className="form-group">
          <label htmlFor="confirmPassword" className="label">Confirm password</label>
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
          <button
            type="submit"
            className="submit-btn"
            disabled={!formData.terms}
          >
            Create account
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
