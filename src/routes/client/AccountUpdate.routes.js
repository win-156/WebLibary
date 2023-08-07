const express = require('express');
const router = express.Router();
const  accountUpdateControllers = require('../../app/controllers/client/AccountUpdateControllers')

router.get('/:token',accountUpdateControllers.AccountUpdateGet)


module.exports = router
