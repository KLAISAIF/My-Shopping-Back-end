const router = require('express').Router();
const user = require("./user/user.routes");
const auth = require("./authentication/authentication.routes")
const prod = require("./products/products.routes")





router.use("/user", user);
router.use('/auth',auth);
router.use('/product',prod);
module.exports = router;
