const router = require('express').Router();
const committeeController=require("../controllers/assesmentevaluation.controller");

router.post("/setAssesmentevaluation",committeeController.setCommittee);
router.get("/getAssesmentevaluation",committeeController.getCommittee);

module.exports = router;