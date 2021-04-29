const express = require("express");
const ProductController = require("../controllers/productController");

const router = express.Router({ mergeParams: true });

router.post("/", ProductController.createProduct);

router.get("/:id", ProductController.getProduct);
router.get("/", ProductController.getProducts);

router.patch("/:id", ProductController.updateProduct);
router.patch("/:productId/variant/:id", ProductController.updateVariant);

router.delete("/:id", ProductController.deleteProduct);
router.delete("/variant/:id", ProductController.deleteVariant);

module.exports = router;
