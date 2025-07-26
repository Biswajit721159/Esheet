const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.token; 
        if (!token) {
            return res.status(401).json({ message: "No token, authorization denied" });
        }
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (e) {
        console.error("Token verification failed:", e);
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

module.exports = { verifyToken }