const router = require('express').Router();
const subjectCourseController=require("../controllers/subjectCourse.controller");

router.post("/setSubjectCourse",subjectCourseController.setSubjectCourse);
router.get("/getSubjectCouser",subjectCourseController.getSubjectCourse);
module.exports = router;
