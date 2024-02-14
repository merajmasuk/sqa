const router = require('express').Router();
const designationController=require("../controllers/designation.controller");

router.post("/setDesignation",designationController.setDesignation);
router.get("/getDesignation",designationController.getDesignation);

module.exports = router;
