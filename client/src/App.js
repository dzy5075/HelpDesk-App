import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicketForm from "./components/TicketForm";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import TicketDetails from "./components/TicketDetails";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TicketForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/tickets/:id" element={<TicketDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
