const router = require("express").Router();
const userCtrl = require("../controller/userCtrl");

router.get("/me", userCtrl.getMe);
router.put("/:id",  userCtrl.updateUser);
router.get("/:id", userCtrl.getUser);
router.get("/",  userCtrl.getAllUsers);
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;
