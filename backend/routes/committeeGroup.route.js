const router = require('express').Router();
const committeeGroupController=require("../controllers/committeeGroup.controller");
router.post('/setCommitteeGroup',committeeGroupController.setCommitteeGroup);
router.get("/getCommitteeGroup",committeeGroupController.getCommitteeGroup);

module.exports = router;