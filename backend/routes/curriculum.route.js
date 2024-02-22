const router = require('express').Router();
const curriculumRoute=require("../controllers/curriculum.controller");

router.post("/setCurriculum",curriculumRoute.setEvent);
router.get("/getCurriculum",curriculumRoute.getEvent);

module.exports = router;
