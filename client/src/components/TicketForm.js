import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/tickets", formData)
      .then((response) => {
        alert("Ticket submitted successfully!");
        setFormData({ name: "", email: "", description: "" });
      })
      .catch((error) => {
        alert("Error submitting ticket");
        console.error(
          "Error details:",
          error.response ? error.response.data : error.message
        );
      });
  };

  const handleAdminLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Got a problem? Submit a ticket. We will look into it.</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {/* <button onClick={handleAdminLogin} className="btn btn-link mt-3">Admin Login</button> */}
    </div>
  );
};

export default TicketForm;
