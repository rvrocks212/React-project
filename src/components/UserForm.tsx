import React, { useState, useEffect } from "react";
import "./UserForm.css";

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("userForm");

    if (savedData) {
      return JSON.parse(savedData);
    } else {
      // Generate a unique user ID only if not already present
      const newUser = {
        id: `USR-${Date.now()}-${Math.floor(Math.random() * 1000)}`, 
        name: "",
        address: "",
        email: "",
        phone: "",
      };
      localStorage.setItem("userForm", JSON.stringify(newUser)); // Save initial data
      return newUser;
    }
  });

  const [isFormDirty, setIsFormDirty] = useState(false);

  useEffect(() => {
    if (isFormDirty) {
      localStorage.setItem("userForm", JSON.stringify(formData));
    }
  }, [formData, isFormDirty]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isFormDirty) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isFormDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormDirty(true);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userForm", JSON.stringify(formData));
    alert("User data saved!");
    setIsFormDirty(false);
  };

  return (
    <div className="user-form-container">
      <h2>User Data Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" value={formData.id} readOnly /> {/* Auto-generated User ID */}
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserForm;
