const router = require('express').Router();
const committeeController=require("../controllers/committee.controller");
const authentication=require("../helper/Authorization.route")

router.post("/setCommittee",authentication.verifyJWT,committeeController.setCommittee);
router.get("/getCommittee",committeeController.getCommittee);

module.exports = router;