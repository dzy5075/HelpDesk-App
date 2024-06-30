const Ticket = require("../models/Ticket");
const logEmail = require("../Utils/emailLogger");

// Response to successful ticket creation
exports.createTicket = async (req, res) => {
  try {
    console.log("Received data:", req.body); // Log received data
    const ticket = await Ticket.create(req.body);
    console.log("Created ticket:", ticket); // Log created ticket

    // Simulate sending an email by logging the message in the backlog!
    const emailBody = `
        Hi ${ticket.name},
  
        Your ticket has been successfully created with the following details:
        Description: ${ticket.description}
        Status: ${ticket.status}
  
        We will get back to you shortly.
  
        Best Regards,
        Support Team
      `;
    logEmail(ticket.email, "Ticket Created Successfully", emailBody);

    res.status(201).json(ticket);
  } catch (error) {
    console.error("Error creating ticket:", error); // Log error details
    res.status(400).json({ error: error.message });
  }
  ///////////////////////////////////////////////////////////////////////////
};

// Retrieves all tickets
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.status(200).json(tickets);
  } catch (error) {
    console.error("Error fetching tickets:", error); // Log error details
    res.status(400).json({ error: error.message });
  }
};

// Retrieve specific ticket
exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) {
      console.log("Ticket not found");
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    console.error("Error fetching ticket:", error); // Log error details
    res.status(400).json({ error: error.message });
  }
};

// Update a ticket
exports.updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) {
      console.log("Ticket not found");
      return res.status(404).json({ error: "Ticket not found" });
    }
    const { status, response } = req.body;
    ticket.status = status;
    ticket.response = response;
    await ticket.save();
    res.status(200).json(ticket);
  } catch (error) {
    console.error("Error updating ticket:", error); // Log error details
    res.status(400).json({ error: error.message });
  }
};
