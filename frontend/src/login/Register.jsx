import React, { useState } from "react";
import landing2 from "../images/landing2.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "../landing/Navbar";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "jobseeker", // default role
    phone: "",
    location: "",
  });

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!nameRegex.test(data.name)) {
      alert("Name should contain only letters");
      return false;
    }

    if (!emailRegex.test(data.email)) {
      alert("Invalid email format");
      return false;
    }

    if (!phoneRegex.test(data.phone)) {
      alert("Phone number must be exactly 10 digits");
      return false;
    }

    if (data.password.length < 6) {
      alert("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // ✅ FRONTEND VALIDATION
    if (!validateForm()) return;

    try {
      const res = await fetch("https://jobportal-0isa.onrender.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.text();
      if (!res.ok) {
        alert(result || "Registration failed");
        return;
      }

      alert("Registration successful");
      setData({
        name: "",
        email: "",
        password: "",
        role: "jobseeker",
        phone: "",
        location: "",
      });
      navigate("/login");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-page-container">
        <div className="register-background">
          <form
            className="register-form-container"
            onSubmit={handleRegister}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              padding: "15px 30px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              width: "100%",
              maxWidth: "475px",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              Register
            </h2>

            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={data.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={data.role}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="jobseeker">Job Seeker</option>
              <option value="recruiter">Recruiter</option>
            </select>

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              value={data.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter your location"
              value={data.location}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                marginTop: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Register
            </button>

            <p style={{ textAlign: "center", marginTop: "15px" }}>
              Already have an account?{" "}
              <a
                href="/login"
                style={{ color: "#007bff", textDecoration: "underline" }}
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "16px",
};

export default Register;
