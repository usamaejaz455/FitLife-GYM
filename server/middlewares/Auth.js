const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {

    const authHeader = req.headers["authorization"];
    
    if (!authHeader) {
        return res.status(401).json({ error: "You are not authenticated" });
    }
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: "Token not found" });
    }
    
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }
};

module.exports = ensureAuthenticated;
