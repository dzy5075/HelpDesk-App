import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/api/auth/login`, {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      alert("Login successful");
      navigate("/admin");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Admin Login Page</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="mb-3 row justify-content-center">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            <strong>Username:</strong>
          </label>
          <div className="col-sm-6 col-md-4">
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            <strong>Password:</strong>
          </label>
          <div className="col-sm-6 col-md-4">
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-4">
            <button type="submit" className="btn btn-success w-100">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
