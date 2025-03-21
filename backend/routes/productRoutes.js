const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// Obtener todos los productos
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos" });
    }
});

// Agregar un nuevo producto
router.post("/", async (req, res) => {
    const { name, price, description, stock } = req.body;

    try {
        const newProduct = new Product({ name, price, description, stock });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: "Error al agregar producto" });
    }
});

module.exports = router;
