require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");
const ticketRoutes = require("./routes/tickets");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const favicon = require("serve-favicon");

const app = express();
const PORT = process.env.PORT || 5000;
//favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.use("/api/tickets", ticketRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// Debug route to verify environment variables
app.get('/debug/env', (req, res) => {
  res.json({
    POSTGRES_URL: process.env.POSTGRES_URL,
    NODE_ENV: process.env.NODE_ENV,
    JWT_SECRET: process.env.JWT_SECRET
  });
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Internal Server Error');
});

app.use((req, res) => {
  res.status(404).send('404: Not Found');
});

module.exports = app;
