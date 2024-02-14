const router = require('express').Router();
const assessmentController=require("../controllers/assessment.controller");

router.post("/setAssessment",assessmentController.setAssessment);
router.get("/getAssessment",assessmentController.getAssessment);

module.exports = router;