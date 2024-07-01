const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  console.log("Token:", token);
  // Access deny if token does not exist/match
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }
  // Verify Token for authentication
  try {
    const verified = jwt.verify(token, "your_jwt_secret");
    req.user = verified;
    console.log("Verified user:", verified);
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(400).json({ error: "Invalid token" });
  }
};
// Check user role is admin
exports.isAdmin = (req, res, next) => {
  console.log("User role:", req.user.role);
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied, admin only" });
  }
  next();
};
