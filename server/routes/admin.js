const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.use(require('../middleware/auth').authenticate);

router.get('/tickets', ticketController.getAllTickets);
router.get('/tickets/:id', ticketController.getTicketById);
router.put('/tickets/:id', ticketController.updateTicket);

module.exports = router;
