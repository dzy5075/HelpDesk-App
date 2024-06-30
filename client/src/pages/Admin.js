import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
  const [tickets, setTickets] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/api/admin/tickets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTickets(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the tickets!", error);
      });
  }, [token]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            {ticket.name} - {ticket.description} - {ticket.status}
            <Link to={`/admin/tickets/${ticket.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
