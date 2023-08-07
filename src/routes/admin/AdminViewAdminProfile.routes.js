const express = require('express');
const router = express.Router();
const adminViewAdminProfileControllers = require('../../app/controllers/admin/AdminViewAdminProfileControllers')

router.get('/',adminViewAdminProfileControllers.AdminViewAdminProfileGet)


module.exports = router