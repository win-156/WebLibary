const express = require('express');
const router = express.Router();
const adminAccountUpdateControllers = require('../../app/controllers/admin/AdminAccountUpdateControllers')

router.get('/',adminAccountUpdateControllers.AdminAccountUpdateGet)

module.exports = router