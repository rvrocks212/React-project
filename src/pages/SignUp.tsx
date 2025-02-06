import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if the email is already registered
    const userExists = users.some((user: any) => user.email === formData.email);
    if (userExists) {
      alert("User already exists! Please sign in.");
      return;
    }

    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful! Please Sign In.");
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-image"></div>
      <div className="signup-form">
        <h2>Create an Account</h2>
        <p>Already have an account?<a href="./">Sign In</a></p>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
