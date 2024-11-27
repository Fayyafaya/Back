const router = require("express").Router();
const productCtrl = require("../controller/productCtrl");

router.get("/", productCtrl.getAllProducts);
router.get("/:product_id", productCtrl.getProduct);
router.post(
  "/",productCtrl.createProduct);
router.put(
  "/:product_id",productCtrl.updateProduct);
router.delete("/:product_id", productCtrl.deleteProduct);

module.exports = router;
