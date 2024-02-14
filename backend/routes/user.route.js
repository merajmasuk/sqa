const router = require('express').Router();
const userController=require("../controllers/user.controller");

router.post("/setUser",userController.setUser);
router.post("/getUser",userController.getUser);
router.post("/forgetPassword",userController.forgetPassword);
module.exports = router;
