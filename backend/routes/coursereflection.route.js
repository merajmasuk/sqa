const router = require('express').Router();
const committeeController=require("../controllers/coursereflection.controller");

router.post("/setAssesment",committeeController.setCommittee);
router.get("/getAssesment",committeeController.getCommittee);

module.exports = router;