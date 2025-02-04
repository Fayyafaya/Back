const router = require("express").Router();
const authCtrl = require("../controller/authCtrl");

router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);
router.post("/refreshToken", authCtrl.generateAccessToken);
router.post("/logout", authCtrl.logout);

module.exports = router;
