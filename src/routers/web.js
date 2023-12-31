const express = require("express");
const router = express.Router();
const {
  getCart,
  getProduct,
  getId,
} = require("../controllers/homeContronller");
// router.get(
//   "/",
//   (req, res, next) => {
//     // console.log("md1");
//     next();
//   },
//   (req, res, next) => {
//     // console.log("md2");
//     next();
//   },
//   (req, res, next) => {
//     // console.log("md3");
//     next();
//   }
// );
router.get("/cart/", getCart);
router.get("/products/", getProduct);
router.get("/:id/", getId);
module.exports = router;
