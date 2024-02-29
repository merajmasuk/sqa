const router = require('express').Router();
const committeeController=require("../controllers/courses.controller");

router.post("/setcourses",committeeController.setCommittee);
router.get("/getcourses",committeeController.getCommittee);

module.exports = router;