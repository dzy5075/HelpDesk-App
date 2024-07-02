import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
  const [tickets, setTickets] = useState([]);
  const token = localStorage.getItem("token");
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log("API URL:", apiUrl);
    console.log("Token:", token);

    if (!apiUrl || !token) {
      console.error("API URL or token is missing.");
      return;
    }

    axios
      .get(`${apiUrl}/api/tickets`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Tickets fetched:", response.data);
        setTickets(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the tickets!", error);
        if (error.response) {
          console.error("Error response data:", error.response.data);
        }
      });
  }, [token, apiUrl]);

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
