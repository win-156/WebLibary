const express = require('express');
const router = express.Router();
const adminChangePasswordControllers = require('../../app/controllers/admin/AdminChangePasswordControllers')

router.get('/', adminChangePasswordControllers.AdminChangePasswordGet)


module.exports = router