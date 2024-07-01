// Admin Dashboard/Tickets
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
    <div className="container mt-5">
      <h1 className="mb-4">Admin Dashboard and Tickets</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>
              <u>Name</u>
            </th>
            <th>
              <u>Email</u>
            </th>
            <th>
              <u>Description</u>
            </th>
            <th>
              <u>Response</u>
            </th>
            <th>
              <u>Status</u>
            </th>
            <th>
              <u>Actions</u>
            </th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.name}</td>
              <td>{ticket.email}</td>
              <td>{ticket.description}</td>
              <td>{ticket.response || "No response yet!"}</td>
              <td>{ticket.status}</td>
              <td>
                <Link
                  to={`/admin/tickets/${ticket.id}`}
                  className="btn btn-success btn-sm"
                >
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
