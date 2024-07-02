// Single Ticket Details
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const TicketDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`/api/tickets/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTicket(response.data);
        setStatus(response.data.status);
        setResponse(response.data.response || "");
      })
      .catch((error) => {
        console.error("There was an error fetching the ticket details!", error);
      });
  }, [id, token]);
// Changing Ticket Status
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };
// Update Ticket Response
  const handleUpdate = () => {
    axios
      .put(
        `/api/tickets/${id}`,
        { status, response },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        alert("Ticket updated successfully");
        navigate("/admin");
      })
      .catch((error) => {
        console.error("There was an error updating the ticket!", error);
      });
  };

  if (!ticket) return <div>Loading...</div>;

  return (
    <div className="container mt-5 ticket-details">
      <button className="btn btn-secondary mb-3" onClick={() => navigate("/admin")}>Back to Tickets</button>
      <h1><u>Ticket Details</u></h1>
      <p>
        <strong>Name:</strong> {ticket.name}
      </p>
      <p>
        <strong>Email:</strong> {ticket.email}
      </p>
      <p>
        <strong>Description:</strong> {ticket.description}
      </p>
      <p>
        <strong>Status:</strong> {ticket.status}
      </p>
      <p>
        <strong>Response:</strong> {ticket.response}
      </p>
      <div className="mb-3">
        <label htmlFor="status" className="form-label"><strong>Status:</strong></label>
        <select id="status" value={status} onChange={handleStatusChange} className="form-select">
          <option value="new">New</option>
          <option value="in progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="response" className="form-label"><strong>Response:</strong></label>
        <textarea
          id="response"
          className="form-control"
          placeholder="Response"
          value={response}
          onChange={handleResponseChange}
        ></textarea>
      </div>
      <button onClick={handleUpdate} className="btn btn-success">Update Ticket</button>
    </div>
  );
};

export default TicketDetails;
