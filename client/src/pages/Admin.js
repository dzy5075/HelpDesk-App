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
    <div className="container mt-5">
      <h1>Admin Dashboard</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Description</th>
            <th scope="col">Ticket Status</th>
            <th scope="col">Response</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.name}</td>
              <td>{ticket.email}</td>
              <td>{ticket.description}</td>
              <td>{ticket.status}</td>
              <td>{ticket.response}</td>
              <td>
                <Link to={`/admin/tickets/${ticket.id}`} className="btn btn-success">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
