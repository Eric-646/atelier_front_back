
const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ error: "Token invalide" });
            } else {
                req.user = decodedToken.user;
                next();
            }
        });
    } else {
        res.status(401).json({ error: "Token manquant" });
    }
}