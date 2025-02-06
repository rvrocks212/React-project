import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const Signin: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = storedUsers.find(
      (user: any) => user.email === formData.email && user.password === formData.password
    );

    if (userExists) {
      alert("Signin Successful!");
      navigate("/home");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h1>Welcome Back!</h1>
        <p>Don't have an account?<a href="./signup">Sign Up</a></p>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;