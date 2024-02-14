const router = require('express').Router();
const committeeController=require("../controllers/committee.controller");

router.post("/setCommittee",committeeController.setCommittee);
router.get("/getCommittee",committeeController.getCommittee);

module.exports = router;