const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // to prevent CORS errors
const sequelize = require("./config/database");
const ticketRoutes = require("./routes/tickets");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
// const User = require("./models/User");
// const Ticket = require("./models/Ticket");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/tickets", ticketRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
    return sequelize.sync(); // To ensures tables are created
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
