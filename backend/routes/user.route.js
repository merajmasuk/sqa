const router = require('express').Router();
const userController=require("../controllers/user.controller");

router.post("/setUser",userController.setUser);
router.post("/getUser",userController.getUser);
router.post("/forgetPassword",userController.forgetPassword);
router.post("/resetPassword",userController.resetPassword);
module.exports = router;
