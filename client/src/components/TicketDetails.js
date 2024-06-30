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
      .get(`/api/admin/tickets/${id}`, {
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

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleUpdate = () => {
    axios
      .put(
        `/api/admin/tickets/${id}`,
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
    <div>
      <h1>Ticket Details</h1>
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
      <select value={status} onChange={handleStatusChange}>
        <option value="new">New</option>
        <option value="in progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
      <textarea
        placeholder="Response"
        value={response}
        onChange={handleResponseChange}
      ></textarea>
      <button onClick={handleUpdate}>Update Ticket</button>
    </div>
  );
};

export default TicketDetails;
