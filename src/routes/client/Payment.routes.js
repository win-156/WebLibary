const express = require('express');
const router = express.Router();

const  paymentControllers = require('../../app/controllers/client/PaymentControllers')

router.get('/:token', paymentControllers.PaymentGet)


module.exports = router