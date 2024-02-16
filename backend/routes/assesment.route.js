const router = require('express').Router();
const committeeController=require("../controllers/assesment.controller");

router.post("/setAssesment",committeeController.setCommittee);
router.get("/getAssesment",committeeController.getCommittee);

module.exports = router;