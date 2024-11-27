const router = require("express").Router();
const orderCtrl = require("../controllers/orderCtrl");

router.get("/", orderCtrl.getAllOrders);
router.get("/:order_id", orderCtrl.getOrder);
router.post("/", orderCtrl.createOrder);

module.exports = router;
