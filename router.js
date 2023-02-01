const router = require("express").Router();
router.get("/api/product");
router.get("/api/product/:id");
router.post("/api/product");
router.put("/api/product-update/:id");
router.delete("/api/product-delete/:id");