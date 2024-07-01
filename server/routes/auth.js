// Authentication backend route
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController"); // Ensure this path is correct

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
