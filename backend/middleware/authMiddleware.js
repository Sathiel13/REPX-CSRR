const jwt = require('jsonwebtoken');
const User = require('../models/User');
const express = require("express");
const app = express();

app.use(express.json()); // Este middleware permite procesar JSON

const protect = async (req, res, next) => {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer")) {
        try {
            token = token.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            res.status(401).json({ message: 'Token inválido' });
        }
    } else {
        res.status(401).json({ message: 'No autorizado, no hay token' });
    }
};

module.exports = protect;
