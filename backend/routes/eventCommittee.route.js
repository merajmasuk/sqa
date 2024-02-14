const router = require('express').Router();
const eventController=require("../controllers/eventCommittee.controller");

router.post("/setEventCommittee",eventController.setEventCommittee);
router.get("/getEventCommittee",eventController.getEventCommittee);
module.exports = router;