var express = require("express");
var router = express.Router();
var { userRegister, userLogin } = require("../controllers/user");
/* GET users listing. */
router.post("/register", userRegister);
router.post("/login", userLogin);

module.exports = router;
