import React, { useState } from "react";
import "../Styles/Login.scss";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { makeRequest } from "../axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ show, onToggle }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const pass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
  const validateEmail = (email) => emailRegex.test(email);
  const validatePassword = (password) => pass.test(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handle Submit executed"); // Check if this message appears in the console

    if (!validateEmail(email)) {
      alert("Invalid email address");
      return;
    }

    if (!validatePassword(password)) {
      alert(
        "Password must contain at least 8 characters, one uppercase letter, and one number"
      );
      return;
    }
    try {
      const response = await makeRequest.post(
        "http://localhost:8080/api/employee/login",
        {
          email: email,
          password: password,
        }
      );

      // Assuming the response contains user data after successful login
      if (response && response.status === 200) {
        // Redirect or perform necessary actions upon successful login
        console.log("Login successful!", response.data);
        navigate("/Employee");
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error, display error message, etc.
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className={`login-container ${show ? "active" : ""}`}>
      <h1 className="title">Sign in</h1>
      <img src="login.PNG" alt="Login Image" />{" "}
      {/* Include the image directly */}
      <form onSubmit={handleSubmit} className="for">
        <div className="email">
          <span className="em">
            <EmailOutlinedIcon />
          </span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="pass">
          <LockOutlinedIcon />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
          {/* Or use a button */}
          {/* <button onClick={handleForgotPassword}>Forgot Password?</button> */}
        </div>
      </form>
      <button type="submit" className="signin" onClick={handleSubmit}>
        Sign In
      </button>
    </div>
  );
};

export default Login;