const router = require('express').Router();
const committeeController=require("../controllers/maintenanceupdates.controller");

router.post("/setmaintenanceupdates",committeeController.setCommittee);
router.get("/getmaintenanceupdates",committeeController.getCommittee);

module.exports = router;