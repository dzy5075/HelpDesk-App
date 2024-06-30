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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
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
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleAdminLogin}>Admin Login</button>
    </div>
  );
};

export default TicketForm;
