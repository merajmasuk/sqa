const router = require('express').Router()
const paymentController = require("../controllers/payment.controller");

router.post("/setPayment", paymentController.setPayment);
router.get("/getPayment", paymentController.getPayment);
router.put("/updatePayment", paymentController.updatePayment);
router.delete("/deletePayment/:id", paymentController.deletePayment);

module.exports = router;
