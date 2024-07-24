const express = require('express');
const { isAuth, isAdmin } = require('../utils');

const productRouter = express.Router();

productRouter.post("/seed", ProductController.createAllProduts);
productRouter.get("/allProducts", ProductController.getAllProducts);
productRouter.get("/:id", ProductController.getProductByID);
productRouter.post("/", ProductController.adminCreateNewProduct);
productRouter.put("/:id", ProductController.updateProductByID);
productRouter.delete("/:id", ProductController.deleteProductByID);

module.exports = productRouter;

