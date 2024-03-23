const express = require("express");
const router = express.Router();
const { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController.js');

// Get ALL Products
router.get('/', getAllProducts);

// GET One Product by ID
router.get("/:id", getProduct);

// Create One Product
router.post("/", createProduct);

// Update One Product
router.put("/:id", updateProduct);

// Delete One Product
router.delete("/:id", deleteProduct);




module.exports = router;