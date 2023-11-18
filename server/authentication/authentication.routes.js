const {
    registerController,
    loginController
  } = require("./authentication.controller");



const router = require("express").Router();

router.post("/signup", registerController);
router.post("/login", loginController);



module.exports = router;
