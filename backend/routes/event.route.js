const router = require('express').Router();
const eventController=require("../controllers/event.controller");

router.post("/setEvent",eventController.setEvent);
router.get("/getEvent",eventController.getEvent);
module.exports = router;


