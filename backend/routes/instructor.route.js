const router = require('express').Router();
const committeeController=require("../controllers/instructor.controller");

router.post("/setInstructor",committeeController.setCommittee);
router.get("/getInstructor",committeeController.getCommittee);

module.exports = router;