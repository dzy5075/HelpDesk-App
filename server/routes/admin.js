//Admin backend routes
const express = require("express");
const router = express.Router();
const { authenticate, isAdmin } = require("../middleware/auth");
const ticketController = require("../controllers/ticketController");

router.use(authenticate);
router.use(isAdmin);

router.get("/tickets", ticketController.getAllTickets);
router.get("/tickets/:id", ticketController.getTicketById);
router.put("/tickets/:id", ticketController.updateTicket);

module.exports = router;
