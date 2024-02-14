const router = require('express').Router();
const sponsorController=require("../controllers/sponsor.controller");

router.post("/setSponsor",sponsorController.setSponsor);
router.get("/getSponsor",sponsorController.getSponsor);
module.exports = router;
