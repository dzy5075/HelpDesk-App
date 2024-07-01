// TicketForm/HomePage
import React, { useState } from "react";
import axios from "axios";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
// handle form details
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
// Submit ticket to postgres server: helpdesk
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

  return (
    <div className="container mt-5">
      {/* Header */}
      <h1 className="mb-4">
        Got a problem? Submit a ticket. We will look into it.
      </h1>
      {/* Ticket Form */}
      <form class="ticket-form"onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label htmlFor="name" className="form-label">
              <strong>
                <u>Name:</u>
              </strong>
            </label>
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
            <label htmlFor="email" className="form-label">
              <strong>
                <u>Email:</u>
              </strong>
            </label>
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
          <label htmlFor="description" className="form-label">
            <strong>
              <u>Description:</u>
            </strong>
          </label>
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
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
