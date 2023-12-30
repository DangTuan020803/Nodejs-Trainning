const express = require("express");
const router = express.Router();

router.get("/cart", (req, res) => {
  res.json("Cart");
});
router.get("/product", (req, res) => {
  res.json("product");
});
router.get("/:id", (req, res) => {
  res.json(`Id ${req.params.id}`);
});
module.exports = router;
