const express = require("express");
const router = express.Router();
const User = require("../models/user"); // Asegúrate de que este modelo existe

//Est ruta uso para manejar POST/users
router.post("/", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: "Usuario creado con éxito", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error al agregar usuario", error: error.message });
    }
});

module.exports = router;