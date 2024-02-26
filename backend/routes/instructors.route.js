const router = require('express').Router();
const committeeController=require("../controllers/instructors.controller");

router.post("/setInstructors",committeeController.setCommittee);
router.get("/getInstructors",committeeController.getCommittee);

module.exports = router;