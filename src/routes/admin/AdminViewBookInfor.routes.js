const express = require('express');
const router = express.Router();
const adminViewBookInforControllers = require('../../app/controllers/admin/AdminViewBookInforControllers')

router.get('/', adminViewBookInforControllers.AdminViewBookInforGet)


module.exports = router