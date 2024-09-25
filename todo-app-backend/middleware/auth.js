const jwt = require("jsonwebtoken");

const JWT_SECRET = "supersecretkey"; // Change to an environment variable in production

function authenticateToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.sendStatus(403); // Forbidden

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user; // Store user info in request for next middleware
    next();
  });
}

module.exports = authenticateToken;
