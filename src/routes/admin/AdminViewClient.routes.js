const express = require('express');
const router = express.Router();
const adminViewClientControllers = require('../../app/controllers/admin/AdminViewClientControllers')

router.get('/',adminViewClientControllers.AdminViewClientGet)


module.exports = router