import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "supersecret_jwt_key";

export const verifyToken = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: "No token provided" });
  const parts = header.split(" ");
  if (parts.length !== 2) return res.status(401).json({ message: "Invalid token format" });
  const token = parts[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // contains id and userType
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

// helper to require roles
export const requireRole = (roles = []) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });
  if (!roles.includes(req.user.userType)) return res.status(403).json({ message: "Forbidden" });
  next();
};
