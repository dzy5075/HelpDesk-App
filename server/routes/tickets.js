const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// These routes are publicly accessible
router.post('/', ticketController.createTicket);
router.get('/', ticketController.getAllTickets);
router.get('/:id', ticketController.getTicketById);
router.put('/:id', ticketController.updateTicket);

module.exports = router;
