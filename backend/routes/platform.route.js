const router = require('express').Router();
const committeeController=require("../controllers/platform.controller");

router.post("/setPlatform",committeeController.setCommittee);
router.get("/getPlatform",committeeController.getCommittee);

module.exports = router;