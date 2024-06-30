const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  console.log("Token:", token); // Debugging

  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }

  try {
    const verified = jwt.verify(token, "your_jwt_secret");
    req.user = verified;
    console.log("Verified user:", verified); // Debugging
    next();
  } catch (error) {
    console.error("Token verification failed:", error); // Debugging
    res.status(400).json({ error: "Invalid token" });
  }
};

exports.isAdmin = (req, res, next) => {
  console.log("User role:", req.user.role); // Debugging
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied, admin only" });
  }
  next();
};
